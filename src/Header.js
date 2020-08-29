import React from 'react';
import './Header.css';
import Logo from './img/logo.svg';

function Header() {
  return (
    <div className='header'>
      <img src={Logo} alt='Comedias Logo' />
    </div>
  )
}

export default Header
