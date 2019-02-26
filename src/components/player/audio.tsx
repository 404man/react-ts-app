/**
 * 
 * audio high order component  （高价组件）
 * 作用承上启下作用， 分发各种 action， 并将audio dom（this）绑定到函数， 通过props传给 innerComponent
 * 通过innerComponent 控制 audio, audio 监听并分发action 
 */

import * as React from 'react';

export interface IAudio {
  audioUrl: string;
  onLoadedMetadata: (duration: number) => void;
  onLoadStart: () => void;
  onPause: () => void;
  onPlay:() => void;
  onTimeUpdate: (currentTime: number) => void;
  onVolumeChange: (muted:any, volume:any) => void;
  playNextSong: () => void;
}

export type IChangeCurrentTime = (currentTime:number)=> void;

const audio = (InnerComponent:any) => {

  class AudioComponent extends React.Component<IAudio>{
  
    public audioElement:HTMLAudioElement;

    public componentDidMount(){
      const {audioElement} = this;
      audioElement.play();
    }
    public componentDidUpdate(prevProps:IAudio){
      const { audioElement, props} = this;
      const { audioUrl } = props;
      if(prevProps.audioUrl !== audioUrl){
        audioElement.play();
      }
    }

    public onLoadStart = () => {
      const {onLoadStart} = this.props;
      onLoadStart();
    }
    public onLoadedMetadata = () => {
      const {audioElement, props} = this;
      const {onLoadedMetadata} = props;
      onLoadedMetadata(Math.floor(audioElement.duration));
    }

    public onEnded = () => {
      const {playNextSong} = this.props;
      playNextSong();
    }

    public onPlay = () => {
      const {onPlay} = this.props;
      onPlay();
    }

    public onPause = () => {
      const {onPause} = this.props;
      onPause();
    }
    public onVolumeChange = () => {
      const {audioElement, props} = this;
      const {muted, volume} = audioElement;
      const {onVolumeChange} = props;
      onVolumeChange(muted, volume);
    }
    public onTimeUpdate = () => {
      const {audioElement, props} = this;
      const {onTimeUpdate} = props;
      onTimeUpdate(Math.floor(audioElement.currentTime));
    }

    public changeCurrentTime:IChangeCurrentTime = (currentTime) =>{
      this.audioElement.currentTime = currentTime;
    }
    public changeVolume = (volume:number) => {
      const {audioElement} = this;
      audioElement.muted = false;
      audioElement.volume = volume;
    }

    public toggleMuted = () => {
      const {audioElement} = this;
      const {muted} = audioElement;
      audioElement.muted = !muted;
    }
    public togglePlay = () => {
      const { audioElement} = this;
      if(audioElement.paused){
        audioElement.play();
      }else{
        audioElement.pause();
      }
    }
    public render(){
      const {audioUrl} = this.props;
      return (
        <div>
          <audio
            id="audio"
            onLoadedMetadata={this.onLoadedMetadata}
            onLoadStart={this.onLoadStart}
            onVolumeChange={this.onVolumeChange}
            onPlay={this.onPlay}
            onPause={this.onPause}
            onEnded={this.onEnded}
            onTimeUpdate={this.onTimeUpdate}
            ref={(node:HTMLAudioElement) => {this.audioElement = node;}}
            src={audioUrl}
          />
          <InnerComponent
            {...this.state}
            {...this.props}
            changeCurrentTime={this.changeCurrentTime}
            changeVolume={this.changeVolume}
            togglePlay={this.togglePlay}
            toggleMuted={this.toggleMuted}
          />
        </div>
      )
    }
  }
  return AudioComponent;
}

export default audio;