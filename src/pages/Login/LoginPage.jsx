import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; 
import { CONFIG } from '../../Config';
import { PAGES } from '../../router/router';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetch( CONFIG.BACK +'/users')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((err) => console.error('Error loading users:', err));
  }, []);

  const handleLogin = () => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      dispatch(login(user));
      navigate(PAGES.HOME);
    } else {
      setError('NO!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Instagram</h1>
        {error && <p>{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        
      </div>
    </div>
  );
};





export default LoginPage;
