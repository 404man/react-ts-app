
import NavSearch from 'components/nav/NavSearch';
import * as React from  'react';
import {Link} from 'react-router-dom';

const Nav = () => (
  <div className="nav">
    <div className="nav_inner container">
      <div className="nav_section">
        <i className="nav_logo_icon icon-radio-waves" />
        <Link to={'songs'}>
          SoundRedux
        </Link>
      </div>
      <div className="nav_section">
        <NavSearch/>
      </div>
    </div>
  </div>
)