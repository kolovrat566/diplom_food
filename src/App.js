import { Modal } from './componets/Modal';
import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import axios from 'axios';
import cs from 'classnames'
import { Selecter } from './componets/Selecter';
import { rationArr, daysActiveArr, countDaysActiveArr } from './helper'
import { CallbackModal } from './componets/CallbackModal';
import { TotalCost } from './componets/TotalCost';
import { useSelector } from 'react-redux';
import { FoodContainer } from './componets/FoodContainer';
import { Header } from './componets/Header';
import { CalorieCalculator } from './componets/CalorieCalculator';
import{ ConnectionWithWe } from './componets/ConnectionWithWe';

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenCallbackModal, setIsOpenCallbackModal] = useState(false);
  const [food, setFood] = useState([]);
  const ration = useSelector(state => state.selectedRation)
  const days = useSelector(state => state.selectedCountDaysActive)

  useEffect(() => {
    getFood();
    setTimeout(() => {
      setIsOpenCallbackModal(true)
    }, 5000);
  }, []);

  const getFood = async () => {
    await axios.get('http://localhost:8080/getMenu/').then(response => {
      setFood(response.data);
  }).catch(e => {
      console.log(e);
  });
  }

  return (
    <div className={styles.app}>
      <Header/>
      <img className={styles.img}
      src='https://image.winudf.com/v2/image1/Y29tLndhbGxwYXBlcnMuaGQuYW5kLmJhY2tncm91bmRzLmZvb2Rfc2NyZWVuXzE2XzE1OTE1Njk4OTdfMDc2/screen-16.jpg?fakeurl=1&type=.webp'
      />
      <div className={cs(styles.titleText, styles.titleText_1)}>Готовим и доставляем еду на целый день</div>
      <CalorieCalculator/>
      <Selecter elements={rationArr} text='Выбрать рацион' type='ration'/>
      <Selecter elements={daysActiveArr} text='Когда будешь есть' type='activeDays'/>
      <FoodContainer food={food} ration={ration}/>
      <Selecter elements={countDaysActiveArr} text='Выбери сколько дней' type='countDays'/>
      <TotalCost callback={setIsOpenModal} ration={ration} days={days}/>
      <ConnectionWithWe/>
      <div className={cs(styles.titleText, styles.titleText_2)}>Быстро Вкусно Полезно</div>
      <img className={styles.img} src='http://storge.pic2.me/upload/978/5891e8e213950.jpg'/>
      <button className={styles.btn} onClick={() => setIsOpenCallbackModal(true)}>{'</>'}</button>
      <Modal isActive={isOpenModal} setIsActive={() => setIsOpenModal(!isOpenModal)}/>
      <CallbackModal isActive={isOpenCallbackModal} setIsActive={() => setIsOpenCallbackModal(!isOpenCallbackModal)}/>
    </div>
  );
}

export default App;
