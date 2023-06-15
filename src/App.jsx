import React, { useEffect, useState } from 'react'
import Date from './components/Date'
import Results from './components/Results'
import btn from './assets/images/icon-arrow.svg'
import { calculateTimeDiff, isGoodDateFormat } from './utils'
export default function App() {
   const [isValidDate, setIsValidDate] = useState(false)
   const [userDate, setUserDate] = useState(() => ({
      day: '',
      month: '',
      year: '',
   }))
   const [result, setResult] = useState(() => ({
      year: '--',
      month: '--',
      day: '--',
   }))

   const getDate = (obj) => {
      return `${obj.year}-${
         obj.month.length === 1 ? '0' + obj.month : obj.month
      }-${obj.day.length === 1 ? '0' + obj.day : obj.day}`
   }

   useEffect(() => {
      const date = getDate(userDate)
      console.log(date)
      console.log(isGoodDateFormat(date))
      setIsValidDate(isGoodDateFormat(date))
   }, [userDate])

   const handleForm = (e) => {
      setUserDate((prevDate) => {
         return { ...prevDate, [e.target.name]: e.target.value }
      })
   }

   const getResult = (e) => {
      e.preventDefault()
      const date = getDate(userDate)
      console.log(date)
      if (isValidDate) {
         setResult(calculateTimeDiff(date))
      }
   }

   return (
      <main>
         <section className='form-section'>
            <form action=''>
               <div className='date-infos'>
                  <Date
                     type='day'
                     handleForm={handleForm}
                     setIsValidDate={setIsValidDate}
                     userDate={userDate}
                  />
                  <Date
                     type='month'
                     handleForm={handleForm}
                     setIsValidDate={setIsValidDate}
                     userDate={userDate}
                  />
                  <Date
                     type='year'
                     handleForm={handleForm}
                     setIsValidDate={setIsValidDate}
                     userDate={userDate}
                  />
               </div>
               <div className='submit-section'>
                  <div className='line'></div>
                  <button
                     type='submit'
                     disabled={!isValidDate}
                     onClick={getResult}
                  >
                     <img src={btn} alt='submit button' />
                  </button>
               </div>
            </form>
         </section>
         <Results result={result} />
      </main>
   )
}
