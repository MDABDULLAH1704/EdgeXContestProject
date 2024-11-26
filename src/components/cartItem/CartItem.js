import React from 'react'
import './CartItem.css'
import { useCart } from '../../context/CartContext'


const CartItem = () => {
    const { cart } = useCart();

    // Calculate the total price for the cart
    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (parseFloat(item.price.replace('$', '')) * item.quantity), 0);
    };

    return (
        <div className="cartItem-container">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p className='cartItem-container-p'>Your cart is empty.</p>
            ) : (
                <div className="cart-items">
                    <div className='cart-item-1'>
                        <p>Product Name</p>
                        <p>Quantity</p>
                        <p>Price Per Item</p>
                        <p className='itemTotalPrice'>Item Total</p>
                    </div>
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item-2">
                            <p className='title'>{item.title}</p>
                            <p>{item.quantity}</p>
                            <p>{item.price}</p>
                            <p className='itemTotalPrice' >${(parseFloat(item.price.replace('$', '')) * item.quantity)}</p>
                        </div>
                    ))}
                </div>
            )}
            <hr />
            <h3>Total Price: ${getTotalPrice()}</h3>
            <div className='checkOutBtn'>
                <button>Check Out</button>
            </div>
        </div>
    )
}

export default CartItem
