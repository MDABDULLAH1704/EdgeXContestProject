import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { FaShopify } from 'react-icons/fa6'
import { FaBook } from 'react-icons/fa'

const Menu = () => {
    return (
        <div className='menuList'>
            <Link to='/home' className='menu-link'><p> <FaHome/> Home</p></Link>
            <Link to='/shop' className='menu-link'><p> <FaShopify/> Shop</p></Link>
            <Link to='/courses' className='menu-link'><p> <FaBook/> Courses </p></Link>
        </div>
    )
}

export default Menu
