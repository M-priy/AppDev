import React, { useState } from 'react';
import { FaGift, FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can implement your login logic
    // For example, you can make an API call to authenticate the user
    // and handle the success and error scenarios accordingly
    if (email === 'example@example.com' && password === 'password') {
      // Login successful
      console.log('Login successful');
    } else {
      // Login failed
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <div className="icon-container">
          <FaGift className="gift-icon" />
        </div>
        <h2 className="login-heading">Welcome to the Gift Portal</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">
              <FaEnvelope className="form-icon" />
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <FaLock className="form-icon" />
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
              className="input-field"
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="register-link1">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
