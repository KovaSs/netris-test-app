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
      data-testid={`event-item-${timestamp}`}
      onClick={() => onClick(timestamp)}
      className={css.eventItem}
    >
      {formatTimestampToTime(timestamp)}
    </button>
  )
}
