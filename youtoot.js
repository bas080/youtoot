#!/usr/bin/env node

const {spawn} = require('child_process')
const streamToString = require('stream-to-string')
const youtubeDlProcess = spawn(process.env.YOUTUBE_DL_BIN || 'youtube-dl', ['-j', process.argv[2]])
const Mastodon = require('mastodon-api')
const https = require('https')

const mastodon =  new Mastodon({
  client_key: process.env.CLIENT_KEY,
  client_secret: process.env.CLIENT_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  timeout_ms: process.env.TIMEOUT_MS || 60000,
  api_url: process.env.API_URL,
})

streamToString(youtubeDlProcess.stdout)
  .then(JSON.parse.bind(JSON))
  .then(response => {
    const {display_id, title, thumbnail, description, extractor, webpage_url} = response
    const status = `${title}
${description.length >= 128 ? (description.substring(0, 128).trim()) : description} ${webpage_url}

#${extractor}`
    return new Promise((resolve, reject) =>
      https.get(thumbnail, file => {
        mastodon
          .post('media', {
            file,
            description: title,
          })
          .then(response => mastodon.post('statuses', {
            visibility: 'public',
            status,
            media_ids: [response.data.id]
          }))
          .then(resolve)
          .catch(reject)
      }))
  })
  .then(console.log)
  .catch(console.error)
