import type { UnknownAction } from '@reduxjs/toolkit';
import { runSaga } from 'redux-saga';

import { requestSuccessful, requestFailure } from "utils/testUtils/apiRequests";
import { LoadStatuses } from "constants/LoadStatuses";
import eventsMock from "api/events.mock.json";

import { getEventsAsync } from './saga';
import { EventsActions } from './slice';
import { Event } from './types';

describe('Events saga', () => {
  it('Запрос списка ивентов', async () => {
    const dispatchedActions: UnknownAction[] = [];
    const fakeStore = {
      getState: () => ({ list: [], loadStatus: LoadStatuses.UNKNOWN }),
      dispatch: (action: UnknownAction) => dispatchedActions.push(action),
    };

    requestSuccessful<Event[]>(eventsMock);

    await runSaga(fakeStore, getEventsAsync).toPromise();
    expect(dispatchedActions).toContainEqual(EventsActions.getEventsLoaded(eventsMock));
  });

  it('Ошибка запроса списка ивентов', async () => {
    const dispatchedActions: UnknownAction[] = [];
    const fakeStore = {
      getState: () => ({ list: [], loadStatus: LoadStatuses.UNKNOWN }),
      dispatch: (action: UnknownAction) => dispatchedActions.push(action),
    };

    requestFailure();

    await runSaga(fakeStore, getEventsAsync).toPromise();
    expect(dispatchedActions).toContainEqual(EventsActions.getEventsFailure());
  });
});