'use client';
import { useState } from 'react';
import styles from './progress-steps.module.css';

const ProgressSteps = () => {
  const [step, setStep] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.progressContainer}>
        <div
          className={styles.progress}
          style={{ width: `${(step * 100) / 3}%` }}
        ></div>
        {[1, 2, 3, 4].map((item, index) => (
          <div
            className={`${styles.circle} ${
              index <= step ? styles.circleActive : ''
            }`}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
      <div>
        <button
          onClick={() => {
            setStep(step - 1);
          }}
          disabled={step === 0}
          className={styles.btn}
        >
          Prev
        </button>
        <button
          onClick={() => {
            setStep(step + 1);
          }}
          disabled={step === 3}
          className={styles.btn}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProgressSteps;
