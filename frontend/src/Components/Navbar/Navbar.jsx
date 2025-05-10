import React from 'react'
import './Navbar.css'
import logo from '../Assets/MoE_logo.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navlogo">
            <Link to='/'><img src={logo} alt='Site logo'/></Link>
            <Link to={'/'} style={{textDecoration : 'none'}}><p>Fake API</p></Link>
        </div>
        <div className="navmenu">
            <input type="text" name="search" id="search"placeholder='Search'/>
        </div>
        <div className="login">
            <Link to='/login'><button>Login</button></Link>
        </div>
    </div>
  )
}
