
import {useNavigate} from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Civilizations = () => {

  const [civilizations, setCivilizations] = useState([])
  let {id} =useParams()

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/civilizations/')
      setCivilizations(response.data)
    }
    apiCall()
  }, [])
  
  let navigate = useNavigate()

  const showCivilization = (civilization) => {
    navigate(`${civilization.id}`)

  }
  

  return (
    <div className="civilization-grid">
      {
      civilizations.map((civilization) => (
        <div className="civilization-card" onClick={() => showCivilization(civilization)} key={civilization.id}>
          <h3>{civilization.name}</h3>
        </div>
      ))}
    </div>
  )
}

export default Civilizations
