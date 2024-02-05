import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file


function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:4000/login', {
        username,
        password,
      });

      // Check if response and response.data are defined
      if (response && response.data) {
        console.log(response.data);
      } else {
        console.error('Login failed. Invalid response format.');
      }
    } catch (error) {
      // console.log("error - ", error)
      // Check if error.response and error.response.data are defined
      if (error.response && error.response.data) {
        console.error('Login failed', error.response.data.message);
      } else {
        console.error('Login failed. Unknown error.');
      }
    }
  };


  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default App;
