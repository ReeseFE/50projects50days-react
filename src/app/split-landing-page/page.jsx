import styles from './split-landing-page.module.css';

const ScrollAnimation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>Playstation 5</h1>
        <a href='#' className={styles.btn}>
          Buy Now
        </a>
      </div>
      <div className={styles.right}>
        <h1>XBox Series X</h1>
        <a href='#' className={styles.btn}>
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default ScrollAnimation;
