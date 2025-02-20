import React, { useEffect } from 'react';
import { useSelector } from "react-redux";

import { EventsActions, EventsSelectors } from 'store/events';
import { LoadStatuses } from 'constants/LoadStatuses';
import { EventsList } from 'components/EventsList';
import { useReduxActions } from 'store/utils';
import { Player } from 'components/Player';

import css from './styles.module.css';

const VIDEO_URL_SRC = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

export const MainPage: React.FC = () => {
  const getEvents = useReduxActions(EventsActions.getEvents);

  const { list: events, loadStatus } = useSelector(EventsSelectors.getEventsState);

  useEffect(() => {
    getEvents();
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);


  const renderContent = () => {
    if (loadStatus === LoadStatuses.LOADING) return <div>Загрузка...</div>;
    if (loadStatus === LoadStatuses.ERROR) return <div>Ошибка загрузки</div>;

    return (
      <div className={css.mediaContainer}>
        <Player src={VIDEO_URL_SRC} events={events} />
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
