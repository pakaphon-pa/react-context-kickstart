import react from 'react'
import DUMMY_MEALS from '../../utils/dummy'
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItem from './MealItem/Mealitem'

const AvailableMeals = () => {
   const mealsList = DUMMY_MEALS.map(meal => 
   (
      <MealItem
         id={meal.id}
         key={meal.id}
         name={meal.name}
         description={meal.description}
         price={meal.price}
      />
   ))

   return (
      <>
         <section className={classes.meals}>
            <Card>
               <ul>
                  {mealsList}
               </ul>
            </Card>
         </section>
      </>
   )
}

export default AvailableMeals
