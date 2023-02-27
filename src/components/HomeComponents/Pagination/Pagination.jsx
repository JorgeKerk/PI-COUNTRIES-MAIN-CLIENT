import styles from './Pagination.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { setCurrentCountries, setCurrentPage } from '../../../redux/actions'

const Pagination = ()=> {
  const { countriesFilter, currentPageCountries, error } = useSelector( state => state )
  const [ pages, setPages ] = useState( [] )
  const counntriesPerPages = 10

  const dispatch = useDispatch()

  const handleClickPage = (event)=> {
    const numberPage = Number( event.target.outerText )
    const posInitCountryPage = ( numberPage -1 ) * counntriesPerPages
    const posEndCountryPage = posInitCountryPage + counntriesPerPages

    dispatch( setCurrentPage( numberPage ) )
    dispatch(setCurrentCountries( countriesFilter.slice( posInitCountryPage, posEndCountryPage ) ) )
  }

  useEffect(()=> {
    const nPages = Math.ceil( countriesFilter.length / counntriesPerPages )
    const arrayPages = []
    
    for( let i=1; i <= nPages; i++ ){
      arrayPages.push( i ) 
    }
    setPages( arrayPages )
    if(currentPageCountries===0){
      dispatch( setCurrentPage( 1 ) )
      dispatch( setCurrentCountries( countriesFilter.slice( 0, counntriesPerPages ) ) )
    }
  }, [countriesFilter, currentPageCountries, dispatch] )
  
  return(
    <div className= { styles.mainContainer } >
      { !error && pages && pages.map( page => 
        <span 
          className= { currentPageCountries === Number(page) ? styles.pagePageSelected : styles.pagePagination } 
          key= { page }
          name= { page }
          onClick={ handleClickPage }>
          {page}
        </span>)}
    </div>
  )
}

export default Pagination