'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './scroll-animation.module.css';

const ScrollAnimation = () => {
  const [activeIndices, setActiveIndices] = useState(new Set());
  const boxRefs = useRef([]);
  let array = Array.from({ length: 18 }, (_, index) => index);

  useEffect(() => {
    const onScroll = () => {
      const newActiveIndices = new Set();
      boxRefs.current.forEach((box, index) => {
        if (box) {
          const { bottom } = box.getBoundingClientRect();
          const isInView = bottom < window.innerHeight;
          if (isInView) {
            newActiveIndices.add(index);
          }
        }
      });
      setActiveIndices(newActiveIndices);
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1>Scroll to see the animation</h1>
      {array.map((item, index) => {
        const isActive = activeIndices.has(index);
        const style = isActive ? { transform: 'translateX(0)' } : {};
        return (
          <div
            className={styles.box}
            key={item}
            ref={(el) => (boxRefs.current[index] = el)}
            style={style}
          >
            <h2>Content</h2>
          </div>
        );
      })}
    </div>
  );
};

export default ScrollAnimation;
