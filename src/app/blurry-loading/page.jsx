'use client';
import { useState, useEffect } from 'react';
import styles from './blurry-loading.module.css';

const BlurryLoading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    // 清除定时器
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div
        style={{ filter: `blur(${(100 - progress) * 0.3}px)` }}
        className={styles.blur}
      ></div>
      <div className={styles.loading}>{progress}%</div>
    </div>
  );
};

export default BlurryLoading;
