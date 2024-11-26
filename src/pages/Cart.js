import React from 'react'
import Navbar from '../components/navbar/Navbar'
import CartItem from '../components/cartItem/CartItem';
import Layout from './Layout';

const Cart = () => {
    return (
        <Layout backgroundColor="#000000">
            <Navbar />
            <CartItem />
        </Layout>
    )
}

export default Cart
