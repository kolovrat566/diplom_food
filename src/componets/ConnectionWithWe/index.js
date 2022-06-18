import React from 'react';
import styles from './ConnectionWithWe.module.scss';
import InstLogo from '../../img/svg/inst.svg';
import VkLogo from '../../img/svg/vk.svg';
import TelegramLogo from '../../img/svg/telegram.svg';

export const ConnectionWithWe = () => {
  return (
    <div className={styles.connect}>
      <div className={styles.title}>Свяжитесь с нами</div>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <div className={styles.imgContainer} onClick={() => window.location = 'https://www.instagram.com'}>
          <img src={InstLogo}/>
          <div className={styles.text}>Наш Instagram</div>
        </div>
        <div className={styles.imgContainer} onClick={() => window.location = 'https://web.telegram.org'}>
          <img src={TelegramLogo}/>
          <div className={styles.text}>Наш Telehram</div>
        </div>
        <div className={styles.imgContainer} onClick={() => window.location = 'https://vk.com'}>
          <img src={VkLogo}/>
          <div className={styles.text}>Наш Vk</div>
        </div>
      </div>
    </div>
  )
}
