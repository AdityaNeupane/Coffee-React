import React from 'react'
import './Navbar.css';
import logo from '../assets/images/logo.jpeg';
const Navbar = () => {
  return (
     <>
     <nav className="navbar">
      <div className="navbar-logo">
        <img src= {logo} className="logo" alt="Logo" />
      </div>
      <div className="navbar-brand">
        <h1><u>My Cart</u></h1>
      </div>
      <button className="navbar-back-button"  >
        Go Back
      </button>
    </nav>
     </>
  )
}

export default Navbar
