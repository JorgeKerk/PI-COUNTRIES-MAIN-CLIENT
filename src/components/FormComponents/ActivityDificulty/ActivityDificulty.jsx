import styles from './ActivityDificulty.module.css';

import { useDispatch, useSelector } from "react-redux"
import { setNewActivity } from "../../../redux/actions"
import { ErrorMsj } from "../../CommonComponents"

const ActivityDificulty = ( { action } )=> {
  const { errorNewActivity } = useSelector( state => state )
  const { dificulty } = useSelector( state => state.newActivity )
  const dispatch = useDispatch()

  const handleChange = ( event ) => {
    const valueSelect = parseInt(event.target.value)
    dispatch( setNewActivity( { prop: 'dificulty', value: valueSelect, error: '' } ) )
  }
  return(
    <div className= { styles.mainContiner } onChange= { handleChange }>
      <span>Dificulty </span>
      { ( ( dificulty && action === 'Update' ) || action !== 'Update' ) && 
        <>
          <input 
            type= 'radio' 
            id= 'easy' 
            name= 'dificulty' 
            value= { 1 }
            defaultChecked= { dificulty === 1 && action ==='Update' }
          />
          <label htmlFor='easy'> Easy</label>

          <input 
            type= 'radio' 
            id= 'normal' 
            name= 'dificulty' 
            value= { 2 } 
            defaultChecked= { dificulty === 2 && action === 'Update' }
          />
          <label htmlFor='normal'> Normal</label>

          <input 
            type= 'radio' 
            id= 'medium' 
            name= 'dificulty' 
            value= { 3 } 
            defaultChecked= { dificulty === 3 && action === 'Update' }
          />
          <label htmlFor='medium'> Medium</label>

          <input 
            type= 'radio' 
            id= 'hard' 
            name= 'dificulty' 
            value= { 4 }
            defaultChecked= { dificulty === 4 && action === 'Update' }
          />
          <label htmlFor='hard'> Hard</label>

          <input 
            type= 'radio' 
            id= 'extreme' 
            name= 'dificulty' 
            value= { 5 }
            defaultChecked= { dificulty === 5 && action === 'Update' }
          />
          <label htmlFor='extreme'> Extreme</label>
          
          <div className= { styles.error }>
              { errorNewActivity.dificulty && <ErrorMsj error= { errorNewActivity.dificulty } isActivity= { true } /> }
          </div>
        </>
      }
    </div>
  )
}

export default ActivityDificulty