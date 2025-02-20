import { LoadStatuses } from "constants/LoadStatuses";

import { eventsReducer, EventsActions } from './slice';
import type { EventsState } from "./types";

describe('Events reducer', () => {
  const initialState: EventsState = {
    loadStatus: LoadStatuses.UNKNOWN,
    list: [],
  };

  const events = [
    {
      duration: 5000,
      timestamp: 0,
      zone: {
        height: 0,
        width: 0,
        left: 0,
        top: 0,
      },
    },
    {
      duration: 5000,
      timestamp: 1,
      zone: {
        height: 0,
        width: 0,
        left: 0,
        top: 0,
      },
    },
  ];

  it('При инициализации редюсер должен иметь стартовую структуру', () => {
    expect(eventsReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('Запрос списка ивентов', () => {
    const actual = eventsReducer(initialState, EventsActions.getEvents());
    expect(actual.loadStatus).toEqual(LoadStatuses.LOADING);
  });

  it('Сохранение списка ивентов после запроса', () => {
    const actual = eventsReducer(initialState, EventsActions.getEventsLoaded(events));
    expect(actual.list.length).toEqual(events.length);
    expect(actual.loadStatus).toEqual(LoadStatuses.LOADED);
  });

  it('Ошибка при запросе списка ивентов', () => {
    const actual = eventsReducer(initialState, EventsActions.getEventsFailure());
    expect(actual.loadStatus).toEqual(LoadStatuses.ERROR);
  });
});