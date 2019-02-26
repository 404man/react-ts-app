import * as React from 'react';
import audio, {IChangeCurrentTime} from 'components/player/audio';
import { Link } from 'react-router-dom';
import 'components/player/Player.scss';
import Slider from './Slider';

export interface IPlayer{
  changeCurrentTime: IChangeCurrentTime;
  changeVolume: (volume:number) => void;
  togglePlay: () => void;
  toggleMuted: () => void;
  player: any;
  song: any;
}

const Player = ({
  changeCurrentTime,
  song,
  togglePlay,
  player,
  changeVolume,
}:IPlayer) => {
  const {currentTime, duration, muted, isPlaying} = player;
  const {artworkUrl, id, title, user} = song;
  const { username} = user;
  const volume = muted ? 0 : player.volume;
  return (
    <div className="player">
      <div className="player_inner container">
        <div className="player_section player_section-song">
          <div className="player_song">
            <div className="player_song_artwork" style={{backgroundImage: `url(${artworkUrl})`}} />
            <div className="player_song_main">
              <Link
                to={id+''}
                className="player_song_title"
              >
                {title}
              </Link>
              <Link 
                to={user.id+""}
                className="player_song_username"
              >
                {username}
              </Link>
            </div>
          </div>
        </div>
        <div className="player_section">
          <div className="player_buttons">
            <div className="player_button"
              role="button"
              tabIndex={0}
            >
              <i className="player_button_icon ion-ios-rewind"> &lt;&lt; </i>
            </div>
            <div 
              className="player_button"
              onClick={togglePlay}
              role="button"
              tabIndex={0}
            >
              <i className={`player_button_icon ion-ios-${isPlaying? 'pause': 'play'}`}>^</i>
            </div>
            <div
              className="player_button"
              role="button"
              tabIndex={0}
            >
              <i className="player_button_icon">&gt;&gt;</i>
            </div>
          </div>
        </div>
        <div className="player_section player_section-seek">
          <Slider
            max={duration}
            onChange={changeCurrentTime}
            value={currentTime}
          />
        </div>
        <div className="player_section player_section-time">
          <div className="player_time">
            {currentTime}
            <div className="player_time_separator"> / </div>
            {duration}
          </div>
        </div>
        <div className="player_section player_section-options">
          <div className="player_buttons player_buttons-options">
            11
          </div>
        </div>
        <div className="player_section player_section-volume">
          <Slider
            max={1}
            onChange={changeVolume}
            value={volume}
          />
        </div>
      </div>
    </div>
    );
}

export default audio(Player);