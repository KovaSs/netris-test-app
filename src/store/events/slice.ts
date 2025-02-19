import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { LoadStatuses } from "constants/LoadStatuses";
import { getVideoEvents } from "api";

import { Event, EventsState } from "./types";

export const moduleName = "events";

const initialState: EventsState = {
  loadStatus: LoadStatuses.UNKNOWN,
  list: [],
};

export const getEventsAsyncThunk = createAsyncThunk(`${moduleName}/getEventsList`, getVideoEvents);

const authSlice = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEventsAsyncThunk.pending, (state) => {
      state.loadStatus = LoadStatuses.LOADING;
    });
    builder.addCase(
      getEventsAsyncThunk.fulfilled,
      (state, action: PayloadAction<Event[]>) => {
        state.list = action.payload.sort((a, b) => a.timestamp - b.timestamp);
        state.loadStatus = LoadStatuses.LOADED;
      }
    );
    builder.addCase(
      getEventsAsyncThunk.rejected,
      (state) => {
        state.loadStatus = LoadStatuses.ERROR;
      }
    );
  },
});

export const eventsReducer = authSlice.reducer;
