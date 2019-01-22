# youtoot

Toot media that youtube-dl supports.

## Dependencies

> Latest tested versions. Chances are that youtoot works with other versions also.

- pip 1.5.4 from /usr/lib/python2.7/dist-packages (python 2.7)
- youtube-dl 2019.02.18
- node v9.11.2
- npm 6.7.0

## Setup

Require `youtube-dl` as a dependency. Used to get the content meta-data. The
easiest is to install it globally using Python's `pip`.

`sudo pip install youtube-dl`

Alternative installation methods of youtube-dl can be found in the youtube-dl
documentation
https://github.com/rg3/youtube-dl/blob/master/README.md#installation

## Variables

- CLIENT_KEY
- CLIENT_SECRET
- ACCESS_TOKEN
- TIMEOUT_MS
- API_URL
- YOUTUBE_DL_BIN

## Usage

Simply suply an url or something that youtube-dl understand as an identifier.

`./youtoot <url-or-id>`

## Roadmap

- [ ] Support multiple URLS and playlist extractors.
- [ ] Allow to configure (global) toot settings.

> This file is generated. Please edit files in ./doc/.
