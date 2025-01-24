// eslint-disable-next-line no-unused-vars
import React from 'react'
import style from './Nav.module.css'
import logo from '../../assets/Kds logo 1 (4).png'
import { useState } from 'react';
const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  return (
    <>
      <header className={style.header}>
        <div className={style.logo}>
          <img src={logo} alt="" />
        </div>
     
        {/* <div className={`nav-container ${isMenuOpen ? 'active' : ''}`}> */}
        <div className={`${style['nav-container']} ${isMenuOpen ? style.active : ''}`}>
            <ul className={style.nav}>
              <li>About Us</li>
              <li>Services</li>
              <li>Solutions</li>
              <li>Industries</li>
              <li>Case Studies</li>
              <li>Blog</li>
              <li>Hire</li>
              <li className={style.contact}>Contact Us</li>
            </ul>
        </div>
        <div className={style.hamburger} onClick={toggleMenu}>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
      </div>
    </header>
    </>
  )
}

export default Nav