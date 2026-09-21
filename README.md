# Shubham Song

A lightweight browser-based music player built with HTML, CSS, and vanilla JavaScript. It provides a Spotify-inspired interface for browsing songs, filtering by category, searching, and controlling playback.

## Features

- Hindi, Bhojpuri, and other music categories
- Search by song title, artist, or album
- Play, pause, previous, next, shuffle, and progress controls
- Volume control and full-screen player view
- Responsive sidebar navigation for desktop and mobile
- Local cover thumbnails with remote audio sources
- Optional additional catalog from `music-main/song.json`

## Project Structure

```text
music-main/
  index.html          Main application page
  music-main.html     Alternate application page
  script.js           Music data, filtering, and player behavior
  styles.css          Application styling
  thumbnails/         Local cover images
```

## Running Locally

Because the app loads JSON data with `fetch()`, open it through a local web server instead of directly from the file system.

From the project directory, run one of these commands:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

A static server such as VS Code Live Server works as well.

## Data

The built-in song list is defined in `music-main/script.js`. Additional songs can be supplied in `music-main/song.json` using this format:

```json
[
  {
    "title": "Song title",
    "url": "https://example.com/song.mp3"
  }
]
```

Audio and remote artwork must be reachable by the browser. Network access may be required for remote media.
