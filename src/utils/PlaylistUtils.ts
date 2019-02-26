import {GENRE_PLAYLIST_TYPE, GENRE_QUERY_MAP} from 'constants/PlaylistConstants';
import { denormalize } from 'normalizr';
import moment from 'moment';
import { songSchema } from 'constants/Schemas';
import {SONGS_URL} from 'constants/ApiConstants';
// interface IPlaylistData{
//   playlists:any;
// }

const isFetching = (playlist:string, playlists:any) => (playlist in playlists
  ? playlists[playlist].isFetching
  : false
);
const genrePlaylistUrl = (genre:string, time:string) => {
  const genreUriSegment = `$tags=${GENRE_QUERY_MAP[genre] || genre}`;
  const timeUriSegment = time ? `&created_at[from]=${moment().subtract(Number(time), 'days').format('YYYY-MM-DD%2012:00:00')}` : 0;
  return `${SONGS_URL}${timeUriSegment}${genreUriSegment}`;
}
const playlistSongs = (playlist:string, playlists:any, entities:any) => (playlist in playlists ?
  denormalize(playlists[playlist].items, [songSchema], entities)
  : []
);

const playlistNextUrl = (
  playlist:string,
  playlists:any,
  oauthToken?:any,
) => (playlist in playlists && playlists[playlist].nextUrl 
  ? `${playlists[playlist].nextUrl}${oauthToken ? `&oauth_token=${oauthToken}`
  : ''}` 
  : null
);

export const playlistData = (
  genre:string,
  time: string,
  entities:any, 
  playlists:any, 
) => {
  const playlist = [GENRE_PLAYLIST_TYPE, genre, time].join('|');
  return {
    isFetching: isFetching(playlist, playlists),
    playlist,
    playlistUrl: genrePlaylistUrl(genre, time),
    playlistNextUrl: playlistNextUrl(playlist, playlists),
    songs: playlistSongs(playlist, playlists, entities),
  }
}