import React from 'react';

import { formatTimestampToTime } from 'utils';

import css from './styles.module.css';

interface Props {
  timestamp: number;
}

export const EventItem: React.FC<Props> = ({ timestamp }) => {
  return (
    <button className={css.eventItem}>{formatTimestampToTime(timestamp)}</button>
  )
}
