import React from 'react'
import styles from './ChildSelectComponent.module.scss';

export const ChildSelectComponent = ({item, callback, active}) => {
  return (
    <div className={styles.container} onClick={() => callback(item.title)}>
      <div className={styles.title}>
        {item.title}
        {active && 'iii'}
      </div>
      <span className={styles.text}>{item.countFood}</span>
      <span className={styles.text}>{item.callories}</span>
    </div>
  )
}
