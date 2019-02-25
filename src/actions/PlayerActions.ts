import * as constants from 'constants/ActionTypes';

interface IPlaySong {
  type: constants.PLAY_SONG;
  playlist: string;
  playingIndex: number;
}
export type TPlaySong = (playlist: string, playingIndex:number) => IPlaySong;

export type playerActon = IPlaySong;

export const playSong:TPlaySong = (playlist, playingIndex) => ({
  type: constants.PLAY_SONG,
  playlist,
  playingIndex,
});

export const onPause = () => ({
  type: constants.ON_PAUSE,
});

export const onPlay = () => ({
  type: constants.ON_PLAY,
})

export const onVolumeChange = (muted:any, volume:any) => ({
  type: constants.ON_VOLUME_CHANGE,
  muted,
  volume,
});

export const playNextSong = () => ({
  type: constants.PLAY_NEXT_SONG,
})

export const onTimeUpdate = (currentTime:number) => ({
  type: constants.ON_TIME_UPDATE,
  currentTime,
})

export const onLoadStart  = () => ({
  type: constants.ON_LOAD_START,
});

export const onLoadedMetadata = (duration:number) => ({
  type: constants.ON_LOAD_METADATA,
  duration,
})