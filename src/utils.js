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

export const calculateTimeDiff = (startDate, option) => {
   const startObj = new Date(startDate)
   const todayObj = new Date()

   const diffInMs = todayObj.getTime() - startObj.getTime()
   const diffInMsInYears = diffInMs * (1000 * 60 * 60 * 24 * 365)
}
