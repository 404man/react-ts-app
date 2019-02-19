import {combineReducers} from 'redux';
import playlists from 'reducers/playlists';

const rootReducer = combineReducers({
  playlists
});

export default rootReducer;