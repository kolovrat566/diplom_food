import React, { useState } from 'react';
import styles from './Modal.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { CustomInput } from '../CustomInput';
import { useSelector } from 'react-redux';

export const Modal = ({ isActive, setIsActive }) => {
  const [status, setStatus] = useState('panding');
  const [firstName,  setFirsName] = useState('');
  const [lastName,  setLastName] = useState('');
  const [patronymic,  setPatronymic] = useState('');
  const [phone,  setPhone] = useState('');
  const [address,  setAddress] = useState('');
  const [contraindications,  setContraindications] = useState('');
  const selectedRation = useSelector(state => state.selectedRation);
  const selectedDaysActive = useSelector(state => state.selectedDaysActive);
  const selectedCountDaysActive = useSelector(state => state.selectedCountDaysActive);
  
  const fieldsArr = [
    {
      id: 'firstName',
      label: 'Имя',
      value: firstName,
      setValue: setFirsName,
      isObligatory: true,
    },
    {
      id: 'lastName',
      label: 'Фамилия',
      value: lastName,
      setValue: setLastName,
      isObligatory: true,
    },
    {
      id: 'patronymic',
      label: 'Отчество',
      value: patronymic,
      setValue: setPatronymic,
      isObligatory: false,
    },
    {
      id: 'phone',
      label: 'Номер телефона',
      value: phone,
      setValue: setPhone,
      isObligatory: true,

    },
    {
      id: 'address',
      label: 'Адрес',
      value: address,
      setValue: setAddress,
      isObligatory: false,

    },
    {
      id: 'contraindications',
      label: 'Противопоказания',
      value: contraindications,
      setValue: setContraindications,
      isObligatory: false,
    },
  ];

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      patronymic: '',
      phone: '',
      contraindications: ''
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required('Обязательное поле'),
      lastName: Yup.string().required('Обязательное поле'),
      phone: Yup.string().required('Обязательное поле'),
    }),

    onSubmit: values => {
      const newUser = {...values, 
        selectedRation: selectedRation,
        selectedDaysActive: selectedDaysActive,
        selectedCountDaysActive: selectedCountDaysActive,
      }
      console.log(newUser);
      axios.post('http://localhost:8080/addUser/', JSON.stringify(newUser)).then(response => {
        setStatus('sucsess')
    }).catch(e => {
        setStatus('error')
    });;
    },
  });

  if (isActive)
  return (
    <form onClick={() => {setIsActive(); setStatus('panding')}} className={styles.root} onSubmit={formik.handleSubmit}>
      <div onClick={e => e.stopPropagation()} className={styles.modal}>
      <div className={styles.close} onClick={() => {setIsActive(); setStatus('panding')}}>x</div>
      <div className={styles.title}>Оформление заказа</div>
      {status === 'panding' ?
      <div className={styles.inputsContainer}>
        {fieldsArr.map((item, idx) =>  
          <CustomInput 
            id={item.id}
            labelTExt={item.label}
            formik={formik}
            type={item.type}
            isObligatory={item.isObligatory}
            key={idx}
          />
        )}
      </div>: 
      <>
        {status === 'sucsess' ?
          <div className={styles.sucsess}>Заказ успешно зарегестрирован</div>:
          <div className={styles.error}>Упс.. что то пошло не так попробуйте позже</div>
        }
      </>
        }
        { status === 'panding' && <button type='submit' className={styles.submitBtn}>Оформить заказ</button>}
      </div>
    </form>
  )
  return (<></>)
}
