import { render, screen } from "@testing-library/react";
import { Provider } from 'react-redux';

import { EventTypes } from "store/events";
import { store } from "store";

import { EventsList } from "./EventsList";

describe("EventsList", () => {
  const events = [
    { timestamp: 0 },
    { timestamp: 100 },
    { timestamp: 200 },
  ] as EventTypes.Event[];

  jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
    useDispatch: () => jest.fn(),
  }));

  it("При наличии ивентов рендерится список", () => {
    render(
      <Provider store={store}>
        <EventsList events={events} />
      </Provider>
    );

    const eventsContainer = screen.getByTestId('events-list-container');
    expect(eventsContainer).toBeInTheDocument();
  });

  it("При отсутствии ивентов отображается сообщение об их отсутствии", () => {
    render(
      <Provider store={store}>
        <EventsList events={[]} />
      </Provider>
    );

    const eventsContainer = screen.getByText('Событий нет');
    expect(eventsContainer).toBeInTheDocument();
  });
});
