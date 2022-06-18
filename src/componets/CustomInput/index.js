import React from 'react';
import './customInput.scss';
import * as cs from 'classnames';
import InputMask from 'react-input-mask';

export const CustomInput = ({ id, formik, type, labelTExt, isObligatory, value, onChange }) => {
  const mask = id === 'birthday' ? '99-99-9999' : id === 'phone' ? '+7(999)-999-99-99' : '';
  const placeholder = id === 'birthday' ? '__-__-____' : id === 'phone' ? '+7(___)-___-__-__' : '';

  return (
    <div className='customInputContainer'>
      <div className='label'>
        {labelTExt}
        {
          isObligatory && formik?.values[id] === '' &&
          <div className='redStar'>*</div>
        } 
      </div>
        <InputMask 
          value={formik?.values[id] || value} 
          onChange={formik?.handleChange || onChange}
          onBlur={formik?.handleBlur}
          type={type}
          id={id}
          mask={mask}
          maskChar='_'
          placeholder={placeholder}
          onblur={type='text'}
          className={cs('customInput', {'errorInput' : formik?.touched[id] && formik?.errors[id]})}
          />
          {formik?.touched[id] && formik?.errors[id] ? (
           <div className='error'>{formik?.errors[id]}</div>
           ) : null}
    </div>
  )
}