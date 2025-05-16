import React, {useContext} from 'react'
import { Items } from '../Components/Item/Items';
import dropdown_icon from '../Components/Assets/dropdown.png'
import ShopContext from '../Context/ShopContext';
import './CSS/Home.css'

export const Home = () => {

  const {contextValue} = useContext(ShopContext);

  // remove deleted items
  const deleted = localStorage.getItem('productId');
  let temp = [];
  if(deleted){
    temp = JSON.parse(deleted);
  }
  const arr = temp.map(Number);
  console.log(arr);
  let finalProducts = contextValue.filter((product) => !arr.includes(product.id));

  //update items
  const updated = localStorage.getItem('updates');
  let temp1 = [];
  if(updated){
    temp1 = JSON.parse(updated);
  }
  temp1.map(product => {
    finalProducts.forEach((item) => {
      if(item.id === parseInt(product.id)) {
        if(product.title){
          item.title = product.title;
        }
        if(product.description){
          item.description = product.description;
        }
        if(product.price){
          item.price = product.price;
        }
        if(product.category){
          item.category = product.category;
        }
        if(product.image){
          item.image = product.image;
        }
      }
    });
  })

  //add items
  const added = localStorage.getItem('additions');
  let temp2 = [];
  if(added){
    temp2 = JSON.parse(added);
  }
  temp2.map(product => {
    finalProducts.push(product);
  });

  const length = finalProducts.length;

    return(<div className='item-card'>
        <div className="page-and-sort">
            <p>
                <span>Showing {length}</span> out of {Math.max(20,length)} products
            </p>
            <div className="sort">
                <button type='button'>Sort by <img src={dropdown_icon} alt='' /> </button>
            </div>
        </div>

        <div className="item">
    {finalProducts.map((product) => (
        <div>
          <Items id={product.id} img= {product.image} title= {product.title} price= {product.price} rating= {product.rating.rate}/>
        </div>
    ))}
    </div>
    </div>
  )
}
