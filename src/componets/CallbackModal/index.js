import React, { useState } from 'react';
import styles from './CallbackModal.module.scss';
import { useFormik } from 'formik';
import axios from 'axios';
import { CustomInput } from '../CustomInput';
import * as Yup from 'yup';

export const CallbackModal = ({ isActive, setIsActive }) => {
    const [status, setStatus] = useState('panding')

    const formik = useFormik({
        initialValues: {
          firstName: '',
          phone: '',
          time: ''
        },
    
        validationSchema: Yup.object({
          firstName: Yup.string().required('Обязательное поле'),
          time: Yup.string().required('Обязательное поле').test('', 'Не актуальное время', value => {
            const date = new Date();
            const hour = date.getHours();
            const minutes = date.getMinutes();
            if (+value.split(':')[0] > +hour) return true
            if (+value.split(':')[0] === +hour && +value.split(':')[1] > +minutes) return true
            return false
            }),
          phone: Yup.string().required('Обязательное поле'),
        //   .test('', 'Введите телефон полностью', value => value[value.length - 1] !== '_'),
        }),
    
        onSubmit: values => {
          axios.post('http://localhost:8080/addCallback/', JSON.stringify(values)).then(response => {
            setStatus('sucsess')
        }).catch(e => {
            setStatus('error')
        });
        }
      });
  if (isActive)
  return (
    <form onClick={setIsActive} className={styles.root} onSubmit={formik.handleSubmit}>
    <div onClick={e => e.stopPropagation()} className={styles.modal}>
    <div className={styles.close} onClick={setIsActive}>x</div>
    <div className={styles.title}>Заказать звонок</div>
    <div>
      {status === 'panding' ?
      <>
         <div className={styles.inputsContainer}>
         <CustomInput 
           id={'firstName'}
           labelTExt={'Введите имя'}
           formik={formik}
           type={'text'}
           isObligatory
         />
         <CustomInput 
           id={'time'}
           labelTExt={'Введите время'}
           formik={formik}
           type={'time'}
           isObligatory
         />
     </div>
     <CustomInput 
       id={'phone'}
       labelTExt={'Введите номер телефона'}
       formik={formik}
       type={'phone'}
       isObligatory
     />
     </> : 
    <>
      {status === 'sucsess' ?
        <div className={styles.sucsess}>Заказ успешно зарегестрирован</div>:
        <div className={styles.error}>Упс.. что то пошло не так попробуйте позже</div>
      }
    </>
      }
    </div>
      { status === 'panding' && <button type='submit' className={styles.submitBtn}>Оформить заказ</button>}
    </div>
  </form>
  )
  return(<></>)
}
