import styles from './CountriesActivity.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setNewActivity } from '../../../redux/actions';
import { ErrorMsj } from '../../CommonComponents';

const CountriesActivity = ( { action } )=> {
  const { allCountries, errorNewActivity } = useSelector( state => state )
  const { countriesIds } = useSelector( state => state.newActivity )

  const dispatch = useDispatch()
  const [ selCountries, setSelCountries ] = useState( [] )

  useEffect( ()=>{
    const allCountriesSorted = allCountries.sort( ( countryA, countryB ) => countryA.name > countryB.name ? 1 : -1 )
 
    if( action === 'Update' ){
      const countriesSel = allCountriesSorted.map( country => ( { ...country, selected: countriesIds.includes( country.id ) } ) )
      setSelCountries( countriesSel )
    } else { setSelCountries( allCountriesSorted ) }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ action, allCountries, action === 'Update' ? countriesIds : null ] ) 

  const handleClickCountry = ( event )=> {
    const selCountriesChanged = selCountries.map( country => {
      return country.name === event.target.name
      ? { ...country, selected: !country.selected }
      : country
    } )

    const countriesActivity = selCountriesChanged.filter(country => country.selected ).map( country => country.id )
    let errorMsg = !countriesActivity.length ? 'Must select at least one season' : ''

    setSelCountries( selCountriesChanged )
    dispatch( setNewActivity( { prop: 'countriesIds', value: countriesActivity, error: errorMsg } ) )
  }

  const displayCountries = ( selected )=>(
    <div className= { selected && errorNewActivity.countriesIds? styles.countriesError : styles.countries }>
      {
        selCountries.map( country =>{
          return ( country.selected === selected )
            ? <div className= { styles.country } key= { country.name } >
                <div>
                  <img className= { styles.flag } src= { country.flag } alt= { country.name } />
                  <span className= { styles.name } > { country.name }</span>
                </div>
                <div>
                  <button  
                    type='button'
                    className= { selected ? styles.buttonSel : styles.buttonUnSel } 
                    onClick= { handleClickCountry } 
                    name= { country.name } >{ selected ? '▼' : '▲' }</button>
                </div>
              </div>
            : null
      })
      }
      { selected && errorNewActivity.countriesIds && <ErrorMsj error= { errorNewActivity.countriesIds } isActivity= { true } /> }
    </div>
  )

  return(
    <div className= { styles.mainContainer } >
      <div className= { styles.subContainer } >
        <h1>Countries with this activity</h1>
        { selCountries.length && displayCountries( true ) }
      </div>
      <div className= { styles.subContainer } >
        <h1>Available countries</h1>
        { selCountries.length && displayCountries( false ) }
      </div>
    </div>
  )
}

export default CountriesActivity