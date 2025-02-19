import React, { useEffect } from 'react';

import { EventsList } from 'components/EventsList';
import { Player } from 'components/Player';
import { getVideoEvents } from 'api';

import css from './styles.module.css';

export const MainPage: React.FC = () => {
  const getEventsList = async () => {
    const events = await getVideoEvents();
    console.log('events', events);
  }

  useEffect(() => {
    getEventsList();
  }, [])

  return (
    <div className={css.main}>
      <Player />
      <EventsList />
    </div>
  )
}
