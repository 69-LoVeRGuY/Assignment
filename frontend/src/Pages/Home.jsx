import React, {useContext} from 'react'
import { Items } from '../Components/Item/Items';
import dropdown_icon from '../Components/Assets/dropdown.png'
import ShopContext from '../Context/ShopContext';

export const Home = () => {

  const {contextValue} = useContext(ShopContext);


    return(<div className='item-card'>
        <div className="page-and-sort">
            <p>
                <span>Showing 1-20</span> out of 100 products
            </p>
            <div className="sort">
                Sort by <img src={dropdown_icon} alt='' />
            </div>
        </div>

        <div className="item">
    {contextValue.map((product) => (
        <div>
          <Items id={product.id} img= {product.image} title= {product.title} price= {product.price} rating= {product.rating.rate}/>
        </div>
    ))}
    </div>
    </div>
  )
}
