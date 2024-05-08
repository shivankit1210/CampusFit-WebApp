import React from "react";
import { useState } from "react";
import { app } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SigninUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => console.log("signin success"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div class="box-form">
        <div class="left">
          <div class="overlay">
            <h1>Sign In Here</h1>
          </div>
        </div>

        <div class="right">
          <h5>Sign In</h5>
          <div class="inputs">
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <br />
          <br />
          <br />
          <button onClick={SigninUser}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
