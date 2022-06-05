import { Modal } from './componets/Modal';
import { useState } from 'react';
import './App.css';
import { Selecter } from './componets/Selecter';
import { rationArr, daysActiveArr, countDaysActiveArr } from './helper'


function App() {
  const [isOpenModal, setIsOpenModal] = useState(true);

  return (
    <div className="App">
      <Selecter elements={rationArr} text='Выбрать рацион' type='ration'/>
      <Selecter elements={daysActiveArr} text='Когда будешь есть' type='activeDays'/>
      <Selecter elements={countDaysActiveArr} text='Выбери сколько дней' type='countDays'/>
      <button onClick={() => setIsOpenModal(true)}>заказать</button>
      <Modal isActive={isOpenModal} setIsActive={() => setIsOpenModal(!isOpenModal)}/>
    </div>
  );
}

export default App;
