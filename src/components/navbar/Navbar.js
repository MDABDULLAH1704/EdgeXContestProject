import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo2 from '../../assets/logo2.png'
import { BiCart } from 'react-icons/bi'
import { BiMenu } from 'react-icons/bi'
import Menu from '../menu/Menu'
import { useCart } from '../../context/CartContext'


const Navbar = () => {
    const { cart } = useCart();
    const [showMenu, setShowMenu] = useState(false);

    const HandleShowMenu = () => {
        setShowMenu(!showMenu);
    }

    // Calculate the total quantity of items in the cart
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <>
            <div className='navbar'>
                <div className='navbarLeft'>
                    <Link to='/home'> <img src={logo2} alt="Logo" width="180" height="40" /></Link>
                </div>

                <div className='navbarRight'>
                    <div className='navbarRight-one'>
                        <Link to='/home' className='navbarRight-link'><p>Home</p></Link>
                        <Link to='/shop' className='navbarRight-link'><p>Shop</p></Link>
                        <Link to='/courses' className='navbarRight-link'><p>Courses</p></Link>
                    </div>
                    <div className='navbarRight-two'>
                        <div>
                            <Link to='/cart' className='navbarRight-link'>
                                <p className='cart'  >
                                    <BiCart className="cart-icon" />
                                </p>
                            </Link>
                        </div>
                        <div className='cartNumber'>{totalItems}</div>
                    </div>
                </div>

                <div className='menu' onClick={HandleShowMenu}>
                    <BiMenu />
                </div>
            </div>

            {showMenu ? <Menu /> : ''}
        </>
    )
}


export default Navbar
