import React, { useRef, useEffect, useCallback, useState } from 'react';
import { MdOutlinePlayCircle, MdOutlinePauseCircle } from "react-icons/md";
import { useSelector } from "react-redux";

import type { EventTypes } from 'store/events';
import { PlayerSelectors } from 'store/player';

import css from './styles.module.css';

const VIDEO_URL_SRC = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
const VIDEO_PLAYER_WIDTH = 1280;
const VIDEO_PLAYER_HEIGHT = 720;

interface Props {
  events: EventTypes.Event[];
};

export const Player: React.FC<Props> = ({ events }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const playerCurrentTime = useSelector(PlayerSelectors.getPlayerCurrentTime);

  const [displayedEvents, setDisplayedEvents] = useState<EventTypes.Event[]>([]);

  const onTimeUpdate = useCallback(() => {
    if (!videoRef.current) return;
  
    const currentTime = videoRef.current.currentTime;

    const displayedEvents = events.filter(
      (event) => {
        const eventEndedTime = event.timestamp + event.duration;
        return currentTime >= event.timestamp && currentTime <= eventEndedTime
      }
    );

    setDisplayedEvents(displayedEvents);
  }, [events]);

  useEffect(() => {
    if (!videoRef.current) return;
      videoRef.current.currentTime = playerCurrentTime;
      onTimeUpdate();
  }, [playerCurrentTime, onTimeUpdate]);

  const handleVideoClick = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const renderPlayerControls = () => {
    if (videoRef.current && videoRef.current.paused) return <MdOutlinePlayCircle className={css.playerControls} />;
    return <MdOutlinePauseCircle className={css.playerControls} />
  }

  return (
    <div className={css.playerContainer}>
      {renderPlayerControls()}
      <video
        height={VIDEO_PLAYER_HEIGHT}
        onTimeUpdate={onTimeUpdate}
        onClick={handleVideoClick}
        width={VIDEO_PLAYER_WIDTH}
        className={css.player}
        data-testid="player"
        src={VIDEO_URL_SRC}
        controls={false}
        ref={videoRef}
      />
      {displayedEvents.map((event) => (
        <div
          data-testid={`rectangle-event-${event.timestamp}`}
          className={css.eventRectangle}
          key={event.timestamp}
          style={{
            height: event.zone.height,
            width: event.zone.width,
            left: event.zone.left,
            top: event.zone.top,
          }}
        />
      ))}
    </div>
  )
}
