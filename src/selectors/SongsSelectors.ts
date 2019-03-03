import { createSelector } from 'reselect';
import {playlistData} from 'utils/PlaylistUtils';
import {getPlaylists, getEntities} from 'selectors/CommonSelectors';

const getGenre = () => 'house';
const getTime = () => ''

const getPlaylistData = createSelector(
  getGenre,
  getTime,
  getEntities,
  getPlaylists,
  playlistData,
)
export default getPlaylistData;
