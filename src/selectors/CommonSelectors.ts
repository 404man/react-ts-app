// import {createSelector} from 'reselect';

export const getEntities = (state:any) => state.entities;
export const getPlaylists = (state:any) => state.playlists;
export const getGenre = (state:any) => (state.router.route.options.q
  ? ''
  : (state.router.route.options.g || 'house')
);
export const getTime = (state:any) => state.router.route.options.t || '';