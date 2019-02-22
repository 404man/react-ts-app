import {merge} from 'lodash';

const initialState = {
  playlists:{},
  songs: {},
  users:{},
}
export default function entities(state:any=initialState, action:any){
  if(action.entities){
    return merge({}, state, action.entities);
  }
  return state;
}