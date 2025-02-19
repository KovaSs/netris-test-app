import React, { useRef } from 'react';

import type { Event } from 'store/events';

import css from './styles.module.css';

const VIDEO_URL_SRC = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
const VIDEO_PLAYER_WIDTH = 1280;
const VIDEO_PLAYER_HEIGHT = 720;

interface Props {
  events: Event[];
};

export const Player: React.FC<Props> = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoClick = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div className={css.playerContainer}>
      <video
        onAuxClickCapture={handleVideoClick}
        height={VIDEO_PLAYER_HEIGHT}
        width={VIDEO_PLAYER_WIDTH}
        src={VIDEO_URL_SRC}
        controls={true}
        ref={videoRef}
      />
    </div>
  )
}
