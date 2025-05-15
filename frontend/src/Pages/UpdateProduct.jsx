import React from 'react'
import './CSS/AddProduct.css'
import { useAuth } from '../Context/AuthContext'

const UpdateProduct = () => {

    const {isLoggedIn} = useAuth();

  return (
    <div>
        {isLoggedIn ? <div className='updateProduct'>

        </div>: <span>Please login to update products</span>}
    </div>
  )
}

export default UpdateProduct