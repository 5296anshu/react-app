import React from 'react';
import {Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <ul>
            <li>
                <Link to ='/' style={{ textDecoration: 'none' }} >Home</Link>
            </li>
            <li>
            <Link to ='/about' style={{ textDecoration: 'none' }}>About</Link>
            </li>
            <li>
            <Link to ='/contect' style={{textDecoration: 'none'}}>Contect</Link>
            </li>
            <li>
            <Link to ='/product' style={{ textDecoration: 'none' }}>Product</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header