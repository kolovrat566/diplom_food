import React from 'react'
import styles from './ChildSelectComponent.module.scss';
import cs from 'classnames'

export const ChildSelectComponent = ({item, callback, active, price}) => {
  return (
    <div className={cs(styles.container, {[styles.active] : active})} onClick={() => callback(item.title)}>
      <div className={styles.title}>
        {item.title}
      </div>
      <span className={styles.text}>{item.countFood}</span>
      <span className={styles.text}>{item.callories}</span>
      {!!price &&
        <span className={styles.text}>{price}</span>
      }
    </div>
  )
}
