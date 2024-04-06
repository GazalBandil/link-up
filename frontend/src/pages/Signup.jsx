// SignUpPage.js

import React, { useState } from 'react';
import './Signup.css';
import {Link} from 'react-router-dom'

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    collegeName: '',
    contactNo: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    console.log(formData);
  };

  return (
    <div className="signup-container">
     <div className="inner-signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          name="collegeName"
          placeholder="College Name"
          value={formData.collegeName}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="contactNo"
          placeholder="Contact Number"
          value={formData.contactNo}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
         <p>Already have an account? <Link to="/login" style={{color:'darkblue'}}>Login</Link></p>
         <br></br>
        <button type="submit" className="signup-button">Sign Up</button>
       


      </form>
      </div>
    </div>
  );
};

export default SignUpPage;
