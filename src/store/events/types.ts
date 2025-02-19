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
  pending: boolean;
  list: Event[];
};