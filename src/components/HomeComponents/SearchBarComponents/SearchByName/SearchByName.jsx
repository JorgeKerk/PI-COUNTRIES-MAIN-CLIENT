import { useDispatch } from 'react-redux';
import styles from './SearchByName.module.css';
import { getCountryByName } from '../../../../redux/actions';
import { useState } from 'react';

const SearchByName = ()=> {
  const dispatch = useDispatch()
  const [ countryName, setCountryName ] = useState( '' )
  const [ countrySearched, setCountrySearched ] = useState( '' )

  const handleChange = ( event )=> {
    if( countrySearched ) {
      handleClickSearched( false )
    }
    setCountryName( event.target.value )
  }

  const handleClickSearch = () => {
    setCountrySearched( countryName )
    dispatch( getCountryByName( countryName ) )
  }

  const handleClickSearched = ( clearCountryName )=> {
    if( clearCountryName ) setCountryName( '' )
    setCountrySearched( '' )
    dispatch( getCountryByName( '' ) )
  }

  return(
    <>
      <h2>Search Country</h2>
      <div className= { styles.searchContainer } >
        <input 
          type='text' 
          placeholder= 'Country name...' 
          value= { countryName } 
          onChange= { handleChange }
        />
        <button onClick= { handleClickSearch } >🔎</button>
      </div>
      <div className= { styles.searchedContainer } >
        <p>Word searched</p>
        { 
          countrySearched && 
          <button onClick= { ()=> handleClickSearched( true ) } >{ countrySearched }</button> 
        }
        <hr />
      </div>
    </>
  )
}

export default SearchByName