
import './App.css';
import CountryCapital from "./components/CountryCapital"

function App() {
  const countries = {
       "Canada":"Ottawa",
       "Netherlands":"Amsterdam",
       "Oman": "Muscat",
       "Pakistan": "Islamabad",
       "Palestine":"Jerusalem",
       "Russia":"Moscow",
       "Poland": "Warsaw",
       "Qatar": "Doha",
       "Scotland":"Edinburgh",
       "Spain": "Madrid",
       "Thailand": "Bangkok"
  }
  return (
    <div className="App">
     <CountryCapital data={countries}/>
    </div>
  )
}
export default App