import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getVideoEvents } from "api";

import { Event, EventsState } from "./types";

export const moduleName = "events";

const initialState: EventsState = {
  pending: false,
  list: [],
};

export const getEventsAsyncThunk = createAsyncThunk(`${moduleName}/getEventsList`, getVideoEvents);

const authSlice = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEventsAsyncThunk.pending, (state) => {
      state.pending = true;
    });
    builder.addCase(
      getEventsAsyncThunk.fulfilled,
      (state, action: PayloadAction<Event[]>) => {
        state.list = action.payload;
        state.pending = false;
      }
    );
  },
});

export const eventsReducer = authSlice.reducer;
