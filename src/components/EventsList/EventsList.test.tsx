import { screen } from "@testing-library/react";

import { renderWithReduxStore } from 'utils';
import { EventTypes } from "store/events";

import { EventsList } from "./EventsList";


describe("EventsList", () => {
  const events = [
    { timestamp: 0 },
    { timestamp: 1 },
    { timestamp: 2 },
    { timestamp: 3 },
  ] as EventTypes.Event[];

  jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
    useDispatch: () => jest.fn(),
  }));

  it("При наличии ивентов рендерится список", () => {
    renderWithReduxStore(<EventsList events={events} />)

    const eventsContainer = screen.getByTestId('events-list-container');
    expect(eventsContainer).toBeInTheDocument();

    const eventItems = screen.getAllByTestId(/^event-item-/);
    expect(eventItems.length).toBe(events.length);
  });

  it("При отсутствии ивентов отображается сообщение об их отсутствии", () => {
    renderWithReduxStore(<EventsList events={[]} />);

    const eventsContainer = screen.getByText('Событий нет');
    expect(eventsContainer).toBeInTheDocument();
  });
});
