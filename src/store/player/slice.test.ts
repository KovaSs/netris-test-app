import { playerReducer, PlayerActions } from './slice';
import type { PlayerState } from "./types";

describe('Player reducer', () => {
  const initialState: PlayerState = {
    currentTime: 0,
  };

  it('При инициализации редюсер должен иметь стартовую структуру', () => {
    expect(playerReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('Установка выбранного времени', () => {
    const actual = playerReducer(initialState, PlayerActions.setCurrentTime(1));
    expect(actual.currentTime).toEqual(1);
  });
});