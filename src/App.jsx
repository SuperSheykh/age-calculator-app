import React, { useEffect, useState } from 'react'
import Date from './components/Date'
import Results from './components/Results'
import btn from './assets/images/icon-arrow.svg'
import { calculateTimeDiff } from './utils'
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

   const checkIfDateValid = (aDate) => {
      return aDate instanceof Date && !isNaN(aDate)
   }

   // useEffect(() => {
   //    console.log(userDate)
   // }, [userDate])

   const handleForm = (e) => {
      setUserDate((prevDate) => {
         return { ...prevDate, [e.target.name]: e.target.value }
      })
   }

   const getResult = (e) => {
      e.preventDefault()
      const date = `${userDate.year}-${userDate.month}-${userDate.day}`
      console.log(date)
      setResult(calculateTimeDiff(date))
   }

   return (
      <main>
         <section className='form-section'>
            <form action=''>
               <div className='date-infos'>
                  <Date
                     type='day'
                     handleForm={handleForm}
                     isValidDate={isValidDate}
                     userDate={userDate}
                  />
                  <Date
                     type='month'
                     handleForm={handleForm}
                     isValidDate={isValidDate}
                     userDate={userDate}
                  />
                  <Date
                     type='year'
                     handleForm={handleForm}
                     isValidDate={isValidDate}
                     userDate={userDate}
                  />
               </div>
               <div className='submit-section'>
                  <div className='line'></div>
                  <button
                     type='submit'
                     disabled={isValidDate}
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
