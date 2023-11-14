import React from 'react'
import '../../App.css'

import { FaBars, FaX } from 'react-icons/fa6'


import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4">
  <div className="container">
    <Link to="/" className="fs-3 ubuntu navbar-brand">
      Rick & Morty <span className="text-primary"> WiKi</span>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span className="navbar-toggler-icon"></span> */}
      <style jsx>
        {`
          button[aria-expanded="false"] > .close {
            display: none;
          }
          button[aria-expanded="true"] > .open {
            display: none;
          }
        `}
      </style>

      <FaBars className="open fw-bold text-dark"/>
      <FaX className="close fw-bold text-dark"/>

    </button>
    <div className="collapse navbar-collapse justify-content-end fs-5 gap-3" id="navbarNav">
      
          <NavLink activeClassName="active" to="/" className="nav-link" aria-current="page" href="#">Characters</NavLink>
        
          <NavLink to="/episodes" className="nav-link" href="#">Episodes</NavLink>
        
          <NavLink to="location" className="nav-link" href="#">Locations</NavLink>
        
    </div>
  </div>
</nav>
  )
}

export default NavBar