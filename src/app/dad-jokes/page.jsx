'use client';
import { useState } from 'react';
import styles from './dad-jokes.module.css';

const DadJokes = () => {
  const [joke, setJoke] = useState('// Joke goes here');

  async function generateJoke() {
    const config = { headers: { Accept: 'application/json' } };
    const res = await fetch('https://icanhazdadjoke.com', config);
    const data = await res.json();
    setJoke(data.joke);
  }

  return (
    <div className={styles.container}>
      <div className={styles.jokeBox}>
        <h3>Don&apos;t Laugh Challenge</h3>
        <div className={styles.joke}>{joke}</div>
        <button onClick={generateJoke} className={styles.btn}>
          Get Another Joke
        </button>
      </div>
    </div>
  );
};

export default DadJokes;
