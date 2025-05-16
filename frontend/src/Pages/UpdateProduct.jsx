import React, { useState } from 'react'
import './CSS/UpdateProduct.css'
import { useAuth } from '../Context/AuthContext'
import axios from 'axios';

const UpdateProduct = () => {

    const {isLoggedIn} = useAuth();
    const [id, setId] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [category, setCategory] = useState();
    const [image, setImage] = useState();
    const [message, setMessage] = useState('');
    const [arr, setArr] = useState(() => {
            const storedArr = window.localStorage.getItem('updates');
            return storedArr ? JSON.parse(storedArr) : [];
        });

    const product = {
        id: id,
        title: title,
        description: description,
        price: price,
        category: category,
        image: image
    }

    const handleUpdate = () => {
        const response = axios.put(`https://fakestoreapi.com/products/${id}`, product)
        .then(response => {
            if(response.status === 200) {
                setMessage('Product updated successfully!');
                let prevUpdates = [];
                const storedArr = window.localStorage.getItem('updates');
                    if(storedArr){
                        prevUpdates = JSON.parse(storedArr);
                    }
                    const newUpdates = [...prevUpdates, product];
                    window.localStorage.setItem('updates', JSON.stringify(newUpdates));
                    setArr(newUpdates);
                setId('');
                setTitle('');
                setDescription('');
                setPrice('');
                setCategory('');
                setImage('');
            }
            else{
                setMessage('Product not updated');
            }
        }).catch(error => {
            setMessage('Error in updating product');
        });
    }

  return (<div className="updateProductPage">
    <div className='updateProductContainer'>
        {window.localStorage.getItem('token') ? <div className='updateProduct'>
            <h1>Update Product:</h1>
            <input type="text" placeholder='Product ID' onChange={(e) => {
                setId(e.target.value);
            }} required/>
            <input type="text" placeholder='Product Title' onChange={(e) => {
                setTitle(e.target.value);
            }}/>
            <input type="text" placeholder='Product Description' onChange={(e) => {
                setDescription(e.target.value);
            }}/>
            <input type="text" placeholder='Product Price' onChange={(e) => {
                setPrice(e.target.value);
            }}/>
            <input type="text" placeholder='Product Category' onChange={(e) => {
                setCategory(e.target.value);
            }}/>
            <input type="text" placeholder='Product Image URL' onChange={(e) => {
                setImage(e.target.value);
            }}/>
            <button type='button' onClick={handleUpdate}>Update</button>
            {message && <h4>{message}</h4>}
        </div>: <span>Please login to update products</span>}
    </div>
    </div>
  )
}

export default UpdateProduct