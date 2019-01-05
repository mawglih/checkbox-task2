import {
  all,
} from 'redux-saga/effects';
import slidersSaga from './sliders';

export default function* rootSaga() {
  yield all([
    ...slidersSaga,
  ]);
}
