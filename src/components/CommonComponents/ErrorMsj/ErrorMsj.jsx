import styles from './ErrorMsj.module.css';

// 'isactivity' indicates that the error is of a data entered into the Activity
//  If it is false, the error is usually an order to the DB
const ErrorMsj = ( { error, isActivity = false } )=> {
  return(
    <div className= { !isActivity ? styles.mainCountries : styles.mainActivity } >
      <h1>{ error }</h1>
    </div>
  )
}

export default ErrorMsj