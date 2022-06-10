import React from 'react'
import styles from './Heder.module.scss';

const arr = ['text0', 'text1', 'text2', 'text3', 'text4']

export const Header = () => {
  return (
    <div className={styles.header}>
      {arr.map((item, idx) => 
        <div key={idx} className={styles.headerElement}>{item}</div>
      )}
      
    </div>
  )
}
