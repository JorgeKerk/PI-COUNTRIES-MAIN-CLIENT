import styles from './SearchBar.module.css'
import SearchByName from '../SearchByName/SearchByName'
import FilterByContinent from '../FilterByContinent/FilterByContinent'
import FilterByActivity from '../FilterByActivity/FilterByActivity'
import OrderCardsCountries from '../OrderCardsCountries/OrderCardsCountries'

const SearchBar = ()=> {
  return(
    <div className= { styles.mainContainer } >
      <SearchByName />
      <hr className= { styles.hr }/>
      <FilterByContinent />
      <hr className= { styles.hr }/>
      <FilterByActivity />
      <hr className= { styles.hrFinal } />
      <OrderCardsCountries />
    </div>
  )
}

export default SearchBar