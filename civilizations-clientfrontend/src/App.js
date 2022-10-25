import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Countries from './components/Countries'

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
      <main>
        <h1>Mesoamerican Civilizations</h1>
        <Routes>
          <Route
            path="countries"
            element={<Countries countries={countries} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
