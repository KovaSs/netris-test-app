import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { PlayerState } from "./types";

export const moduleName = "player";

const initialState: PlayerState = {
  currentTime: 0,
};

const videoSlice = createSlice({
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

export const PlayerActions = videoSlice.actions;
export const playerReducer = videoSlice.reducer;
