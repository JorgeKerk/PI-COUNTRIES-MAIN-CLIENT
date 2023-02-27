import styles from './ActivityDuration.module.css';

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setNewActivity } from "../../../redux/actions"
import { ErrorMsj } from "../../CommonComponents"

const ActivityDuration = ( { action } )=> {
  const { errorNewActivity } = useSelector( state => state )
  const { duration } = useSelector( state => state.newActivity )
  const dispatch = useDispatch()

  const [ durationValue, setDurationValue ] = useState( 0 )

  const handleChange = ( event ) => {
    const newDuration = { duration: parseInt(event.target.value), error: '' }

    if( newDuration.duration < 0 )
      newDuration.error = 'Duration must be greater than or equal to 0'
    
    setDurationValue( newDuration.duration )

    dispatch( 
      setNewActivity( 
        { 
          prop: 'duration', 
          value: newDuration.error ? 0 : newDuration.duration, 
          error: newDuration.error 
        }
      )
    )
  }

  useEffect( ()=> {
   setDurationValue( duration )
  },[duration])

  return(
    <div className= { styles.activityDuration }>
      <label htmlFor='duration'>Duration </label>
      <input 
        type= 'number' 
        id= 'duration' 
        name= 'duration' 
        value= { durationValue }
        onChange= { handleChange }
      />
      <span>{ !durationValue ? '' : Math.abs(durationValue) === 1 ? ' hour' : ' hours' }</span>
      { errorNewActivity.duration && <ErrorMsj error= { errorNewActivity.duration } isActivity= { true} /> }
    </div>
  )
}

export default ActivityDuration