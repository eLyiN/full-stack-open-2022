import { useState, useEffect } from 'react'
import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

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
