import React from 'react'

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useState } from 'react'

import logo4 from '../../../assets/logo4.png'
import   './navbar.css'


const Menu = () => {

  return <>
    <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">About us</a></p>
          <p><a href="#possibility">Services</a></p>
          <p><a href="#features">Products</a></p>
          <p><a href="#blog">Application</a></p>
  </>
}




const Navbar = () => {

  const [toggleMenu,setToggleMenu] = useState(false)
  
  return (
    <div className='gpt3__navbar'>
    <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo4} />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu/>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Portfolio</p>
        <button type="button">Contact us!</button>
      </div>

      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT3?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Portfolio</p>
            <button type="button">Contact us!</button>
          </div>
        </div>
        )}
      </div>

    
    </div>
  )
}

export default Navbar