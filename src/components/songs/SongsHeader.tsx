import * as React from 'react';
import 'components/songs/SongsHeader.scss';
import SongsHeaderGenres from 'components/songs/SongsHeaderGenres';

const SongsHeader = () => {
  return (
    <div className="songs-header_inner">
      <div className="songs-header_sections container">
        <div className="songs-header_section songs-header_section-genres">
          <SongsHeaderGenres/>
        </div>
        <div className="songs-header_section songs-header_section-time">
          time
        </div>
      </div>
    </div>
  )
}

export default SongsHeader;