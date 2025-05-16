import React from 'react'
import './CSS/AddProduct.css'
import { useAuth } from '../Context/AuthContext'
import axios from 'axios'

const AddProduct = () => {

    const {isLoggedIn} = useAuth();
    const [id, setId] = React.useState();
    const [title, setTitle] = React.useState();
    const [description, setDescription] = React.useState();
    const [price, setPrice] = React.useState();
    const [category, setCategory] = React.useState();
    const [image, setImage] = React.useState();
    const [rating, setRating] = React.useState();
    const [ratingCount, setRatingCount] = React.useState();
    const [message, setMessage] = React.useState('');
    const [arr, setArr] = React.useState(() => {
        const storedArr = window.localStorage.getItem('addedProducts');
        return storedArr ? JSON.parse(storedArr) : [];
    });

    const product = {
        id: id,
        title: title,
        description: description,
        price: price,
        category: category,
        image: image,
        rating: {
            rate: rating,
            count: ratingCount
        }
    }

    const handleAdd = () => {
        const response = axios.post('https://fakestoreapi.com/products', product)
        .then(response => {
            if(response.status === 200) {
                setMessage('Product added successfully!');
                let prevAddition = [];
                const storedArr = window.localStorage.getItem('additions');
                    if(storedArr){
                        prevAddition = JSON.parse(storedArr);
                    }
                    const newAddition = [...prevAddition, product];
                    window.localStorage.setItem('additions', JSON.stringify(newAddition));
                    setArr(newAddition);
                setId('');
                setTitle('');
                setDescription('');
                setPrice('');
                setCategory('');
                setImage('');
                setRating('');
                setRatingCount('');
            }
            else{
                setMessage('Product not added');
            }
        }).catch(error => {
            setMessage('Error in adding product');
        });
    }

  return (<div className="addProductPage">
    <div className='addProductContainer'>
        {window.localStorage.getItem('token') ? <div className='addProduct'>
            <h1>Add Product:</h1>
            <input type="text" placeholder='Product ID' onChange={(e) => {
                setId(e.target.value);
            }} required/>
            <input type="text" placeholder='Product Title' onChange={(e) => {
                setTitle(e.target.value);
            }} required/>
            <input type="text" placeholder='Product Description' onChange={(e) => {
                setDescription(e.target.value);
            }} required/>
            <input type="text" placeholder='Product Price' onChange={(e) => {
                setPrice(e.target.value);
            }} required/>
            <input type="text" placeholder='Product Category' onChange={(e) => {
                setCategory(e.target.value);
            }} required/>
            <input type="text" placeholder='Product Image URL' onChange={(e) => {
                setImage(e.target.value);
            }} required/>
            <input type="text" placeholder='Product Rating' onChange={(e) => {
                setRating(e.target.value);
            }} required/>
            <input type="text" placeholder='Rating Count' onChange={(e) => {
                setRatingCount(e.target.value);
            }} required/>
            <button type='button' onClick={handleAdd}>Add</button>
            {message && <h4>{message}</h4>}
        </div> : <span>Please login to add products</span>}
    </div>
    </div>
  )
}

export default AddProduct