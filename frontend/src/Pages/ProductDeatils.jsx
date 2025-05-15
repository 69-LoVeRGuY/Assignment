import React from 'react'
import star from '../Components/Assets/star.jpg'
import './CSS/ProductDetails.css'

export const ProductDetails = (props) => {

   const {product} = props;

  return (
    <div className="productDisplay">
        <div className="productDisplay-left">
            <img src={product.image} alt='Product Image'/>
        </div>

        <div className="productDisplay-right">
             <h1>{product.title}</h1>
             <div className="stars">
                <img src= {star} alt='' />
                <p>{product.rating.rate}({product.rating.count})</p>
             </div>
             <div className="price">${product.price}</div>
             <div className="description">{product.description}</div>
             <div className="category">
                <span>Category: {product.category}</span>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails;
