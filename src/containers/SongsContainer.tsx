// import * as React from 'react';
import Songs from '../components/songs/Songs';
// import Songs, {ISongs} from '../components/songs/Songs';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router'
import {fetchSongsIfNeeded} from 'actions/PlaylistActions';
import getPlaylistData from 'selectors/SongsSelectors';


// const SongsContainer = (props:ISongs) => <Songs {...props}/>;

const mapStateToProps = (state:any) => {
  const {environment} = state;
  const {height} = environment;
  return {
    ...getPlaylistData(state),
    height
  }
}

export default connect(mapStateToProps, {
  fetchSongsIfNeeded,
})(Songs);

