import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import {Provider} from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Route from './router/';
import configureStore from './store/';
import './styles/main.scss';

const render = (Component:any) => {
  ReactDOM.render(
      <Provider store={configureStore()}>
        <Component />
      </Provider>,
    document.getElementById('root') as HTMLElement
  );
}
render(Route);
registerServiceWorker();

// typescript need declare module with @types/webpack-env 

if (module.hot) {
  module.hot.accept('./router/index', () => {
    const NextApp = require('./router/index').default;
    render(NextApp);
  });
}