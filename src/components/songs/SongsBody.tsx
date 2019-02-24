import * as React from 'react';
import SongsBodyRendered  from 'components/songs/SongsBodyRendered';
import scrollState from 'utils/scrollUtils';

export interface IProps {
  playlist: string;
  songs: object[];
  height: number;
}

export default class SongBody extends React.Component<IProps>{

  public state = scrollState(this.props.height, this.props.songs.length, false);

  public componentWillMount(){
    window.addEventListener('scroll', this.onScroll, false);
  }
  public componentWillReceiveProps(nextProps:IProps){
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
    const {playlist, songs} = this.props;
    const {paddingTop, paddingBottom, start, end} = this.state;
    return (
      <div className="songs-body">
        <div className="songs-body_padder" style={{height:`${paddingTop}px`}} />
        <SongsBodyRendered
          songs={songs}
          playlist={playlist}
          start={start}
          end={end}
        />
        <div className="songs-body_padder" style={{height:`${paddingBottom}px`}} />
      </div>
    )
  }

}
