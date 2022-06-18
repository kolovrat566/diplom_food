import React from 'react';
import styles from './About.module.scss';
import img1 from '../../img/png/5f45da127137199.613b7e9ef17e3.png';
import img2 from '../../img/png/d38490127137199.613b7e9ef04af.png';
import img3 from '../../img/png/fa2e50127137199.613b7e9ef1bc2.png';

export const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.img}><img src={img1} width='800px'/></div>
      <div className={styles.img}><img src={img2} width='800px'/></div>
      <div className={styles.img}><img src={img3} width='800px'/></div>
    </div>
  )
}
