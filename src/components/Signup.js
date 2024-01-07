import React, { useState } from 'react';
import './Signup.css';
import { useNavigate,Link } from "react-router-dom";


const Signup = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');

    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [occupation, setOccupation] = useState('');
  const [role, setRole] = useState('user');

  const handleLogin = (e) => {
    console.log(`Signing up as ${role} with the following details:`);
    console.log(`Username: ${username}`);
    if(username==''){
      setMessage('username cannot be null')
      return
    }
    if(password==''){
      setMessage('password cannot be null')
      return
    }
    if(email==''){
      setMessage('email cannot be null')
      return
    }
    if(address==''){
      setMessage('address cannot be null')
      return
    }
    if(occupation==''){
      setMessage('occupation cannot be null')
      return
    }
   
    navigate('Login')
   };

  return (
    <div className="login-container">
      <div className="form-container">
        <h2>Signup to Your Robo Lawyer Account</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label >
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
          <label>
            Occupation:
            <input
              type="text"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            />
          </label>
        
            <button type="submit">Signup</button>
          <p>
          Already have an account? <Link to="/Login">Login</Link>
        </p>
        </form>
        <p className="message">{message}</p>

      </div>
    </div>
  );
};

export default Signup;
