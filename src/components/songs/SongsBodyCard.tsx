import * as React from 'react';
import {Link} from 'react-router-dom';
import 'components/songs/SongsBodyCard.scss';
import getImageUrl from 'utils/ImageUtils';
import IMAGE_SIZES from 'constants/ImageConstants';

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
          style={{backgroundImage:`url(${getImageUrl(artworkUrl, IMAGE_SIZES.LARGE)})`}}
        >
          {0.1+ 0.2 === 0.3 ? '' : 'ArtworkPlay'}
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