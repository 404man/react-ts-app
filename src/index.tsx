import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import { AppContainer } from 'react-hot-loader';
import {Provider} from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Route from './router/';
import configureStore from './store/';
import './styles/main.scss';

const render = (Component:any) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={configureStore()}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root') as HTMLElement
  );
}
render(Route);
registerServiceWorker();
