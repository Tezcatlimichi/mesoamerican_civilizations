import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Countries from './components/Countries'
import Civilizations from './components/Civilizations'
import CountriesDetails from './components/CountriesDetails'
import CivilizationForm from './components/CivilizationForm'

function App(props) {
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
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="countries"
            element={<Countries countries={countries} />}
          />
          <Route
            path="countries/:id"
            element={<CountriesDetails countries={countries} />}
          />
          <Route path="countries/:id/:id" element={<Civilizations />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
