import styles from './CardDetailCountryActivities.module.css';

const CardDetailCountryActivities = ( { name, dificulty, duration, seasons } )=> {
  const setDificultyName = ( )=> {
    // eslint-disable-next-line default-case
    switch( dificulty ){
      case 1:
        return 'Easy'
      case 2:
        return 'Normal'
      case 3:
        return 'Medium'
      case 4:
        return 'Hard'
      case 5:
        return 'Extreme'
      default:
        return 'Undefined'
    }
  }

  return(
    <div className= { styles.mainContainer } >
      <h1>{ name }</h1>
      <div className= { styles.dataActivity }>
        <span><strong>Dificulty:</strong></span>
        <span>{ setDificultyName( ) }</span>
      </div>
      <div className= { styles.dataActivity }>
        <span><strong>Duration:</strong></span>
        <span>{ duration } { duration === 1? 'hour': 'hours' }</span>
      </div>
      <div className= { styles.dataActivity }>
        <span><strong>Seasons:</strong></span>
        <span>{ seasons.join( ' / ' ) }</span>
      </div>
    </div>
  )
}

export default CardDetailCountryActivities