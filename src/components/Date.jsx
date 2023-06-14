import React from 'react'
export default function Date({ type, handleForm, userDate }) {
   console.log(Number(''))

   const isGoodValue = (exp) => {
      if (exp === '') {
         return true
      }

      if (Number(exp)) {
         if (type === 'day') {
            return Number(exp) > 0 && Number(exp) <= 31 ? true : false
         } else if (type === 'month') {
            return Number(exp) > 0 && Number(exp) <= 12 ? true : false
         } else if (type === 'year') {
            return Number(exp) > 0 && Number(exp) <= 2023 ? true : false
         }
      } else return false
   }

   const value =
      type === 'day'
         ? userDate.day
         : type === 'month'
         ? userDate.month
         : userDate.year

   const labelStyle = isGoodValue(value) ? {} : { color: 'hsl(0, 100%, 67%)' }
   const parStyle = isGoodValue(value)
      ? { display: 'none' }
      : { display: 'block' }
   const inputStyle = {}
   const message = (type) => {
      return type === 'year' ? 'Must be in the past' : `Must be a valid ${type}`
   }
   const placeHolder = type === 'day' ? 'DD' : type === 'month' ? 'MM' : 'YYYY'
   return (
      <div className='col'>
         <label htmlFor={type} style={labelStyle}>
            {type}
         </label>
         <input
            type='text'
            name={type}
            id={type}
            onChange={handleForm}
            placeholder={placeHolder}
            value={value}
            style={inputStyle}
         />
         <p className='alert' style={parStyle}>
            {message(type)}
         </p>
      </div>
   )
}
