import * as React from 'react';
import {Link} from 'react-router-dom';

interface IState {
  expanded: boolean
}

export default class SongsHeaderGenres extends React.Component{

  public state :IState = {expanded: false};

  public onClick = () => {
    this.setState((state: IState) => ({
      expanded: !state.expanded,
    }))
  }
  public render(){
    const expanded = this.state;
    const genres = [{key: "CHILL"}, {key:"DEEP"}, {key:"HOUSE"}];

    return (
      <div className={`songs-header_genres ${expanded ? 'songs-header_genres-expanded' : ''}`}>
        <div 
          className="songs-header_genres_active"
          onClick={this.onClick}
          role="button"
          tabIndex={0}
          >
          {'genre'}
        </div>
        <div className="songs-header_genres_main">
          {genres.map(g => (
            <div className={`songs-header_genre ${g.key === 'DEEP'? 'songs-header_genre-active': ''}`}  key={g.key}>
              <Link to={g.key} className="songs-header_genre_text">
                {g.key}
              </Link>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

