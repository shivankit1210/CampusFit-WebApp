import React from "react";
import itg from "../../images/itg.jpg";
import { Link } from "react-router-dom";
import "./navbar.css";


function Navbar() {

  return (
    <div className="navbar">
      <div className="left">
        <h2>CampusFit</h2>
      </div>
      <div className="center">
        <ul>
          <li><a href="#membership">MEMBERSHIP</a></li>
          <li><a href="#enquire">ENQUIRE</a></li>
          <li>EQUIPMENTS</li>
          <li>EXERCISES</li>
        </ul>
      </div>
      <div className="right">
       <ul>
        <li>
          <Link to ='/signin'>Sign In</Link>
        </li>
        <li>
        <Link to ='/signup'>Sign Up</Link>
        </li>
       </ul>
        <img src={itg} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
