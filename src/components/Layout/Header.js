import react, { Fragment } from 'react'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = props => {
   return (
      <Fragment>
         <header className={classes.header}>
            <h1>React Cart with redux</h1>
            <HeaderCartButton/>
         </header>
      </Fragment>
   )
}

export default Header