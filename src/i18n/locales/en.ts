import type id from './id'

const en: typeof id = {
  nav: {
    home: 'Home',
    search: 'Search',
    library: 'Library',
    settings: 'Settings',
  },
  shell: {
    skipToContent: 'Skip to content',
    mainNav: 'Main navigation',
    playlists: 'Playlists',
    noPlaylists: 'No playlists yet.',
    player: 'Player',
    playerEmpty: 'Nothing is playing',
    panel: 'Queue and lyrics',
    queue: 'Queue',
    lyrics: 'Lyrics',
    queueEmpty: 'Upcoming songs will show up here.',
    lyricsEmpty: 'Song lyrics will show up here.',
  },
  home: {
    title: 'Home',
    empty: 'Music discovery and recommendations will show up here.',
  },
  search: {
    title: 'Search',
    empty: 'Search results for songs, artists and albums will show up here.',
  },
  library: {
    title: 'Library',
    empty: 'Your playlists and liked songs will show up here.',
  },
  settings: {
    title: 'Settings',
    language: 'Language',
    languageHint: 'Choose the display language of the app.',
  },
  languages: {
    id: 'Indonesia',
    en: 'English',
  },
  notFound: {
    title: 'Page not found',
    back: 'Back to Home',
  },
}

export default en
