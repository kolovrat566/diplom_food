import React, { useEffect, useState } from 'react'
import styles from './FoodContainer.module.scss';

export const FoodContainer = ({ food, ration }) => {
  const [translate, setTranslate] = useState('translate(-0px)')
  const [arr, setArr] = useState([])

  useEffect(() => {
    setTranslate('translate(-0px)')
    switch (ration) {
      case 'S': setArr(food.slice(0, 3)); return
      case 'M': setArr(food.slice(0, 4)); return
      case 'L': setArr(food); return  
      default:
        break;
    }
  }, [ration, food])

  const leftScrol = () => {
    const scroll = +translate.split('-')[1].split('p')[0] - 265
    console.log(scroll);
    setTranslate(`translate(-${scroll}px)`)
  }

  const rightScrol = () => {
    const scroll = +translate.split('-')[1].split('p')[0] + 265
    console.log(scroll);
    if (+scroll <= 795) setTranslate(`translate(-${scroll}px)`)
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Примерное меню:</div>
      {ration !== 'S' &&
        <>
          <button onClick={leftScrol} className={styles.leftArrow}>{'<'}</button>
          <button onClick={rightScrol} className={styles.rigthArrow}>{'>'}</button>
        </>
      }

      <div className={styles.body}>
        {arr.map((item, index) => {
          return (
            <div key={index} className={styles.imgContainer} style={{transform: translate}}>
              <img src={item.img} height='247' width='247' className={styles.img}/>
              <div className={styles.text}>{item.name}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
