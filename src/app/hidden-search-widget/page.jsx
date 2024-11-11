'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './hidden-search-widget.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const HiddenSearchWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div className={styles.container}>
      <div className={styles.searchBox}>
        <input
          ref={inputRef}
          style={{ width: isOpen ? '200px' : 0, padding: isOpen ? '15px' : 0 }}
          type='text'
          className={styles.input}
          placeholder='Search...'
        />
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={styles.btnBox}
        >
          <FontAwesomeIcon
            icon={faSearch}
            style={{ width: '24px', height: '24px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default HiddenSearchWidget;
