
import {useNavigate} from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'



const CountriesDetails =(props)=>{

  const [civilizations, setCivilizations] = useState()
  const [selectedCountry, setSelectedCountry] = useState("")
  const [matchCivilization,setMatchCivilization] = useState()
   let {id} = useParams()

// reading countries and civilizations
  useEffect(()=>{
    if (!selectedCountry && !civilizations){
    const apiCall = async () =>{
      const response = await axios.get(`http://localhost:3001/countries/${id}`)
      setSelectedCountry(response.data)
    }
    apiCall()
    const getCivilization = async () => {
      let response = await axios.get('http://localhost:3001/civilizations/')
      setCivilizations(response.data)
    }
    getCivilization()
    const updateCivilizations = ()=>{
    setCivilizations(props.moveCivilization)  
    }
    updateCivilizations()
  }
  if (selectedCountry && civilizations){
      let matchingCivilization = []
      civilizations.map((civilization)=>{
        civilization.countries.map((country)=>{
          if(country === id){
            matchingCivilization.push(civilization) 
          }
        })
      })
      setMatchCivilization(matchingCivilization)
    }

  },[id,selectedCountry,civilizations])



  let navigate = useNavigate()

  const showCivilization = (civilization) => {
    navigate(`${civilization._id}`)

  }

  //country update
  const [countryForm, setCountryForm] = useState({ name: '', image: '' })
   // update civilization
  const updateCivilization = async (event) => {
  event.preventDefault()
  let updatedCivilization = await axios.put(
    `http://localhost:3001/countries/${id}`,
    countryForm
  )
  console.log(updatedCivilization)
  updateCivilization([...civilizations, updateCivilization])
  setCountryForm({
    name: '',
    image: ''
  })
}
const handleChangeCountry = (event) => {
  setCountryForm({ ...countryForm, [event.target.id]: event.target.value })
}

  return (
    <div className="card-grid">

      {matchCivilization ? 
      matchCivilization.map((civilization)=>(
        <div className="card-card" onClick={() => showCivilization(civilization)} key={civilization.id}>
        <img style={{ display: 'block' }} src={civilization.image} alt={civilization.name} />
        <h3>{civilization.name}</h3>
      </div>
      )) : "" }
      <div className="update-country">
      <h2>Update Country</h2>
      <form onSubmit={updateCivilization} >
      <label htmlFor="name">Name</label>
      <input id="name" value={countryForm.name} onChange={handleChangeCountry} />
      <label htmlFor="image">Image</label>
      <input id="image" value={countryForm.image} onChange={handleChangeCountry}/>
      <button type="submit">Submit</button>
      </form>
      </div>
      <div className="delete-country">
      <h2>Delete Country</h2>
      <form onSubmit={updateCivilization} >
      <label htmlFor="name">Name</label>
      <input id="name" value={countryForm.name} onChange={handleChangeCountry} />
      <label htmlFor="image">Image</label>
      <input id="image" value={countryForm.image} onChange={handleChangeCountry}/>
      <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  )
}

export default CountriesDetails