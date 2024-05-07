import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';

const ShopCategory = () => {
    const { category } = useParams();
    const { all_products } = useContext(ShopContext) || {};

    console.log("here",category);
    if (!all_products) {
        return <div>No Item Listed...</div>;
    }

    return (
        <div className='shop-category'>
            {all_products.map((item, i) => {
                if (category === item.category){
                    return <Item key={item.prodID} id={item.prodID} name={item.name} image={item.images} price={item.price}/>
                }
                return <div>No Item Listed....</div>;
            })}
        </div>
    )
    
}

export default ShopCategory;