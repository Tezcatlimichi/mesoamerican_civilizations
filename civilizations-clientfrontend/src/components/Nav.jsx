import {Link} from "react-router-dom"


const Nav = () => {
  
  return (
    <nav className="navbar">
      <h4>Mesoamerican Civilizations</h4>
      <div>
        <Link to="/"> Home</Link >
        <Link>Add Civilization</Link>
      </div>
    </nav>
  )
}

export default Nav