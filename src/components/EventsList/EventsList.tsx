import React from 'react';

import { useReduxActions } from 'store/utils';
import { PlayerActions } from 'store/player';
import { EventTypes } from 'store/events';

import { EventItem } from './EventItem';

import css from './styles.module.css';

interface Props {
  events: EventTypes.Event[];
};

export const EventsList: React.FC<Props> = ({ events }) => {
  const setCurrentTime = useReduxActions(PlayerActions.setCurrentTime);

  const onEventClick = (timestamp: number) => {
    setCurrentTime(timestamp);
  };

  const renderEventsList = () => {
    if (!events.length) return <div>Событий нет</div>;

    return (
      <div className={css.eventsContainer} data-testid="events-list-container">
        {events.map((event) => (
          <EventItem
            timestamp={event.timestamp}
            onClick={onEventClick}
            key={event.timestamp} 
          />
        ))}
      </div>
    )
  }

  return (
    <section>
      <h2>Список событий:</h2>
      {renderEventsList()}
    </section>
  )
}
