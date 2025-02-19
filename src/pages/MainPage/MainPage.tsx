import React from 'react';

import { EventsList } from 'components/EventsList';
import { Player } from 'components/Player';

import css from './styles.module.css';

export const MainPage: React.FC = () => {
  return (
    <div className={css.main}>
      <Player />
      <EventsList />
    </div>
  )
}
