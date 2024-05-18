// import React from "react";
// import { app } from "../firebase";
// import { useState } from "react";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth(app);

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const createUser = () => {
//     createUserWithEmailAndPassword(auth, email, password).then((value) =>
//       alert("Success")
//     );
//   };
//   return (
//     <div>
//       <br />
//       <h1>SIGNUP PAGE</h1>
      
//       <div className="signup" style={{ color: "red" }}>
//         <input
//           type="email"
//           placeholder="Enter email"
//           onChange={(e) => setEmail(e.target.value)}
//           value={email}
//         />

//         <input
//           type="password"
//           placeholder="Enter password"
//           onChange={(e) => setPassword(e.target.value)}
//           value={password}
//         />

//         <button onClick={createUser}>Create Account</button>
//       </div>
//     </div>
//   );
// };

// export default Signup;


import React from "react";
import { app } from "../firebase";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(app);


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Signed up successfully');
      // Redirect or perform further actions here
    } catch (err) {
      setError(err.message);
    }
  };

  const containerStyle = {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#0d1282',
  };

  const formGroupStyle = {
    marginBottom: '20px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold',
    color: '#0d1282',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  };

  const buttonStyle = {
    display: 'block',
    width: '100%',
    padding: '10px',
    backgroundColor: '#0d1282',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  const errorStyle = {
    color: 'red',
    fontSize: '14px',
    marginBottom: '20px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div style={formGroupStyle}>
          <label htmlFor="email" style={labelStyle}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="password" style={labelStyle}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="confirm-password" style={labelStyle}>Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        {error && <p style={errorStyle}>{error}</p>}
        <button type="submit" style={buttonStyle} onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
