import React from 'react';

import { Event } from 'store/events';

import { EventItem } from './EventItem';

import css from './styles.module.css';

interface Props {
  events: Event[];
};

export const EventsList: React.FC<Props> = ({ events }) => {
  return (
    <section>
      <h2>Список событий:</h2>
      <div className={css.eventsContainer}>
        {events.map((event) => <EventItem key={event.timestamp} timestamp={event.timestamp} />)}
      </div>
    </section>
  )
}
