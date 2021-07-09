import react, { Fragment } from 'react'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

import mealsImage from '../../assets/meals.jpg'

const Header = props => {
   return (
      <Fragment>
         <header className={classes.header}>
            <h1>React Cart with redux</h1>
            <HeaderCartButton/>
         </header>
         <div className={classes['main-image']}>
            <img src={mealsImage} />
         </div>
      </Fragment>
   )
}

export default Header