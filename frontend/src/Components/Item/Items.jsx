import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import './Items.css'
import { Loading } from './Loading'
import star from '../Assets/star.jpg'
import dropdown_icon from '../Assets/dropdown.png'

export const Items = () => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios({
            method: "GET",
            url: "https://fakestoreapi.com/products",
        }).then((res) => {
            console.log(res.data);
            setData(res.data);
        }).catch((e) => console.log(e))
        .finally(() => setLoading(false));
    },[]);

  return(<div className='item-card'>
    <div className="page-and-sort">
        <p>
            <span>Showing 1-20</span> out of 100 products
        </p>
        <div className="sort">
            Sort by <img src={dropdown_icon} alt='' />
        </div>
    </div>
    {loading && (<Loading />)}
    <div className="item">
    {data.map((product) => (
        <div className='Product'>
            <img src={product.image} alt='Product Image' id='image'/>
            <p>{product.title}</p>
            <div className="priceandrating">
                <div className="price">
                    Price: ${product.price}
                </div>
                <div className="rating">
                    <img src= {star} alt='stars' />
                    {product.rating.rate}
                </div>
            </div>
        </div>
    ))}
    </div>
    </div>
);
  
}
