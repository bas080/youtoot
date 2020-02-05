# youtoot

Toot media that youtube-dl supports.

## Dependencies

> Latest tested versions. Chances are that youtoot works with other versions also.

- pip 9.0.1 from /usr/lib/python2.7/dist-packages (python 2.7)
- youtube-dl 2020.01.24
- node v11.15.0
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

- [ ] Add an example on how to add multiple files (xargs).
- [ ] Allow to configure (global) toot settings.
- [ ] Define the bin file in the package.json.

> This file is generated. Please edit files in ./doc/.
