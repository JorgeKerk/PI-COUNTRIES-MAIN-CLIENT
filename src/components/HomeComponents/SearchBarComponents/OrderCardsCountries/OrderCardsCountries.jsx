import styles from './OrderCardsCountries.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setOrder } from '../../../../redux/actions'
import ItemFilterOrOrder from '../ItemFilterOrOrder/ItemFilterOrOrder'

const OrderCardsCountries = ()=> {
  const { order } = useSelector( state => state.countriesFilterSettings )
  const dispatch = useDispatch()
  const currentOrder = [ ...order ]

  const handleTypeOrder = ( event )=>{
    currentOrder[0] = event.target.value.toLowerCase()
    dispatch( setOrder( currentOrder ) )
  }

  const handleOrder = ( event )=>{
    currentOrder[1] = event.target.value.toLowerCase()
    dispatch( setOrder( currentOrder ) )
  }

  const orderBy = [ 'Name', 'Population' ]
  const direction = [ 'Ascending', 'Descending' ]

  return(
    <>
      <h2>Order by</h2>
      <div className= { styles.container } >
        <div className= { styles.subContainer } onChange= { handleTypeOrder }>
          {
            orderBy.map( ( ordBy )=>(
              <ItemFilterOrOrder 
                key= { ordBy }
                groupName= 'orderBy'
                nameItem= { ordBy }
                typeItem= 'radio'
                nameSearch= { order }
              />
            ))
          }
        </div>
        <div className= { styles.subContainer } onChange= { handleOrder } >
            {
              direction.map( ( dir )=>(
                <ItemFilterOrOrder 
                  key= { dir }
                  groupName= 'direction'
                  nameItem= { dir }
                  typeItem= 'radio'
                  nameSearch= { order }
                />
              ))
            }
        </div>
      </div>
    </>
  )
}

export default OrderCardsCountries