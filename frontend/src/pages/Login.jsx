import { useState } from 'react'
import './Login.css'
import {Link} from 'react-router-dom'




export default function App() {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle login logic here
  //   console.log('Email:', email);
  //   console.log('Password:', password);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/user/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }
else {
  console.log("success");
}
      // Handle successful login, such as redirecting to another page
      // history.push('/dashboard');
    } catch (error) {
      console.error('Error:', error);
     
    }
 };

  return (
    <div className="container">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <p>
        Don't have an account? <Link to="/Signup" className="signup-link">Sign up</Link>
      </p>
      
      <br></br>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

// export default App
