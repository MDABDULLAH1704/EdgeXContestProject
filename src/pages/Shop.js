import React from 'react'
import Navbar from '../components/navbar/Navbar'
import ShopComp from '../components/shopComp/ShopComp'
import Layout from './Layout';

const Shop = () => {
    return (
        <Layout  backgroundColor="#000000">
            <Navbar />
            <ShopComp />
        </Layout>
    )
}

export default Shop
