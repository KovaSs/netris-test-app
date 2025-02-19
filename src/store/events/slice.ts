import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getVideoEvents } from "api";

import { Event, EventsState } from "./types";

const sliceName = "events";

const initialState: EventsState = {
  pending: false,
  list: [],
};

export const getEventsAsyncThunk = createAsyncThunk(`${sliceName}/getEventsList`, getVideoEvents);

const authSlice = createSlice({
  name: sliceName,
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
