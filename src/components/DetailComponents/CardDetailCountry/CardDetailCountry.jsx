import styles from './CardDetailCountry.module.css';

const CardDetailCountry = ( { id, name, flag, continent, capital, subregion, area, population} )=> {
  return(
    <div className= { styles.mainContainer } >
      <img className= { styles.imgFlag } src= { flag } alt= { name } />
      <h1>{ name }</h1>
      <div className= { styles.dataFlag }>
        <span><strong>ID:</strong></span>
        <span>{ id }</span>
      </div>
      <div className= { styles.dataFlag }>
        <span><strong>Continent:</strong></span>
        <span>{ continent }</span>
      </div>
      <div className= { styles.dataFlag }>
        <span><strong>Capital:</strong></span>
        <span>{ capital }</span>
      </div>
      { 
        subregion && 
        <div className= { styles.dataFlag }>
          <span><strong>Sub Region:</strong></span>
          <span>{ subregion }</span>
        </div>
      }
      { 
        area &&
        <div className= { styles.dataFlag }>
          <span><strong>Area:</strong></span> 
          <span>{ area }</span> 
        </div>
      }
      <div className= { styles.dataFlag }>
        <span><strong>Population:</strong></span>
        <span>{ population }</span>
      </div>
    </div>
  )
}

export default CardDetailCountry