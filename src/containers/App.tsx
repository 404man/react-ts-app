// import * as React from 'react';
import {connect} from 'react-redux';
import App  from 'components/app/App';
import {initEnvironment} from 'actions/EnvironmentActions';
// import logo from './logo.svg';


export default connect(null, {
  initEnvironment
})(App);
