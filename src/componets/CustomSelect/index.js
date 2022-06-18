import React from 'react';
import styles from './CustomSelect.module.scss';

export const CustomSelect = ({ options, onChange }) => {
  return (
    <div className={styles.selectContainer}>
      <select onChange={(e) => onChange(e)} className={styles.select}>
        {options.map((item, idx) =>  
          <option value={item.value} key={idx}>{item.label}</option>
        )}
    </select>
  </div>
  )
}
