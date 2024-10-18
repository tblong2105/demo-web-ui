import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [title, setTitle] = useState('');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleInputUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleInputPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="App">
       <input
        type="text"
        value={username}
        onChange={handleInputUsernameChange}
      />
      <h1>11123</h1>
    </div>
  );
}

export default App;
