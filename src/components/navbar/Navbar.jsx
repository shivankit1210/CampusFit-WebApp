import {app} from "../../firebase";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import React from "react";
import itg from "../../images/itg.jpg";
import "./navbar.css";
import Login from "../../Pages/Signin/Login";

const auth = getAuth(app);

function Navbar() {

//   const CreateUser = ()=>{
//  createUserWithEmailAndPassword(auth,
//   "shivankit1210@gmail.com",
//   "Slka1210"
//   ).then((value)=> console.log(value));
// };




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
        <a href="/Login">Login</a>
        {/* <button className="btn" onClick={CreateUser}>Login</button> */}
        <img src={itg} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
