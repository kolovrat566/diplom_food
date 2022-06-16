import React from 'react'
import styles from './About.module.scss';

export const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.img}>img1</div>
      <div className={styles.img}>img2</div>
      <div className={styles.img}>img3</div>
    </div>
  )
}
