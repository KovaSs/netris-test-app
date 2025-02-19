import React, { useEffect } from 'react';
import { useSelector } from "react-redux";

import { getEventsAsyncThunk, EventsSelectors } from 'store/events';
import { EventsList } from 'components/EventsList';
import { useReduxActions } from 'store/utils';
import { Player } from 'components/Player';

import css from './styles.module.css';

export const MainPage: React.FC = () => {
  const getEvents = useReduxActions(getEventsAsyncThunk);

  const { list: events, pending: isLoading } = useSelector(EventsSelectors.getEvents);

  useEffect(() => {
    getEvents();
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);


  const renderContent = () => {
    if (isLoading) return <div>Loading...</div>;

    return (
      <div className={css.mediaContainer}>
        <Player events={events} />
        <EventsList events={events} />
      </div>
    );
  }


  return (
    <div className={css.main}>
      {renderContent()}
    </div>
  )
}
