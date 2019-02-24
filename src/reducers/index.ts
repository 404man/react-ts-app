import {combineReducers} from 'redux';
import playlists from 'reducers/playlists';
import entities from 'reducers/entities';
import environment from 'reducers/environment';

const rootReducer = combineReducers({
  playlists,
  entities,
  environment,
});

export default rootReducer;