// import * as React from 'react';
import Songs from '../components/songs/Songs';
// import Songs, {ISongs} from '../components/songs/Songs';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router'
import {fetchSongsIfNeeded, fetchSongsNext} from 'actions/PlaylistActions';
import getPlaylistData from 'selectors/SongsSelectors';
import {playSong} from 'actions/PlayerActions';
import { getPlayingSongId, getIsPlaying } from 'selectors/CommonSelectors';

// const SongsContainer = (props:ISongs) => <Songs {...props}/>;

const mapStateToProps = (state:any) => {
  const {environment} = state;
  const {height} = environment;
  return {
    ...getPlaylistData(state),
    height,
    playingSongId: getPlayingSongId(state),
    isPlaying: getIsPlaying(state),
  }
}

export default connect(mapStateToProps, {
  fetchSongsNext,
  fetchSongsIfNeeded,
  playSong

})(Songs);

