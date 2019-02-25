import * as React from 'react';
import SongsBodyRendered  from 'components/songs/SongsBodyRendered';
import scrollState from 'utils/scrollUtils';
import { TPlaySong } from 'actions/PlayerActions';

export interface ISongsBody {
  playlist: string;
  songs: object[];
  height: number;
  isPlaying: boolean;
  playSong: TPlaySong;
  playingSongId: number;
}

export default class SongBody extends React.Component<ISongsBody>{

  public state = scrollState(this.props.height, this.props.songs.length, false);

  public componentWillMount(){
    window.addEventListener('scroll', this.onScroll, false);
  }
  public componentWillReceiveProps(nextProps:ISongsBody){
    const {height, songs} = this.props;
    if(height !== nextProps.height || songs.length !== nextProps.songs.length){
      this.setState(scrollState(nextProps.height, nextProps.songs.length, false));
    }
  }
  public componentWillUnmount(){
    window.removeEventListener('scroll', this.onScroll, false);
  }

  public onScroll = () => {
    const {height, songs} = this.props;
    this.setState(scrollState(height, songs.length));
  }
  public render(){
    const {playlist, songs, isPlaying, playSong, playingSongId} = this.props;
    const {paddingTop, paddingBottom, start, end} = this.state;
    return (
      <div className="songs-body">
        <div className="songs-body_padder" style={{height:`${paddingTop}px`}} />
        <SongsBodyRendered
          songs={songs}
          playlist={playlist}
          start={start}
          end={end}
          isPlaying={isPlaying}
          playSong={playSong}
          playingSongId={playingSongId}
        />
        <div className="songs-body_padder" style={{height:`${paddingBottom}px`}} />
      </div>
    )
  }

}
