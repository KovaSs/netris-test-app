import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { EventsList } from 'components/EventsList';
import { getEventsAsyncThunk } from 'store/events';
import { AppDispatch, RootState } from 'store';
import { Player } from 'components/Player';

import css from './styles.module.css';

export const MainPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { events, pending: isLoading } = useSelector((state: RootState) => ({
    pending: state.events.pending,
    events: state.events.list,
  }));

  useEffect(() => {
    dispatch(getEventsAsyncThunk());
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={css.main}>
      <Player events={events} />
      <EventsList />
    </div>
  )
}
