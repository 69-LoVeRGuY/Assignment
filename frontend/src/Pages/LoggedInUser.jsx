import React from 'react'
import { useAuth } from '../Context/AuthContext'
import './CSS/LoggedInUser.css'
import { Link } from 'react-router-dom';

const LoggedInUser = () => {

    const {isLoggedIn} = useAuth();
    

  return (<div>
    {isLoggedIn ? 
        <div className='options'>
            <Link to='/add' style={{textDecoration: 'none'}}><button type="button">Add Product</button></Link>
            <Link to='/update' style={{textDecoration: 'none'}}><button type="button">Update Product</button></Link>
            <Link to='/delete' style={{textDecoration: 'none'}}><button type="button">Delete Product</button></Link>
        </div>
    : <div className="notLoggedIn">
        <span> Please login to access these options </span>
    </div> }    
  </div>
  );
}

export default LoggedInUser