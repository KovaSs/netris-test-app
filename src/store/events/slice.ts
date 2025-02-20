import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { LoadStatuses } from "constants/LoadStatuses";

import { Event, EventsState } from "./types";

export const moduleName = "events";

const initialState: EventsState = {
  loadStatus: LoadStatuses.UNKNOWN,
  list: [],
};

const authSlice = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    getEvents: (state) => {
      state.loadStatus = LoadStatuses.LOADING;
    },
    getEventsLoaded: (state, action: PayloadAction<Event[]>) => {
      state.list = action.payload.sort((a, b) => a.timestamp - b.timestamp);
      state.loadStatus = LoadStatuses.LOADED;
    },
    getEventsFailure: (state) => {
      state.loadStatus = LoadStatuses.ERROR;
    },
  },
});

export const EventsActions = authSlice.actions;
export const eventsReducer = authSlice.reducer;
