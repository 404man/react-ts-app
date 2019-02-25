import {connect} from 'react-redux';
import Player from 'components/player/Player';
import {playSong, onPause,onPlay, onLoadedMetadata, onLoadStart, onTimeUpdate, onVolumeChange, playNextSong} from 'actions/PlayerActions';
import { getAudioUrl } from 'selectors/PlayerSelectors';

const mapStateToProps = (state:any) => {

  return {
    audioUrl: getAudioUrl(state),
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
})(Player);
