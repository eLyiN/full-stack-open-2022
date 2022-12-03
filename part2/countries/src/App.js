import { useState, useEffect } from 'react'
import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [capital, setCapital] = useState('');
  const [filter, setFilter] = useState('');
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  console.log('render', countries.length, 'countries')
  console.log('countries', countries)

  const handleFilter = (e) => {
    setFilter(e.target.value)
  }

  const api_key = process.env.REACT_APP_API_KEY

  const hook = () => {
    console.log('effect')
    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}`)
      .then(response => {
        console.log('promise fulfilled')
        setWeather(response.data)
      })
  }

  useEffect(hook, [capital])

  const Countries = ({ countries, filter }) => {
    const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()));

    if (filteredCountries.length > 10) {
      return (
        <div>
          <p>Too many matches, specify another filter</p>
        </div>
      )
    } else if (filteredCountries.length === 1) {
      return (
        <div>
          <Country country={filteredCountries[0]} />
        </div>
      )
    } else {
      return (
        <div>
          {filteredCountries.map(country =>
            <div key={country.cca3}>
              {country.name.common}<button onClick={() => setFilter(country.name.common)}>show</button>
            </div>
          )}
        </div>
      )
    }
  }


  const Country = ({ country }) => {


    console.log('capital es', capital)


    return (
      <div>
        <h2>{country.name.common}</h2>
        <p>
          capital {country.capital} <br />
          area {country.area} <br />
        </p>
        <b>languages: <br /></b>
        <ul>
          {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
        </ul>
        <img src={country.flags.png} alt="flag" />
        <Weather capital={capital} />
      </div>
    )
  }

  const Weather = ({ capital }) => {
    setCapital(capital)
    return (
      <div>
        <h2>Weather in {capital}</h2>
        <p>
          temperature {weather.main?.temp} Celcius<br />
          <img src={`http://openweathermap.org/img/w/${weather.weather?.[0].icon}.png`} alt="weather icon" /> <br />
          wind {weather.wind?.speed} m/s
        </p>
      </div>
    )
  }


  return (
    <div>
      <h2>Find countries</h2>
      <input value={filter} onChange={handleFilter} />
      <Countries countries={countries} filter={filter} />
    </div>

  )

}

export default App;
