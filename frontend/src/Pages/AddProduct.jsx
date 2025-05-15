import React from 'react'
import './CSS/AddProduct.css'
import { useAuth } from '../Context/AuthContext'

const AddProduct = () => {

    const {isLoggedIn} = useAuth();

  return (
    <div>
        {isLoggedIn ? <div className='addProduct'>

        </div> : <span>Please login to add products</span>}
    </div>
  )
}

export default AddProduct