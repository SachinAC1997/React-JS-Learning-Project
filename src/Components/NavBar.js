import { NavLink } from "react-router-dom"
import { useAuth } from "./auth"
// import { BiMenu } from "react-icons/bi" 
import { GiHamburgerMenu } from "react-icons/gi"
//import { FaTimes } from "react-icons/fa"
// import '../navbar.css'
import '../navGrid.css' 
import { useState, useEffect } from "react"

const NavBar = () => {
  let width, height
  width = window.innerWidth
  height = window.innerHeight
  useEffect( () => {
  //  onChange = () => { if(width > 774) {
  //     setIsMobile(false)
  //   }}
    console.log(width, height)
  }, [width, height])

  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      // backgroundColor: isActive ? '#adb2fb' : '', 
    }
  }
  const auth = useAuth()

  const [isMobile, setIsMobile] = useState(false)

  return (
    <nav className="nav-main">
      <div className="nav-heading">
        <h3>
          <span>S</span>achin <span>A</span> <span>C</span>
        </h3>
      </div>
      <div className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}>
        <ul>
          <li>
            <NavLink style={navLinkStyle} to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyle} to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyle} to='/products'>Products</NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyle} to='/orders'>Orders</NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyle} to='/tracker'>Task Tracker</NavLink>
          </li>     
          <li>
            <NavLink style={navLinkStyle} to='/profile'>Profile</NavLink>    
          </li>    
          <li>
            {!auth.user.name && <NavLink style={navLinkStyle} to='/SignInUp'>Login</NavLink>}
          </li>
        </ul>
      </div>
      <div className="nav-mobile">
        <button onClick={() => setIsMobile(!isMobile)} >
          <i><GiHamburgerMenu className="nav-menu" /></i>
      </button>
      </div>
    </nav>
  )
}

export default NavBar
