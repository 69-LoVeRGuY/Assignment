import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import './Items.css'
import { Loading } from './Loading'
import star from '../Assets/star.jpg'
import ShopContext from '../../Context/ShopContext'
import { Link } from 'react-router-dom'

export const Items = (props) => {

    const {contextValue} = useContext(ShopContext);

  return(<div className='item-card'>
    {/* <div className="page-and-sort">
        <p>
            <span>Showing 1-20</span> out of 100 products
        </p>
        <div className="sort">
            Sort by <img src={dropdown_icon} alt='' />
        </div>
    </div> */}

    <div className="item">
    <Link to={`/products/${props.id}`} style={{textDecoration: 'none'}}><div className='Product'>
            <img src={props.img} alt='Product Image' id='image'/>
            <p>{props.title}</p>
            <div className="priceandrating">
                <div className="price">
                    Price: ${props.price}
                </div>
                <div className="rating">
                    <img src= {star} alt='stars' />
                    {props.rating}
                </div>
            </div>
        </div></Link>
    </div>
    </div>
);
  
}
