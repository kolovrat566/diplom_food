import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ChildSelectComponent } from '../childSelectComponent';
import { chooseRation, chooseDaysActive, chooseCountDaysActive } from '../../store';
import styles from './Selecter.module.scss';
import { prices } from '../../helper'

export const Selecter = ({elements, text, type}) => {
  const [ daysPrice, setDaysPrice] = useState([]);
  const ration = useSelector(state => state.selectedRation)
  const dispatch = useDispatch();

  useEffect(() => {
    switch (ration) {
      case 'S': {
        setDaysPrice(prices.map(item => item - 60));
        return
      }
      case 'M': {
        setDaysPrice(prices);
        return
      }
      case 'L': {
        setDaysPrice(prices.map(item => item + 60));
        return
      }
      default:
        break;
    }
  }, [ ration ])

  const selectedElement = useSelector((state) => 
    type==='ration' ? state.selectedRation :
    type==='activeDays' ? state.selectedDaysActive :
    state.selectedCountDaysActive
  );

  const handleChoose = (title) => {
    if (type === 'ration') dispatch(chooseRation(title))
    if (type === 'activeDays') dispatch(chooseDaysActive(title))
    if (type === 'countDays') dispatch(chooseCountDaysActive(title))
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>{text}</div>
      <div className={styles.elements}>
        {elements.map((item, index) => <ChildSelectComponent 
          item={item} 
          callback={handleChoose} 
          active={selectedElement === item.title}
          key={index}
          price={type==='countDays' ? daysPrice[index] : null}
          />)}
      </div>
    </div>
  )
}
