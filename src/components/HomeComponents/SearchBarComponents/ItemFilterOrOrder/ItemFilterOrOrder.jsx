// import styles from './ItemFilterOrOrder.module.css';

const ItemFilterOrOrder = ( { groupName, nameItem, typeItem, nameSearch } )=> {
  return(
    <div>
      { nameSearch.map( n => n.toLowerCase() ).includes( nameItem.toLowerCase() )
        ? <input type= { typeItem } id= { nameItem } name= { groupName } value= { nameItem } defaultChecked />
        : <input type= { typeItem } id= { nameItem } name= { groupName } value= { nameItem } />
      }
      <label htmlFor= { nameItem }> { nameItem } </label>
    </div>
  )
}

export default ItemFilterOrOrder