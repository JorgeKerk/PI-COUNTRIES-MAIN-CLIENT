import styles from './ActivitySeasons.module.css';

import { useDispatch, useSelector } from "react-redux"
import { setNewActivity } from "../../../redux/actions"
import { ErrorMsj } from "../../CommonComponents"
import { useState } from 'react';

const ActivitySeasons = ( { action } )=> {
  const { errorNewActivity } = useSelector( state => state )
  const { seasons } = useSelector( state => state.newActivity )
  const dispatch = useDispatch()
  const [ changed, setChanged ] = useState( false )

  const handleChange = ( event ) => {
    const seasonSelected = event.target.value
    let newSeasons = [ ...seasons ]

    if( !changed ) setChanged( true )

    event.target.checked
      ? newSeasons.push( event.target.value )
      : newSeasons = newSeasons.filter( season => season.toLowerCase() !== seasonSelected.toLowerCase() )
     
    const errorMsg = !newSeasons.length
      ? 'Must select at least one season' 
      : ''

    dispatch( setNewActivity( { prop: 'seasons', value: newSeasons, error: errorMsg } ) )
  }

  return(
    <div className= { styles.mainContiner } onChange= { handleChange } >
      { ( ( ( changed || seasons.length ) && action === 'Update' ) || action !== 'Update' ) && 
        <>
          <span>Seasons </span>
            <input 
              type= 'checkbox' 
              id= 'summer' 
              name= 'seasons' 
              value= 'summer'
              defaultChecked= { seasons.includes('Summer') && action === 'Update' } 
            />
            <label htmlFor='summer'> Summer</label>

            <input 
              type= 'checkbox' 
              id= 'autumn' 
              name= 'seasons' 
              value= 'autumn' 
              defaultChecked= { seasons.includes('Autumn') && action === 'Update' } 
            />
            <label htmlFor='autumn'> Autumn</label>

            <input 
              type= 'checkbox' 
              id= 'winter' 
              name= 'seasons' 
              value= 'winter' 
              defaultChecked= { seasons.includes('Winter') && action === 'Update' } 
            />
            <label htmlFor='winter'> Winter</label>

            <input 
              type= 'checkbox' 
              id= 'spring' 
              name= 'seasons' 
              value= 'spring' 
              defaultChecked= { seasons.includes('Spring') && action === 'Update' } 
            />
            <label htmlFor='spring'> Spring</label>
          <div className= { styles.error }>
            { errorNewActivity.seasons && <ErrorMsj error= { errorNewActivity.seasons } isActivity= { true } /> }
          </div>
        </>
      }
    </div>
  )
}

export default ActivitySeasons