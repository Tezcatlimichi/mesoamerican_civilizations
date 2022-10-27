
import {useNavigate} from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'



const CountriesDetails =(props)=>{

  const [civilizations, setCivilizations] = useState()
  const [selectedCountry, setSelectedCountry] = useState("")
  const [matchCivilization,setMatchCivilization] = useState()
 let {id} = useParams()


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
  }
  if (selectedCountry && civilizations){
      let matchingCivilization = []
      civilizations.map((civilization)=>{
        civilization.countries.map((country)=>{
          console.log(country === id)
          if(country === id){
            console.log(civilization)
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


  return (
 
  )
}

export default CountriesDetails