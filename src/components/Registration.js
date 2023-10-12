// Registration.js

import React, { useState } from 'react';
import '../css/Resgistration.css';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // You can add registration logic here
    // For now, we'll just print the email and password to the console
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Registration;
