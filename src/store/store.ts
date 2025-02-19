import { configureStore } from "@reduxjs/toolkit";

import {  moduleName as eventsModuleName, eventsReducer } from "./events";
import { moduleName as playerModuleName, playerReducer } from "./player";

export const store = configureStore({
  reducer: {
    [playerModuleName]: playerReducer,
    [eventsModuleName]: eventsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;