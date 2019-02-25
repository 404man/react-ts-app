import {combineReducers} from 'redux';
import playlists from 'reducers/playlists';
import entities from 'reducers/entities';
import player from 'reducers/player';
import environment from 'reducers/environment';

const rootReducer = combineReducers({
  playlists,
  entities,
  environment,
  player,
});

export default rootReducer;