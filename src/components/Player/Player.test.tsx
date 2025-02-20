import { fireEvent, screen, waitFor } from "@testing-library/react";

import eventsMock from 'api/events.mock.json';
import { renderWithReduxStore } from 'utils';

import { Player } from "./Player";

const firstEventTimestamp = 0;
const secondEventTimestamp = 123;

Object.defineProperty(window.HTMLMediaElement.prototype, "pause", {
  configurable: true,
  value: jest.fn(),
});

Object.defineProperty(window.HTMLMediaElement.prototype, "play", {
  configurable: true,
  get() {
    return () => {};
  },
});

describe("Player", () => {
  jest.mock('react-redux', () => ({
    useSelector: jest.fn(() => {
      return { currentTime: 2.123 };
    }),
    useDispatch: () => jest.fn(),
  }));

  const events = eventsMock;

  it("Компонент плеера отображается", async () => {
    renderWithReduxStore(<Player src="https://test.ru" events={events} />)

    await waitFor(() => {
      const videoPlayer = screen.getByTestId('player');
      expect(videoPlayer).toBeDefined();
    });
  });

  it('По клику видео воспроизводится/приостанавливается', async () => {
    renderWithReduxStore(<Player src="https://test.ru" events={events} />)

    const videoPlayer = screen.getByTestId('player') as HTMLVideoElement;
    videoPlayer.pause();

    fireEvent.click(videoPlayer);

    await waitFor(() => {
      expect(videoPlayer.paused).toBe(true);
    });

    fireEvent.click(videoPlayer);

    await waitFor(() => {
      expect(videoPlayer.paused).toBe(true);
    });
  });

  it('При совпадении currentTime player и ивента отображается прямоугольник на странице', async () => {
    renderWithReduxStore(<Player src="https://test.ru" events={events} />)

    const rectangle = screen.queryByTestId(`rectangle-event-${firstEventTimestamp}`) as HTMLVideoElement;

    await waitFor(() => {
      expect(rectangle).toBeInTheDocument();
    });
  });

  it('При не совпадении currentTime player и ивента не отображается прямоугольник на странице', async () => {
    renderWithReduxStore(<Player src="https://test.ru" events={events} />)

    const rectangle = screen.queryByTestId(`rectangle-event-${secondEventTimestamp}`) as HTMLVideoElement;

    await waitFor(() => {
      expect(rectangle).toBeNull();
    });
  });
});
