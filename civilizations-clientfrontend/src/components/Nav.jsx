import {Link} from "react-router-dom"


const Nav = () => {
  
  return (
    <nav className="navbar">
      <h4>Xóchitl</h4>
      <div>
        <Link to="/"> Home</Link >
        <Link to="countries">Countries</Link>
        <Link to="new">Create</Link>
      </div>
    </nav>
  )
}

export default Nav