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

function App() {
  const [countries, setCountries] = useState([])
  const [formState, setForm] = useState({
    name: '',
    image: '',
    description: ''
  })
  const [moveCivilization, setMoveCivilization] = useState([])

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
                handleSubmit={handleSubmit}
                moveCivilization={moveCivilization}
              />
            }
          />
          <Route path="countries/:id/:id" element={<Civilizations />} />
          <Route
            path="new"
            element={
              <CivilizationForm
                formState={formState}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
