import * as React from 'react';
import {Link} from 'react-router-dom';
import 'components/songs/SongsBodyCard.scss';

export interface IProps{
  song:any
  playlist: string;
}

export default function SongsBodyCard ({song}:IProps) {
  const {artworkUrl,title, user} = song;
  const {avatarUrl, username} = user;
  return (
    <div className="songs-body-card">
      <div className="songs-body-card_inner">
        <div className="songs-body-card_artwork"
          style={{backgroundImage:`url(${artworkUrl})`}}
        >
          ArtworkPlay
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