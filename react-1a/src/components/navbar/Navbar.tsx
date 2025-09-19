import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Hamburger from "../../assets/icons/hamburger.svg?react";
import './navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h2 className='text-black'>Mengal</h2>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
           <Hamburger className='hamburger' /> 
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar