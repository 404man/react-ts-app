import * as React from 'react';
import {connect} from 'react-redux';
import Player from 'components/player/Player';
import {playSong, onPause,onPlay, onLoadedMetadata, onLoadStart, onTimeUpdate, onVolumeChange, playNextSong} from 'actions/PlayerActions';
import { getAudioUrl,getSong } from 'selectors/PlayerSelectors';



const PlayerContainer = (props:any) => {
  const {song=null} = props;
  return song ? <Player {...props}/> : null
}

const mapStateToProps = (state:any) => {

  return {
    audioUrl: getAudioUrl(state),
    player: state.player,
    song: getSong(state),
  }
};

export default connect(mapStateToProps, {
  playSong,
  onPause,
  onPlay,
  onLoadedMetadata,
  onLoadStart,
  onTimeUpdate,
  onVolumeChange,
  playNextSong,
})(PlayerContainer);
