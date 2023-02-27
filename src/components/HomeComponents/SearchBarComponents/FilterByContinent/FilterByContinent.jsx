import styles from './FilterByContinent.module.css'
import { useDispatch, useSelector } from 'react-redux'
import ItemFilterOrOrder from '../ItemFilterOrOrder/ItemFilterOrOrder'
import { setFilterByContinents } from '../../../../redux/actions'

const FilterByContinent = ()=> {
  const dispatch = useDispatch()
  const { continents } = useSelector( state => state.countriesFilterSettings )
  const itemsContinents = [ 'Africa', 'Antarctica', 'Asia', 'Europe', 'North America', 'Oceania', 'South America' ]

  const handleChangeFilterContinents = ( event )=> {
    const continentSelected = event.target.value
    let continentsFiltered = [ ...continents ]

    continentsFiltered.includes( continentSelected )
      ? continentsFiltered = continentsFiltered.filter( continent => continent !== continentSelected )
      : continentsFiltered.push( continentSelected )

    dispatch( setFilterByContinents( continentsFiltered ) )
  }

  return(
    <>
      <h2>Filter by Continent</h2>
      <div className= { styles.subContainer } onChange= { handleChangeFilterContinents } >
        {
          itemsContinents.map( ( continent )=>(
            <ItemFilterOrOrder 
              key= { continent }
              groupName= 'filterByContinent'
              nameItem= { continent }
              typeItem= 'checkbox'
              nameSearch= { continents }
            />
          ))
        }
      </div>
    </>
  )
}

export default FilterByContinent