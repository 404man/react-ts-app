import * as actionTypes from 'constants/ActionTypes';
import { playlistAction } from 'actions/PlaylistActions';


const initialState = {
  isFetching: false,
  items: [],
  futureUrl: null,
  nextUrl: null,
};

const playlist = (state:any=initialState, action:playlistAction) => {
  switch(action.type){
    case actionTypes.FETCH_SONGS_REQUEST: 
      return {
        ...state,
        isFetching: true,
      }
    case actionTypes.FETCH_SONGS_SUCCESS:
      return {
        ...state,
        futureUrl: action.futureUrl,
        isFetching: false,
        items: [...state.items, ...action.items],
        nextUrl: action.nextUrl
      }
    default: return state;
  }
}

export default function playlists(state:any ={}, action:playlistAction){
  switch(action.type){
    case actionTypes.FETCH_SONGS_REQUEST:
    case actionTypes.FETCH_SONGS_SUCCESS:
      return {
        ...state,
        [action.playlist]: playlist(state[action.playlist], action),
      }
    default: return state;
  }
}