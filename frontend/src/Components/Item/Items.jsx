import React from 'react'
import './Items.css'

export const Items = (props) => {
  return (
    <div className='Item'>
        <img src='props.image' alt='Product Image'/>
        <p>{props.title}</p>
        <div className="priceandrating">
            <div className="price">
                {props.price}
            </div>
            <div className="rating">
                <img src='../Assets/star.png' alt='stars' />
                {props.rating.rate}
            </div>
        </div>
    </div>
  )
}
