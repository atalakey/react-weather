import { FETHC_WEATHER } from '../actions/index';

export default (state = [], action) => {
  console.log('Action received:', action);
  
  switch(action.type) {
    case FETHC_WEATHER:
      return [action.payload.data, ...state];
    default:
      return state;
  }
}
