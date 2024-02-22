import React from 'react'
import "./navbar.css"

function Navbar() {
  return (
    <div className="navbar">
        <div className="left">
            <h2>CampusFit</h2>

        </div>
        <div className="right">
        <ul>
            <li>Home</li>
            <li>Guide</li>
            <li>Memborship</li>
            <li>Tour</li>
            <li>Euipments</li>
        </ul>
        </div>
       
    </div>
  )
}

export default Navbar