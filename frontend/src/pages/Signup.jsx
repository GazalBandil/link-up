import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    collegeName: '',
    contactNo: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Check password strength
    checkPasswordStrength(value);
  };

  const checkPasswordStrength = (password) => {
    let strength = 0;

    // Password criteria
    const regexList = {
      upperCase: /[A-Z]/,
      lowerCase: /[a-z]/,
      specialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/,
      number: /[0-9]/
    };

    // Check each criteria
    for (let regex in regexList) {
      if (regexList[regex].test(password)) {
        strength++;
      }
    }

    // Set password strength
    if (strength === 4) {
      setPasswordStrength('Very Strong');
    } else if (strength === 3) {
      setPasswordStrength('Strong');
    } else if (strength === 2) {
      setPasswordStrength('Medium');
    } else if (strength === 1) {
      setPasswordStrength('Weak');
    } else {
      setPasswordStrength('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password criteria: at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).{8,}$/;

    // Username criteria: at least 6 characters, one uppercase letter, one digit, and one special character
    const usernameRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    const errors = {};

    // Password validation
    if (!formData.password.match(passwordRegex)) {
      errors.password = 'Password must be at least 8 characters long with an uppercase, lowercase, digit, and special char';
    
    }

    // Username validation
    if (!formData.username.match(usernameRegex)) {
      errors.username = 'Username must be at least 6 characters long with an uppercase, lowercase, digit, and special char';
    }

    // Other form field validations can be added here...

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Proceed with form submission if there are no errors
    try {
      const response = await fetch('http://localhost:3000/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to sign up');
      }

      const data = await response.json();
      console.log(data); 
    } 
    catch (error) {
      console.error('Error:', error);
    }
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
          {errors.username && <p className="error">{errors.username}</p>}
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
          {passwordStrength && <p>Password Strength: {passwordStrength}</p>}
          {errors.password && <p className="error">{errors.password}</p>}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <p style={{color:'white'}}>Already have an account? <Link to="/login" style={{ color: 'darkblue' }}>Login</Link></p>
          <br></br>

          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;