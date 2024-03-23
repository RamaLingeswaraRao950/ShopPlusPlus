// RegisterPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/RegisterPage.css';

const RegisterPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('/api/register', { fullName, email, password });
      console.log(response.data);
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Full Name</h2>
        <input
          type="text"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <h2>Email</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <Link to='/'><button onClick={handleRegister}>Register</button></Link>
        
        
        <p>Already have an account? <Link to='/login'>Login</Link></p>
      </div>
    </div>
  );
};

export default RegisterPage;
