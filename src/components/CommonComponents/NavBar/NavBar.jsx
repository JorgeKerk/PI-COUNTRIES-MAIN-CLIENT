import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './NavBar.module.css'

const NavBar = ()=> {
  const { activity } = useSelector( state => state.countriesFilterSettings )
  const pathLocation = useLocation().pathname
  const location = !pathLocation.startsWith( '/detail/') 
                  && pathLocation !== '/createActivity'
                  && pathLocation !== '/updateActivity'
                  && pathLocation !== '/deleteActivity'
  return(
    <div className={ styles.mainContainer }>
      { pathLocation !== '/home' && <NavLink className= { styles.navLink } to= '/home' >HOME</NavLink> }
      { location && 
        <>
          <NavLink className= { styles.navLink } to= '/createActivity' >CREATE ACTIVITY</NavLink>
          { activity !== 'All' && <NavLink className= { styles.navLink } to= '/updateActivity' >UPDATE ACTIVITY</NavLink>}
          { activity !== 'All' && <NavLink className= { styles.navLink } to= '/deleteActivity' >DELETE ACTIVITY</NavLink>}
        </>
      }
    </div>
  )
}

export default NavBar