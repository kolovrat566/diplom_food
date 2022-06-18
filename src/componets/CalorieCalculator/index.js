import React, { useEffect, useState } from 'react';
import { CustomInput } from '../CustomInput';
import { CustomSelect } from '../CustomSelect';
import styles from './CalorieCalculator.module.scss';
import { activesOptions, sexOptions } from '../../helper';

export const CalorieCalculator = () => {
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [sexValue, setSexValue] = useState('');
  const [actives, setActives] = useState(0);
  const [result, setResult] = useState('');

  useEffect(() => {
    if (age !== '' && height !== '' && weight !== '' && sexValue !== 'sex' && actives !== 0) {
      if (sexValue === 'men') setResult( Math.round((10 * weight + 6.25 * height - 5 * age + 5) * actives) )
      else setResult( Math.round((10* weight + 6.25 * height - 5 * age - 161) * actives) )
    } else setResult('')
  }, [age, height, weight, sexValue, actives]);

  return (
    <div className={styles.CalorieCalculator}>
      <div className={styles.title}>Калькулятор калорий</div>
      <div className={styles.inputsContainer}>
        <CustomInput value={age} onChange={(e) => setAge(e.target.value)} labelTExt={'Ваш возраст'} type='number'/>
        <CustomInput value={height} onChange={(e) => setHeight(e.target.value)} labelTExt={'Ваш рост'} type='number'/>
        <CustomInput value={weight} onChange={(e) => setWeight(e.target.value)} labelTExt={'Ваш вес'} type='number'/>
        <CustomSelect options={sexOptions} onChange={(e) => setSexValue(e.target.value)}/>
        <CustomSelect options={activesOptions} onChange={(e) => setActives(e.target.value)}/>
        <div className={styles.result}>{result !== '' ? result : 0} ккал</div>
      </div>
    </div>
  )
}
