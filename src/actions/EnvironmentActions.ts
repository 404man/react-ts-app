import * as constants from 'constants/ActionTypes';
import {debounce} from 'lodash'

export interface IinitEnvironment{
  type: constants.WINDOW_RESIZE;
  height: number;
  width: number;
}

// export type environmentAction = IinitEnvironment;

export const windowResize = (height:number, width:number):IinitEnvironment => ({
  type: constants.WINDOW_RESIZE,
  height,
  width,
})

export  const initEnvironment = () => (dispatch:any) => {
  dispatch(windowResize(window.innerHeight, window.innerWidth));
  const lazyLayout = debounce(() => {
    dispatch(windowResize(window.innerHeight, window.innerWidth));
  }, 300);
  window.onresize = lazyLayout;
}