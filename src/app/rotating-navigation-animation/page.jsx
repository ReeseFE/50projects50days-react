'use client';
import { useState } from 'react';
import styles from './rotating-navigation-animation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTimes,
  faHome,
  faUser,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

const article =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia in ratione dolores cupiditate, maxime aliquid impedit dolorem nam dolor omnis atque fuga labore modi veritatis porro laborum minus, illo, maiores recusandae cumque ipsa quos. Tenetur, consequuntur mollitia labore pariatur sunt quia harum aut. Eum maxime dolorem provident natus veritatis molestiae cumque quod voluptates ab non, tempore cupiditate? Voluptatem, molestias culpa. Corrupti, laudantium iure aliquam rerum sint nam quas dolor dignissimos in error placeat quae temporibus minus optio eum soluta cupiditate! Cupiditate saepe voluptates laudantium. Ducimus consequuntur perferendis consequatur nobis exercitationem molestias fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.';
const imgSrc =
  'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2100&amp;q=80';
const RotatingNavigationAnimation = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className={styles.background}>
      <div
        className={`${styles.container} ${nav ? styles.containerRotated : ''}`}
      >
        <div
          className={`${styles.circleContainer} ${
            nav ? styles.circleRotated : ''
          }`}
        >
          <div className={styles.circle}>
            <div className={styles.barsIcon}>
              <FontAwesomeIcon
                onClick={() => {
                  setNav(true);
                }}
                icon={faBars}
              />
            </div>
            <div className={styles.timesIcon}>
              <FontAwesomeIcon
                onClick={() => {
                  setNav(false);
                }}
                icon={faTimes}
              />
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <h1>Amazing Article</h1>
          <small>Florin Pop</small>
          <p>{article}</p>
          <h3>My Dog</h3>
          <img src={imgSrc} alt='doggy'></img>
          <p>{article}</p>
        </div>
      </div>
      <div className={styles.nav}>
        <div
          className={`${nav ? styles.navItemVisible : styles.navItemHidden}`}
        >
          <FontAwesomeIcon icon={faHome} /> HOME
        </div>
        <div
          className={`${nav ? styles.navItemVisible : styles.navItemHidden}`}
        >
          <FontAwesomeIcon icon={faUser} /> ABOUT
        </div>
        <div
          className={`${nav ? styles.navItemVisible : styles.navItemHidden}`}
        >
          <FontAwesomeIcon icon={faEnvelope} /> CONTACT
        </div>
      </div>
    </div>
  );
};

export default RotatingNavigationAnimation;
