export const isGoodValue = (exp) => {
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

export function isGoodDateFormat(date) {
   // Check if the value is a string
   if (typeof date !== 'string') {
      return false
   }

   // Create a regular expression to match date formats
   const regex = /^\d{4}-\d{2}-\d{2}$/

   // Check if the date string matches the regular expression
   if (!regex.test(date)) {
      return false
   }

   // Check if the date is in the past
   const today = new Date()
   const dateObj = new Date(date)
   return dateObj <= today
}

function getDecimalPart(number) {
   // Convert the number to a string.
   let strNumber = number.toString()

   // Get the index of the decimal point.
   let decimalIndex = strNumber.indexOf('.')

   // If there is no decimal point, return the number itself.
   if (decimalIndex === -1) {
      return number
   }

   // Get the decimal part of the number.
   let decimalPart = strNumber.substring(decimalIndex + 1)

   // Convert the decimal part to a number.
   return parseFloat('0.' + decimalPart)
}

export const calculateTimeDiff = (startDate) => {
   const startObj = new Date(startDate)
   const todayObj = new Date()

   const diffInMs = todayObj.getTime() - startObj.getTime()
   const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365)
   console.log(getDecimalPart(diffInYears))
   const diffInMonths = getDecimalPart(diffInYears) * 12
   const diffInDays = getDecimalPart(diffInMonths) * 30
   return {
      year: Math.floor(diffInYears),
      month: Math.floor(diffInMonths),
      day: Math.floor(diffInDays),
   }
}
