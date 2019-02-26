import * as constants from 'constants/ActionTypes';

const initialState = {
  currentTime: 0,
  duration:0,
  isPlaying: false,
  volume: 1,
  muted: false,
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
    case constants.ON_LOAD_METADATA:
      return {
        ...state,
        duration: actions.duration,
      }
    case constants.ON_TIME_UPDATE:
      return {
        ...state,
        currentTime: actions.currentTime,
      }

    case constants.ON_VOLUME_CHANGE:
      return {
        ...state,
        muted: actions.muted,
        volume: actions.volume,
      }
    default: 
      return state;
  }
}

export default player;