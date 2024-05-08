import React from "react";
import { app } from "../../firebase";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const createUser = () => {
  createUserWithEmailAndPassword(auth, email, password).then();
};

const Signup = () => {
  <div className="signup">
    <input
      type="email"
      placeholder="Enter email"
      onChange={(e) => setEmail(e.target.value)}
      value={email}
    />

    <input
      type="password"
      placeholder="Enter password"
      onChange={(e) => setPassword(e.target.value)}
      value={password}
    />

    <button onClick={createUser} >Create Account</button>

  </div>;
};

export default Signup;
