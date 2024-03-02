// LoginPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      if (response && response.data && response.data.token) {
        localStorage.setItem('token', response.data.token);
        navigate('/dashboard'); // Redirect to dashboard page after successful login
      } else {
        setErrorMessage('Invalid response from server');
      }
    } catch (error) {
      console.error('Login failed:', error.response.data.message);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      {errorMessage && <p>Error: {errorMessage}</p>}
    </div>
  );
}

export default LoginPage;
