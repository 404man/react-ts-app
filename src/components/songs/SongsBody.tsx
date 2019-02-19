import * as React from 'react';
import SongsBodyRendered  from 'components/songs/SongsBodyRendered';

export interface IProps {
  playlist: string;
  songs: object[],
}

export default class SongBody extends React.Component<IProps>{
  public render(){
    const {playlist, songs} = this.props;
    return (
      <div className="songs-body">
        <div className="songs-body_padder">
          <SongsBodyRendered
            songs={songs}
            playlist={playlist}
          />
        </div>
      </div>
    )
  }
}
