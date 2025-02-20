import { call, put, takeEvery, type Effect, type ForkEffect } from 'redux-saga/effects';

import { getVideoEvents } from 'api';

import { EventsActions } from './slice';
import { Event } from './types';

export function* getEventsAsync(): Generator<Effect, void> {
  try {
    const events = yield call(getVideoEvents);
    yield put(EventsActions.getEventsLoaded(events as Event[]));
  } catch (error) {
    yield put(EventsActions.getEventsFailure());
  }
}

export function* watchEventsSagas(): Generator<ForkEffect, void> {
  yield takeEvery(EventsActions.getEvents, getEventsAsync);
}

const eventsSagas = watchEventsSagas;

export default eventsSagas;