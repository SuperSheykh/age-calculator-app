export default function Period({ result, time }) {
   const value =
      time === 'day'
         ? result.day
         : time === 'month'
         ? result.month
         : result.year

   return (
      <div>
         <span style={{ color: 'hsl(259, 100%, 65%)' }}>{value} </span>
         {value > 0 ? `${time}s` : time}
      </div>
   )
}
