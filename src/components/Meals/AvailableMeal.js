import react from 'react'
import DUMMY_MEALS from '../../utils/dummy'
import classes from './AvailableMeals.module.css'

const AvailableMeals = () => {
   const mealsList = DUMMY_MEALS.map(meal => <li> {meal.name} </li>)

   return (
      <>
         <section className={classes.summary}>
            <h2>Test</h2>
         </section>
         <section className={classes.meals}>
            <ul>
               {mealsList}
            </ul>
         </section>
      </>
   )
}

export default AvailableMeals
