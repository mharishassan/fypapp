import React, { useState } from 'react';
import './Login.css';
import { useNavigate,Link } from "react-router-dom";
const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Logging in as ${role} with username: ${username} and password: ${password}`);
    if(username==''){
      setMessage('username cannot be null')
      return
    }
    if(password==''){
      setMessage('password cannot be null')
      return
    }
    if(role==='user'){
    navigate('/UserHomepage');
    }
    else{
      navigate('/AdminHomepage')
    }

  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h2>Login to Your Robo Lawyer Account</h2>
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
          </label>
          <label>
            Choose Role:
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </label>
          <button type="submit">Login</button>
          Do not have an account? <Link to="/">Signup</Link>

        </form>
        <p className="message">{message}</p>

      </div>
    </div>
  );
};

export default LoginForm;
