import {applyMiddleware, createStore } from 'redux';

import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
export default function configureStore(initialState?:any){
  const store = createStoreWithMiddleware(rootReducer, initialState)

  // if(module.hot){
  //   module.hot.accept('../reduces', () => {
  //     store.replaceReducer(rootReducer);
  //   })
  // }
  return store;
};