import './App.css'
import CardCity from './components/CardCity'
import { cities } from './mock/cities'


function App() {
   // filtrando pais 
   const filterCities = (city) => city.country === 'BRA';
   
   return (
      <div className="App">
         <> 
         {
            cities.filter(filterCities).map((city)=> (
               <CardCity key={`list-car-${city.id}`} item={city}></CardCity>
            ))
         }

         </>
      </div>
   )
}

export default App
