import React from 'react'
import { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/MoE_logo.png'
import { Link, Links } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext'

export const Navbar = () => {

    const {isLoggedIn, setIsLoggedIn} = useAuth();

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.clear();
        window.location.reload();
    }

  return (
    <div className='navbar'>
        <div className="navlogo">
            <Link to='/'><img src={logo} alt='Site logo'/></Link>
            <Link to='/' style={{textDecoration : 'none'}}><p>Fake API</p></Link>
        </div>
        <div className="navmenu">
            <input type="text" name="search" id="search"placeholder='Search'/>
        </div>
        <div className="options">
            {localStorage.getItem('token') ? <Link to='/loggedin' style={{textDecoration: 'none'}}>
            <button>Options</button></Link>: <div className='loggedOut'></div>}
        </div>
        <div className="login">
            {localStorage.getItem('token') ? <Link to='/'><button onClick={handleLogout}>Log Out</button></Link>:
            <Link to='/login'><button>Login</button></Link>}
        </div>
        
    </div>
  )
}
