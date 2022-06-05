import React, { useState } from 'react'
import styles from './Modal.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { CustomInput } from '../CustomInput';
import { useSelector } from 'react-redux';

export const Modal = ({isActive, setIsActive}) => {
  const [firstName,  setFirsName] = useState('')
  const [lastName,  setLastName] = useState('')
  const [patronymic,  setPatronymic] = useState('')
  const [phone,  setPhone] = useState('')
  const [address,  setAddress] = useState('')
  const storeValues = useSelector(state => state)

  const fieldsArr = [
    {
      id: 'firstName',
      label: 'Имя',
      value: firstName,
      setValue: setFirsName,
    },
    {
      id: 'lastName',
      label: 'Фамилия',
      value: lastName,
      setValue: setLastName,
    },
    {
      id: 'patronymic',
      label: 'Отчество',
      value: patronymic,
      setValue: setPatronymic,
    },
    {
      id: 'phone',
      label: 'Номер телефона',
      value: phone,
      setValue: setPhone,
    },
    {
      id: 'address',
      label: 'Адрес',
      value: address,
      setValue: setAddress,
    },
  ]

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      patronymic: '',
      phone: '',
      selectedRation: storeValues.selectedRation,
      selectedDaysActive: storeValues.selectedDaysActive,
      selectedCountDaysActive: storeValues.selectedCountDaysActive
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required('Обязательное поле'),
      lastName: Yup.string().required('Обязательное поле'),
      patronymic: Yup.string().required('Обязательное поле'),
      phone: Yup.string().required('Обязательное поле')
      .test('', 'Введите телефон полностью', value => value[value.length - 1] !== '_'),

    }),

    onSubmit: values => {
      console.log(JSON.stringify(values));
      const config = {headers: {"Content-Type": "application/json"}}
      axios.post('http://localhost:8080/addUser/', JSON.stringify(values));
    },
  });

  if (isActive)
  return (
    <form onClick={setIsActive} className={styles.root} onSubmit={formik.handleSubmit}>
      <div onClick={e => e.stopPropagation()} className={styles.modal}>
      <div className={styles.close} onClick={setIsActive}>x</div>
      <div className={styles.title}>Оформление заказа</div>
      <div className={styles.inputsContainer}>
        {fieldsArr.map((item, idx) =>  
          <CustomInput 
            id={item.id}
            labelTExt={item.label}
            formik={formik}
            type={item.type}
            isObligatory
          />
        )}
      </div>

        <button type='submit' className={styles.submitBtn}>Оформить заказ</button>
      </div>
    </form>
  )
  return (<></>)
}