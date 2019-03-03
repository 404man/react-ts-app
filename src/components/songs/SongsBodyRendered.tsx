import * as React from 'react';
import SongsBodyCard from 'components/songs/SongsBodyCard';
import { TPlaySong } from 'actions/PlayerActions';

export interface ISongsBodyRendered {
  songs: any;
  playlist: string;
  start: number;
  end: number;
  isPlaying: boolean;
  playSong: TPlaySong;
  playingSongId: number;
}

const SongsBodyRendered: React.FC<ISongsBodyRendered> = ({
  songs,
  playlist, 
  start, 
  end,
  playingSongId,
  playSong,
  isPlaying,
}):any => {
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
              index={index}
              isActive={playingSongId === song.id}
              playlist={playlist}
              song={song}
              playSong={playSong}
              isPlaying={isPlaying}
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

export default SongsBodyRendered;