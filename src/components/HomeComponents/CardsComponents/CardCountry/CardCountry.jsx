import styles from './CardCountry.module.css'
import { Link } from 'react-router-dom'

const CardCountry = ( { id, name, flag, continent, population } )=> {
  return(
    <Link to={ `/detail/${ id }` } className={ styles.link } >
      <div className= { styles.mainContainer } >
        <img src={ flag } alt={`Flag to ${ name }`} className= { styles.imgFlag } />
        <h2 className= { styles.nameCountry }>{ name }</h2>
        <div className= { styles.subContainer }> 
          <div>
            <p><strong>Continent:</strong></p>
            <p> { continent }</p>
          </div>   
          <div>
            <p><strong>population:</strong></p>
            <p> { population }</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CardCountry