import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import type { PlayerState } from "./types";

export const moduleName = "player";

const initialState: PlayerState = {
  currentTime: 0,
};

const playerSlice = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    setCurrentTime: (
      state,
      action: PayloadAction<PlayerState["currentTime"]>
    ) => {
      state.currentTime = action.payload;
    },
  },
});

export const PlayerActions = playerSlice.actions;
export const playerReducer = playerSlice.reducer;
