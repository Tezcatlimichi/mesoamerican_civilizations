import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Civilizations = () => {
 const [civilization, setCivilization] = useState("")

  let {id} =useParams()

  useEffect(()=>{
    const apiCall = async () => {
      const response = await axios.get(`http://localhost:3001/civilizations/${id}`)
      setCivilization(response.data)
    }
    apiCall()
  },[])

  return (
    <div className="civilization-grid">
      <h2>{civilization.name}</h2>
      <h3>{civilization.description}</h3>
    </div>
  )
}

export default Civilizations
