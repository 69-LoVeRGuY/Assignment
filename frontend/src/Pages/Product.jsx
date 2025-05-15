import React, { useContext, useState } from 'react'
import {useParams} from 'react-router-dom'
import ShopContext from '../Context/ShopContext'
import { ProductDetails } from './ProductDeatils';

export const Product = () => {

    const {contextValue} = useContext(ShopContext);
    console.log(contextValue);
    const {id} = useParams();

    const product = contextValue.find((element) => element.id === parseInt(id));
    // console.log({product});
  return (
    <div>
        <ProductDetails product={product}/>
    </div>
  )
}

export default Product;
