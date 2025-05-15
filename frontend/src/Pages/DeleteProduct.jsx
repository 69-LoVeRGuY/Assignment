import React from 'react'
import './CSS/AddProduct.css'
import { useAuth } from '../Context/AuthContext'

const DeleteProduct = () => {

    const {isLoggedIn} = useAuth();

  return (
    <div>
        {isLoggedIn ? <div className='deleteProduct'>
        </div> : <span>Please login to delete products</span>}
    </div>
  )
}

export default DeleteProduct