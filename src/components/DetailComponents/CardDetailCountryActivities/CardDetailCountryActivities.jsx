import styles from './CardDetailCountryActivities.module.css';

const CardDetailCountryActivities = ( { name, dificulty, duration, seasons } )=> {
  return(
    <div className= { styles.mainContainer } >
      <h1>{ name }</h1>
      <div className= { styles.dataActivity }>
        <span><strong>Dificulty:</strong></span>
        <span>{ dificulty }</span>
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