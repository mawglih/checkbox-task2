import {
  SLIDERS_SUCCESS,
} from '../actions';
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {
    case SLIDERS_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}
