import React from 'react'
import './ShopItem.css'
import { useCart } from '../../context/CartContext'

const ShopItem = (props) => {
    const { addToCart } = useCart();

    // handleAddToCart function
    const handleAddToCart = () => {
        addToCart(props);
    };
    return (
        <div className='shopItem'>
            <img src={props.image} alt="image" height='200' width='200' />
            <h2>{props.title}</h2>
            <h3>{props.price}</h3>
            <p>{props.description}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    )
}

export default ShopItem
