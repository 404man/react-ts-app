import * as React from 'react';
import SongsBodyCard from 'components/songs/SongsBodyCard';

export interface IProps {
  songs: any;
  playlist: string;
}

const SongsBody: React.FC<IProps> = ({songs, playlist}):any => {
  const cellsPerRow = 5;
  const length = songs.length;
  const rows = [];

  for(let i = 0; i < 15; i += cellsPerRow){
    const row = [];
    for(let j = 0; j < cellsPerRow; j +=1){
      const index = i +j;
      const song = index < length ? songs[index] : null;

      row.push(
        <div className="row_cell" key={index}>
          {song ? (
            <SongsBodyCard
              // index={index}
              playlist={playlist}
              song={song}
            />
          ) : null}
        </div>
      )
    }
    rows.push(
      <div className="row" key={i}>
        {row}
      </div>
    )
  }
  return <div>{rows}</div>
}

export default SongsBody;