import * as constants from 'constants/ActionTypes';
import { IinitEnvironment } from 'actions/EnvironmentActions';

const initialState = {
  height: 0,
  width: 0,
}

export default function environment (state:any = initialState, action:IinitEnvironment) {
  switch(action.type){
    case constants.WINDOW_RESIZE:
      return {
        ...state,
        height: action.height,
        width: action.height,
      }
    default: 
      return state;
  }
}