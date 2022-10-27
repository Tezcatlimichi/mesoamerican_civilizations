
import {useNavigate} from "react-router-dom"


const Countries = (props) => {
  
  let navigate = useNavigate()

  const showCountry = (country) => {
    navigate(`${country._id}`)
    

  }

  return (
    <div className="card-grid">
      {
      props.countries.map((country) => (
        <div className="card-card" onClick={() => showCountry(country)} key={country.id}>
          <img style={{ display: 'block' }} src={country.image} alt={country.name} />
          <h3>{country.name}</h3>
        </div>
      ))}
    </div>
  )
}

export default Countries