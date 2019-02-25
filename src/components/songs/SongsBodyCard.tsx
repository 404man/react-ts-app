import * as React from 'react';
import {Link} from 'react-router-dom';
import 'components/songs/SongsBodyCard.scss';
import getImageUrl from 'utils/ImageUtils';
import IMAGE_SIZES from 'constants/ImageConstants';
import ArtworkPlay from 'components/ArtworkPlay';
import { TPlaySong } from 'actions/PlayerActions';

export interface ISongsBodyCard{
  index:number;
  song:any;
  playlist: string;
  isPlaying: boolean;
  isActive: boolean;
  playSong: TPlaySong;
}

export default function SongsBodyCard ({
  song,
  index,
  playSong,
  isActive,
  isPlaying,
  playlist,
}:ISongsBodyCard) {
  const {artworkUrl,title, user} = song;
  const {avatarUrl, username} = user;
  return (
    <div className="songs-body-card">
      <div className="songs-body-card_inner">
        <div className="songs-body-card_artwork"
          style={{backgroundImage:`url(${getImageUrl(artworkUrl, IMAGE_SIZES.LARGE)})`}}
        >
          <ArtworkPlay
            index={index}
            isActive={isActive}
            isPlaying={isPlaying}
            playlist={playlist}
            playSong={playSong}
          />
        </div>
        <div className="songs-body-card_main">
          <div className="songs-body-card_avatar" 
            style={{backgroundImage: `url(${avatarUrl})`}}
          />
          <div className="songs-body-card_details">
            <Link to={'songs'} className="songs-body-card_title">
              {title}
            </Link>
            <Link 
              to={'songs'} 
              className="songs-body-card_username"
            >
            {username}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}