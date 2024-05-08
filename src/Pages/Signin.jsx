import React from "react";
import { useState } from "react";
import {app} from "../firebase"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SigninUser = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((value) => console.log("signin success"))
    .catch((err)=> console.log(err))
  };

  return (
    <div>
      <div class="box-form">
        <div class="left">
          <div class="overlay">
            <h1>Hello World.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              et est sed felis aliquet sollicitudin
            </p>
            <span>
              <p>login with social media</p>
              <a href="#">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i class="fa fa-twitter" aria-hidden="true"></i> Login with
                Twitter
              </a>
            </span>
          </div>
        </div>

        <div class="right">
          <h5>Login</h5>
          <p>
            Don't have an account? <a href="#">Creat Your Account</a> it takes
            less than a minute
          </p>
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

          <div class="remember-me--forget-password">
            <label>
              <input type="checkbox" name="item" checked />
              <span class="text-checkbox">Remember me</span>
            </label>
            <p>forget password?</p>
          </div>

          <br />
          <button onClick={SigninUser}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
