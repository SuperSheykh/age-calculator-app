import Period from './Period'

export default function Results({ result }) {
   return (
      <section className='result-section'>
         <Period result={result} time='year' />
         <Period result={result} time='month' />
         <Period result={result} time='day' />
      </section>
   )
}
