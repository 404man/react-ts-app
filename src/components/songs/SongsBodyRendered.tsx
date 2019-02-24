import * as React from 'react';
import SongsBodyCard from 'components/songs/SongsBodyCard';

export interface IProps {
  songs: any;
  playlist: string;
  start: number;
  end: number;
}

const SongsBody: React.FC<IProps> = ({songs, playlist, start, end}):any => {
  const cellsPerRow = 5;
  const length = songs.length;
  const rows = [];

  for(let i = start; i < end; i += cellsPerRow){
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
  return <>{rows}</>
}

export default SongsBody;