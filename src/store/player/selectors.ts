import { moduleName } from './slice';
import { RootState } from '../store';

export const getPlayerState = (state: RootState) => state[moduleName];

export const getPlayerCurrentTime = (state: RootState) => getPlayerState(state).currentTime;
