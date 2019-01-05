import {
  takeEvery,
} from 'redux-saga/effects';
import {
  SLIDERS_START,
} from '../actions';
export function* slidersStartSaga() {
  yield console.log('saga started');
}
export function* slidersSaga() {
  yield takeEvery(SLIDERS_START, slidersStartSaga);
}

export default slidersSaga();
