import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Nav from './components/Nav'
import Countries from './components/Countries'
import Civilizations from './components/Civilizations'
import CountriesDetails from './components/CountriesDetails'
import Forms from './components/Forms'

function App() {
  const [countries, setCountries] = useState([])
  //civilization
  const [formState, setForm] = useState({
    name: '',
    image: '',
    description: '',
    country: ''
  })
  const [moveCivilization, setMoveCivilization] = useState([])
  //country
  const [countryForm, setCountryForm] = useState({ name: '', image: '' })

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/countries')
      setCountries(response.data)
    }
    apiCall()
  }, [])

  const handleChange = (event) => {
    setForm({ ...formState, [event.target.id]: event.target.value })
  }
  // create civilization
  const handleSubmit = async (event) => {
    event.preventDefault()
    let newCivilization = await axios
      .post('http://localhost:3001/civilizations/', formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
    setMoveCivilization([...moveCivilization, newCivilization.data])
    setForm({
      name: '',
      image: '',
      description: ''
    })
  }
  // create country
  const createCountry = async (event) => {
    event.preventDefault()
    let newCountry = await axios
      .post('http://localhost:3001/countries', countryForm)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
    setCountries([...countries, newCountry.data])
    setCountryForm({ name: '', image: '' })
  }

  const countryChange = (event) => {
    setCountryForm({ ...countryForm, [event.target.id]: event.target.value })
  }

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
            element={
              <CountriesDetails
                countries={countries}
                moveCivilization={moveCivilization}
              />
            }
          />
          <Route path="countries/:id/:id" element={<Civilizations />} />
          <Route
            path="new"
            element={
              <Forms
                formState={formState}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                createCountry={createCountry}
                countryChange={countryChange}
                countryForm={countryForm}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
