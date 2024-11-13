'use client'
import React, { useRef, useState } from 'react';
import styles from './sound-board.module.css';

const SoundBoard = () => {
  const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

  const audioRefs = useRef(sounds.map(() => React.createRef()));

  const [playingIndex, setPlayingIndex] = useState(null);

  const playSound = (index) => {
    if (playingIndex !== null) {
      const currentAudio = audioRefs.current[playingIndex].current;
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; 
      }
    }

    setPlayingIndex(index);

    const newAudio = audioRefs.current[index].current;
    if (newAudio) {
      newAudio.play();
    }
  };

  return (
    <div className={styles.container}>
      {sounds.map((item, index) => (
        <audio
          key={item}
          src={`/sounds/${item}.mp3`}
          ref={audioRefs.current[index]}
        ></audio>
      ))}
      <div className={styles.buttons}>
        {sounds.map((item, index) => (
          <button
            key={item}
            className={styles.btn}
            onClick={() => playSound(index)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SoundBoard;
