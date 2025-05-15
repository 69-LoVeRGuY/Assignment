import React, { useEffect } from 'react'
import './CSS/LoginSignUp.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';


export const LoginSignUp = () => {

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();
  const {authUser,isLoggedIn, setIsLoggedIn} = useAuth();

  const userData = {
    username: username,
    password: password
  };

  const handleLogin = () => {

    const response = axios.post('https://fakestoreapi.com/auth/login', userData)
    .then(response => {
      if(response.status === 200) {
        console.log('Login successful!', response.data);
        setIsLoggedIn(true);
        navigate('/loggedin')
      }
      else{
        navigate('/');
      }
    })
    .catch(error => {
      navigate('/');
    });
  }

  return (
    <div className="loginsignup">
      <div className="container">
        <h1>Sign Up</h1>
        <div className="fields">
          <input type="text" placeholder='User name' id='name' onChange={(e) => {
            setUsername(e.target.value);
          }} />
          <input type="password" placeholder='Password' id='password'onChange={(e) => {
            setPassword(e.target.value);
          }}/>
        </div>
        <button type="button" id='login' onClick={handleLogin}>Login Now</button>
      </div>
    </div>
  )
}


