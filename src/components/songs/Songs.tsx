import * as React from 'react';
import SongsHeader from 'components/songs/SongsHeader';
import SongsBody from 'components/songs/SongsBody';
import { TPlaySong } from 'actions/PlayerActions';

export interface ISongs {
  fetchSongsIfNeeded:(playlist:string, playlistUrl:string)=>void;
  isFetching: boolean;
  playlist: string;
  songs: object[];
  playlistUrl: string;
  playlistNextUrl:null;
  height:number;
  isPlaying: boolean;
  playSong: TPlaySong;
  playingSongId: number;
}
class Songs extends React.Component<ISongs>{
  public componentWillMount(){
    const {fetchSongsIfNeeded, playlist, playlistUrl} = this.props;
    fetchSongsIfNeeded(playlist, playlistUrl);
  }  

  public render(){
    const {
      playlist,
      songs,
      height,
      isPlaying,
      playSong,
      playingSongId,
    } = this.props;
    return (
      <div>
        <SongsHeader/>
        <div className="container">
          <SongsBody
            songs={songs}
            playlist={playlist}
            height={height}
            isPlaying={isPlaying}
            playSong={playSong}
            playingSongId={playingSongId}
          />
        </div>
      </div>
    )
  }
}

export default Songs;