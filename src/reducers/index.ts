import {combineReducers} from 'redux';
import playlists from 'reducers/playlists';
import entities from 'reducers/entities';

const rootReducer = combineReducers({
  playlists,
  entities,
});

export default rootReducer;