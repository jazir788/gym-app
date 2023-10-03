import React from 'react'
import Logo from '../assets/logo.png'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
    <img className='logo' src={Logo} alt='company_logo' />

    <ul className='header-menu'>
    <li>Home</li>
    <li>Programs</li>
    <li>Why Us</li>
    <li>Plans</li>
    <li>Testimonials</li>
    </ul>
    </div>
    
  )
}

export default Header