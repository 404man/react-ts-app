import {applyMiddleware, createStore } from 'redux';

import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';

// if need redux devTool
// const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initialState?:any){
  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('../reducers/index', () => {
        store.replaceReducer(rootReducer);
      });
    }
  }

  // if(module.hot){
  //   module.hot.accept('../reduces', () => {
  //     store.replaceReducer(rootReducer);
  //   })
  // }
  return store;
};
