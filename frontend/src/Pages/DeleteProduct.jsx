import React, { useState } from 'react'
import './CSS/DeleteProduct.css'
import { useAuth } from '../Context/AuthContext'
import axios from 'axios';

export const DeleteProduct = () => {

    const {isLoggedIn} = useAuth();
    const [id, setId] = useState();
    const [message, setMessage] = useState('');
    const [arr, setArr] = useState(() => {
        const storedArr = window.localStorage.getItem('productId');
        return storedArr ? JSON.parse(storedArr) : [];
    });

    const handleDelete = () => {
        
            const response = axios.delete(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                if(response.status === 200) {
                    setMessage('Product deleted successfully!');
                    let prevIds = []
                    const storedArr = window.localStorage.getItem('productId');
                    if(storedArr){
                        prevIds = JSON.parse(storedArr);
                    }
                    const currentId = id;
                    const newIds = [...prevIds, currentId];
                    window.localStorage.setItem('productId', JSON.stringify(newIds));
                    setArr(newIds);
                    setId('');
                }
                else{
                    console.log('Product not deleted');
                    setMessage('Product not deleted');
                }
            }).catch(error => {
                console.log('Error in deleting product:', error);
                setMessage('Error in deleting product');
            });
    }   

  return (<div className='deleteProductPage'>
    <div className='deleteProductContainer'>
        {window.localStorage.getItem('token') ? <div className='deleteProduct'>
            <h1>Delete Product:</h1>
            <input type="text" placeholder='Product ID' onChange={(e) => {
                setId(e.target.value);
            }} required/>
            <button type='button' onClick={handleDelete}>Delete</button>
            {message && <h4>{message}</h4>}
        </div> : <span>Please login to delete products</span>}
    </div>
    </div>
  )
}

export default DeleteProduct