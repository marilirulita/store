import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/icons/logo.svg';
import '../stylesheets/navbar.css';
import burger from '../assets/images/icons/burger.svg';
import close from '../assets/images/icons/close.svg';
import search from '../assets/images/icons/search.svg';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const navLinks = [
    { id: 1, name: 'Home', to: '/' },
    { id: 2, name: 'Login', to: '/LoginPage' },
    { id: 3, name: 'Create an account', to: '/Signup' },
  ];
  const handleVisible = () => setVisible(!visible);
  return (
    <header className="site-header">
      <div className="logo-details">
        <img src={logo} alt="logo icon" id="nav-logo" className="company-logo" />
        <span className="site-name">México Tienda</span>
      </div>
      <button type="button" onClick={handleVisible} className="nav-btn"><img className="burger-icon" src={burger} alt="menu button" /></button>
      <div className={visible ? 'show-nav active' : 'show-nav'}>
        <div className="nav-contents">
          <button type="button" onClick={handleVisible} className="nav-btn"><img src={close} alt="close btn" className="closeBtn" /></button>
        </div>
        <nav className="nav-container">
          {
                navLinks.map((link, index) => (
                  <NavLink key={link.id} id={index === 0 ? 'first-link' : ''} onClick={handleVisible} className={(isActive) => (isActive ? 'link active' : 'link')} to={link.to}>{link.name}</NavLink>
                ))
            }
        </nav>
      </div>
      <form id="form" className="form">
        <input type="text" placeholder="Search..." className="search-box" />
        <button type="submit" className="search-icon-btn"><img src={search} alt="search icon" className="seach-icon" /></button>
      </form>
    </header>
  );
};

export default Navbar;
