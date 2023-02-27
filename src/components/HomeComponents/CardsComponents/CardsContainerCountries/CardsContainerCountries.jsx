import styles from './CardsContainerCountries.module.css'
import CardCountry from '../CardCountry/CardCountry'
import { useSelector } from 'react-redux'
import ErrorMsj from '../../../CommonComponents/ErrorMsj/ErrorMsj'

const CardsContainerCountries = ()=> {
  const { currentCountries, error } = useSelector( state => state )
  const existError = error || !currentCountries.length

  return(
    <div className= { styles.mainContainer } >
      <div className= { existError? styles.subContainerError : styles.subContainer } >
        { !existError
          ? currentCountries.map( ( { id, name, flag, continent, population } )=> (
            <CardCountry 
              key= { id} 
              id= { id }
              name= { name }
              flag= { flag }
              continent= { continent }
              population= { population }
            />
            ))
          : <ErrorMsj error= { error } />
        }
      </div>
    </div>
  )
}

export default CardsContainerCountries