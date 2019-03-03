import { createSelector } from 'reselect';

export const getEntities = (state:any) => state.entities;
export const getPlaylists = (state:any) => state.playlists;
export const getGenre = (state:any) => (state.router.route.options.q
  ? ''
  : (state.router.route.options.g || 'house')
);
export const getTime = (state:any) => state.router.route.options.t || '';

export const getIsPlaying = (state:any) => state.player.isPlaying;
export const getPlayingIndex = (state:any)=> state.player.playingIndex;
export const getPlaylist = (state:any) => state.player.playlist;

export const getPlayingSongId = createSelector(
  getPlayingIndex,
  getPlaylist,
  getPlaylists,
  (playingIndex, playlist, playlists) => {
    if(playlist && playingIndex !== null) {
      return playlists[playlist].items[playingIndex];
    }
  }
);