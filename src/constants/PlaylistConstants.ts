export const GENRE_PLAYLIST_TYPE = 'GENRE_PLAYLIST_TYPE';

export const GENRES = [
  { key: 'chill', query: 'chill house' },
  { key: 'deep', query: 'deep house' },
  { key: 'dubstep', query: 'dubstep' },
  { key: 'house', query: 'house' },
  { key: 'progressive', query: 'progressive house' },
  { key: 'tech', query: 'tech house' },
  { key: 'trance', query: 'trance' },
  { key: 'tropical', query: 'tropical house' },
];

export const TIMES = [
  { key: '7', label: '7 days' },
  { key: '30', label: '30 days' },
  { key: '90', label: '90 days' },
];

export const GENRE_QUERY_MAP = GENRES.reduce((obj, genre) => ({
  ...obj,
  [genre.key]: genre.query,
}), {});
