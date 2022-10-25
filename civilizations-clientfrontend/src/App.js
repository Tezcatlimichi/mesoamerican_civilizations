import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

import Nav from './components/Nav'

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/countries')
      setCountries(response.data)
    }
    apiCall()
  }, [])

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <h1>Mesoamerican Civilizations</h1>
      {countries.map((country) => (
        <div>
          <h2>{country.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default App
