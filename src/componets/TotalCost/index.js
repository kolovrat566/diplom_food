import React, { useEffect, useState } from 'react';
import styles from './TotalCost.module.scss';
import { prices, countDaysActiveArr } from '../../helper';

export const TotalCost = ({ callback, ration, days }) => {
  const [daysPrice, setDaysPrice] = useState();

  const indexFinder = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
      if (+arr[i].title === +value) return i
    }
  }

  useEffect(() => {
    switch (ration) {
      case 'S': {
        setDaysPrice(prices[indexFinder(countDaysActiveArr, days)] - 60);
        return
      }
      case 'M': {
        setDaysPrice(prices[indexFinder(countDaysActiveArr, days)]);
        return
      }
      case 'L': {
        setDaysPrice(prices[indexFinder(countDaysActiveArr, days)] + 60);
        return
      }
    
      default:
        break;
    }
    
  }, [ ration, days ]);

  return (
    <div className={styles.totalCostContainer}>
      <div className={styles.ration}>
        Рацион: {ration}
      </div>
      <div className={styles.count}>
        Итого к оплате: {days * daysPrice}/руб
      </div>
      <button onClick={() => callback(true)} className={styles.btn}>Заказать</button>
    </div>
  )
}
