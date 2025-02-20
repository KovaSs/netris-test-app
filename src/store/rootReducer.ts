import {  moduleName as eventsModuleName, eventsReducer } from "./events";
import { moduleName as playerModuleName, playerReducer } from "./player";

export const rootReducer = {
  [playerModuleName]: playerReducer,
  [eventsModuleName]: eventsReducer,
};
