import React from 'react';
import styles from './Heder.module.scss';
import { headerArr } from '../../helper';

export const Header = () => {
  return (
    <div className={styles.header}>
      {headerArr.map((item, idx) => 
        <div key={idx} className={styles.headerElement} onClick={() => window.scroll(0, item.scrollY) }>{item.text}</div>
      )}
    </div>
  )
}
