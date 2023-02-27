import styles from './FilterByActivity.module.css'
import { useDispatch, useSelector } from 'react-redux'
import ItemFilterOrOrder from '../ItemFilterOrOrder/ItemFilterOrOrder'
import { setFilterByActivity } from '../../../../redux/actions'

const FilterByActivity = ()=> {
  const { activities } = useSelector( state => state )
  const { activity } = useSelector( state => state.countriesFilterSettings )
  const dispatch = useDispatch()

  const handleChangeFilterActivity = ( event )=> {
    dispatch( setFilterByActivity( event.target.value ) )
  }

  return(
    <>
      <h2>Filter by Tourist Activity</h2>
      <div className= { styles.container } onChange= { handleChangeFilterActivity } >
        <ItemFilterOrOrder 
          key= 'All'
          groupName= 'filterByActivity'
          nameItem= 'All'
          typeItem= 'radio'
          nameSearch= { [ activity ] }
        />
        { activities && activities.map( ( { name } ) =>
          <ItemFilterOrOrder 
            key= { name }
            groupName= 'filterByActivity'
            nameItem= { name }
            typeItem= 'radio'
            nameSearch= { [ activity ] }
          />
        )}
      </div>
    </>
  )
}

export default FilterByActivity