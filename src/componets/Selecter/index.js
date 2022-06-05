import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ChildSelectComponent } from '../childSelectComponent';
import { chooseRation, chooseDaysActive, chooseCountDaysActive } from '../../store';
import styles from './Selecter.module.scss';

export const Selecter = ({elements, text, type}) => {
  const dispatch = useDispatch();
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
        {elements.map(item => <ChildSelectComponent 
          item={item} 
          callback={handleChoose} 
          active={selectedElement === item.title}
          />)}
      </div>
    </div>
  )
}
