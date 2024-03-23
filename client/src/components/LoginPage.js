// LoginPage.js
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/login.css';
import { Link } from 'react-router-dom';
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', { username, password });
      console.log(response.data);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Username</h2>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <h2>Password</h2>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <Link to='/'><button onClick={handleLogin}>Login</button></Link>
        
        <p style={{fontWeight: 'bold'}}>Don't have an account? <Link to='/register'>Create One</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
