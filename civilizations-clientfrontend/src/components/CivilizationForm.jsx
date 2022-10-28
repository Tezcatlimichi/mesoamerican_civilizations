import { useState, useEffect } from 'react'
import axios from 'axios'




const CivilizationForm = (props) =>{

  const [countries, setCountries] = useState([])
  


  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get("http://localhost:3001/countries")
      setCountries(response.data)
    }
    apiCall()
  }, [])

 
  
  return(
    <div>
      <h1>Add a new civilization</h1>
      <form onSubmit={props.handleSubmit} >
      <label htmlFor="name">Name</label>
      <input id="name" value={props.formState.name} onChange={props.handleChange} />
      <label htmlFor="image">Image</label>
      <input id="image" value={props.formState.image} onChange={props.handleChange}/>
      <label htmlFor="description">Description</label>
      <input id="description"  value={props.formState.description} onChange={props.handleChange} />
      <select id="country-select">
        <option > Country</option>
        <option></option>
      </select>
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default CivilizationForm