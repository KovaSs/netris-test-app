import { all, fork, type AllEffect, type ForkEffect } from 'redux-saga/effects';

import eventsSagas from './events/saga';

export function* rootSaga(): Generator<
  AllEffect<ForkEffect<void>>,
  void,
  unknown
> {
  yield all([fork(eventsSagas)]);
}