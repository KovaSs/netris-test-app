import React, { useEffect } from 'react';
import { useSelector } from "react-redux";

import { getEventsAsyncThunk, EventsSelectors } from 'store/events';
import { LoadStatuses } from 'constants/LoadStatuses';
import { EventsList } from 'components/EventsList';
import { useReduxActions } from 'store/utils';
import { Player } from 'components/Player';

import css from './styles.module.css';

export const MainPage: React.FC = () => {
  const getEvents = useReduxActions(getEventsAsyncThunk);

  const { list: events, loadStatus } = useSelector(EventsSelectors.getEvents);

  useEffect(() => {
    getEvents();
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);


  const renderContent = () => {
    if (loadStatus === LoadStatuses.LOADING) return <div>Загрузка...</div>;
    if (loadStatus === LoadStatuses.ERROR) return <div>Ошибка загрузки</div>;

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
