import { LoadStatuses } from 'constants/LoadStatuses';

import { moduleName } from './slice';
import { RootState } from '../store';

export const getEvents = (state: RootState) => state[moduleName];

export const getEventsLoadingStatus = (state: RootState) => getEvents(state).loadStatus === LoadStatuses.LOADING;
export const getEventsLists = (state: RootState) => getEvents(state).list;
