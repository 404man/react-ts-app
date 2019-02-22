import * as React from 'react';
import SongsHeader from 'components/songs/SongsHeader';
import SongsBody from 'components/songs/SongsBody';


export interface ISongs {
  fetchSongsIfNeeded:(playlist:string, playlistUrl:string)=>void;
  isFetching: boolean;
  playlist: string;
  songs: object[];
  playlistUrl: string;
  playlistNextUrl:null;
}
class Songs extends React.Component<ISongs>{
  public componentWillMount(){
    const {fetchSongsIfNeeded, playlist, playlistUrl} = this.props;
    fetchSongsIfNeeded(playlist, playlistUrl);
  }  

  public render(){
    const {
      playlist,
      songs
    } = this.props;
    return (
      <div>
        <SongsHeader/>
        <div className="container">
          <SongsBody
            songs={songs}
            playlist={playlist}
          />
        </div>
      </div>
    )
  }
}

export default Songs;