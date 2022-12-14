import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div>
            
            <nav className='header'>
                <div className='img'>
                <img src={logo} alt="" />
                </div>
    
    
                <div className='navItems'>
                    <Link to='/shop'>Shop</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to='/inventory'>Inventory</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Sign up</Link>
                   
                  
                </div>
            </nav>
        </div>
    );
};

export default Header;