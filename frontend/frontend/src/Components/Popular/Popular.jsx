import React from 'react'
import './Popular.css'
import all_products from '../Assets/all_products'
import Item from '../Item/Item'

const Popular = () => {
    return (
        <div className='popular'>
            <h1>JUST FOR YOU</h1>
            <div className="popular-item">
                {all_products.map((item,i) => {
                    return <Item key={i} id={item.prodID} name={item.name} image={item.images} price={item.price}/>
                })}
            </div>

        </div>
    )
}

export default Popular