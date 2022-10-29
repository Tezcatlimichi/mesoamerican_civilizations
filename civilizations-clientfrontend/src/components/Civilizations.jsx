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

  // delete civilization

const deleteCivilization = async (event) =>{
  let deletedCivilization = await axios.delete(`http://localhost:3001/civilizations/${id}`)
  console.log(deleteCivilization)
}

// update civilization

const [civilizationForm, setCivilizationForm] = useState({ name: '', image: '', description: ""})

const updateCivilization = async (event)=>{
event.preventDefault()
let updatedCivilization = await axios.put(`http://localhost:3001/civilizations/${id}`, civilizationForm)
setCivilization([...civilization,updatedCivilization])
setCivilizationForm({ name: '', image: '', description: ""})
}

const handleChangeCivilization = (event) => {
  setCivilizationForm({ ...civilizationForm, [event.target.id]: event.target.value })
}

  return (
    <div className="civilization-grid">
      <h2>{civilization.name}</h2>
      <h3>{civilization.description}</h3>
      <div className="update">
      <h2>Update Civilization</h2>
      <form onSubmit={updateCivilization} >
      <label htmlFor="name">Name</label>
      <input id="name" value={civilizationForm.name} onChange={handleChangeCivilization} />
      <label htmlFor="image">Image</label>
      <input id="image" value={civilizationForm.image} onChange={handleChangeCivilization}/>
      <label htmlFor="image">Description</label>
      <input id="description" value={civilizationForm.description} onChange={handleChangeCivilization}/>
      <button type="submit">Submit</button>
      </form>
      </div>
      <div className="delete">
      <h2>Delete Civilization</h2>
      <form onSubmit={deleteCivilization} >
      <button type="submit">Delete</button>
      </form>
      </div>
    </div>
    
  )
}

export default Civilizations
