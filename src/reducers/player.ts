import * as constants from 'constants/ActionTypes';

const initialState = {
  currentTime: 0,
  duration:0,
  isPlaying: false,
  volume: 1,
  playlist:null,
  playingIndex: null
}

const player = (state:any=initialState, actions:any) => {
  switch (actions.type){
    case constants.ON_LOAD_START:
      return {
        ...state,
        duration: 0,
        currentTime:0,
      }
    case constants.ON_PLAY:
      return {
        ...state,
        isPlaying: true,
      }
    case constants.ON_PAUSE:
      return {
        ...state,
        isPlaying: false,
      }
    case constants.PLAY_SONG:
      return {
        ...state,
        playingIndex: actions.playingIndex,
        playlist: actions.playlist,
      }
    default: 
      return state;
  }
}

export default player;