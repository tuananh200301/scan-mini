import { fork, all } from 'redux-saga/effects';
import routeSaga from '../modules/routing/saga.js';
import appSaga from '../modules/app/saga.js';

export default function* sagas() {
  yield all([
    fork(routeSaga),
    fork(appSaga),
  ]);
}
