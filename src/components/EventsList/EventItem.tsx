import React from 'react';

import { formatTimestampToTime } from 'utils';

import css from './styles.module.css';

interface Props {
  onClick(timestamp: number): void;
  timestamp: number;
}

export const EventItem: React.FC<Props> = ({ timestamp, onClick }) => {
  return (
    <button 
      onClick={() => onClick(timestamp)}
      className={css.eventItem}
    >
      {formatTimestampToTime(timestamp)}
    </button>
  )
}
