import { moduleName } from './slice';
import { RootState } from '../store';

export const getEvents = (state: RootState) => state[moduleName];

export const getEventsLoadingStatus = (state: RootState) => getEvents(state).pending;
