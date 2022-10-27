import styles from './styles.module.css'

function CardCity({ item }) {

   const {country, city, population, color } = item

   return (
      <div className={styles.card} style={{backgroundColor: color}}>
         <h2>{city}</h2>
         <p>População: {population}</p>
         <footer>{country}</footer>
      </div>      
   )
}

export default CardCity

/*
Lucas Bernardo, 
Everton Silverio, 
Lucas Ferreira, 
João Victor, 
Vanessa Fernandes, 
Luiz Delgado
Issao */
