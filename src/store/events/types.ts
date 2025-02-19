import { LoadStatuses } from "constants/LoadStatuses";

export interface Event {
  timestamp: number;
  duration: number;
  zone: {
    left: number;
    top: number;
    width: number;
    height: number;
  };
}

export interface EventsState {
  loadStatus: LoadStatuses;
  list: Event[];
};