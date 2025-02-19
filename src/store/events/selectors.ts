import { LoadStatuses } from 'constants/LoadStatuses';

import { moduleName } from './slice';
import { RootState } from '../store';

export const getEventsState = (state: RootState) => state[moduleName];

export const getEventsLoadingStatus = (state: RootState) => getEventsState(state).loadStatus === LoadStatuses.LOADING;
export const getEventsRequestStatus = (state: RootState) => getEventsState(state).loadStatus;
export const getEventsList = (state: RootState) => getEventsState(state).list;
