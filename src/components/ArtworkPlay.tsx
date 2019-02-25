import * as React from 'react';
import 'components/ArtworkPlay.scss';
import { TPlaySong } from 'actions/PlayerActions';

export interface IArtworkPlay {
  index: number;
  playlist: string;
  isPlaying: boolean;
  isActive:boolean;
  playSong: TPlaySong;
}

class ArtworkPlay extends React.Component<IArtworkPlay> {
  
  public playSong = () => {
    const {index, playlist, playSong} = this.props;
    playSong(playlist, index);
  }
  public togglePlay = () => {
    const {isPlaying} = this.props;
    const audioElement = document.getElementById('audio') as HTMLAudioElement;

    if(isPlaying) {
      audioElement.pause();
    }else{
      audioElement.play();
    }
  }
  public render(){
    const {isActive, isPlaying} = this.props;
    return (
      <div 
        className={`artwork-play ${isActive ? 'artwork-play-active': ''}`}
        role="button"
        tabIndex={0}
        onClick={isActive ? this.togglePlay : this.playSong}
      >
        <i className={`artwork-play_icon icon-${isActive && isPlaying? 'radio-waves': 'ios-play'}`} />
      </div>
    )
  }

}

export default ArtworkPlay;
