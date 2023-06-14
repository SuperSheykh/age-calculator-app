import React, { useEffect, useState } from 'react'
import Date from './components/Date'
import btn from './assets/images/icon-arrow.svg'
export default function App() {
   const [isValidDate, setIsValidDate] = useState(true)
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

   useEffect(() => {
      console.log(userDate)
   }, [userDate])

   const handleForm = (e) => {
      setUserDate((prevDate) => {
         return { ...prevDate, [e.target.name]: e.target.value }
      })
   }

   const getResult = (e, d) => {
      e.preventDefault()
      const dateText = `${d.year}-${d.month}-${d.day}`
      const date = new Date(dateText)
      const currentDate = new Date()
      console.log(d)
      setResult({
         year: 38,
         month: 3,
         day: 26,
      })
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
                  <button type='submit' onClick={(e) => getResult(e, userDate)}>
                     <img src={btn} alt='submit button' />
                  </button>
               </div>
            </form>
         </section>
         <section className='result-section'>
            <div>
               <span style={{ color: 'hsl(259, 100%, 65%)' }}>
                  {result.year}
               </span>{' '}
               years{' '}
            </div>
            <div>
               <span style={{ color: 'hsl(259, 100%, 65%)' }}>
                  {result.month}
               </span>{' '}
               months
            </div>
            <div>
               <span style={{ color: 'hsl(259, 100%, 65%)' }}>
                  {result.day}
               </span>{' '}
               days
            </div>
         </section>
      </main>
   )
}
