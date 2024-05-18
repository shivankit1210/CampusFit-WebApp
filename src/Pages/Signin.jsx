// import React from "react";
// import { useState } from "react";
// import { app } from "../firebase";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth(app);

// const Signin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const SigninUser = () => {
//     signInWithEmailAndPassword(auth, email, password)
//       .then((value) => console.log("signin success"))
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div>
//       <div class="box-form">
//         <div class="left">
//           <div class="overlay">
//             <h1>Sign In Here</h1>
//           </div>
//         </div>

//         <div class="right">
//           <h5>Sign In</h5>
//           <div class="inputs">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               onChange={(e) => setEmail(e.target.value)}
//               value={email}
//             />
//             <br />
//             <input
//               type="password"
//               placeholder="Enter your password"
//               onChange={(e) => setPassword(e.target.value)}
//               value={password}
//             />
//           </div>

//           <br />
//           <br />
//           <br />
//           <button onClick={SigninUser}>Login</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signin;


import React from "react";
import { useState } from "react";
import { app } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(app);

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Signed in successfully');
      // Redirect or perform further actions here
    } catch (err) {
      setError(err.message);
    }
  };

  const containerStyle = {
    maxWidth: '400px',
    margin: '0 auto',
    // margin: '2px',
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
      <h2 style={headingStyle}>Sign In</h2>
      <form onSubmit={handleSignIn}>
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
        {error && <p style={errorStyle}>{error}</p>}
        <button type="submit" style={buttonStyle} onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
