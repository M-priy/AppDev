import React, { useState } from 'react';
import { FaUser, FaLock, FaMobileAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './RegistrationPage.css';

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can implement your registration logic
    // For example, you can make an API call to register the user
    // and handle the success and error scenarios accordingly
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      console.log('Registration successful');
    }
  };

  return (
    <div className="registration-page">
      <div className="registration-form">
        <div className="icon-container">
          <FaUser className="registration-icon" />
        </div>
        <h2 className="registration-heading">Create an Account</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              <FaUser className="form-icon" />
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
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
          <div className="form-group">
            <label htmlFor="confirmPassword">
              <FaLock className="form-icon" />
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobileNumber">
              <FaMobileAlt className="form-icon" />
              Mobile Number:
            </label>
            <input
              type="tel"
              id="mobileNumber"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">
              <FaMapMarkerAlt className="form-icon" />
              Location:
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={handleLocationChange}
              required
              className="input-field"
            />
          </div>
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
          <button type="submit" className="registration-button">
            Register
          </button>
          <p className="login-link">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
