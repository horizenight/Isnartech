import React from 'react'

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useState } from 'react'

import logo4 from '../../../assets/logo4.png'
import   './navbar.css'

import {Link} from 'react-router-dom'

import { menuItems } from './Items/MenuItems';
import MenuItems from './MenuItems';

const Menu = () => {

  return <>
    {/* <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">About us</a></p>
          <p><a href="#possibility">Services</a></p>
          <p><a href="#features">Products</a></p>
          <p><a href="#blog">Application</a></p> */}

          <ul className="menus">
          <p><a href="#whpt3">About us</a></p>
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return <>
          <p>

          <MenuItems items={menu} key={index} depthLevel={depthLevel} />
          </p>

          </>
        })}
        <p><a href="#application">Application</a></p>
      </ul>
  </>
}




const Navbar = () => {



  const [toggleMenu,setToggleMenu] = useState(false)

  
  return (
    <div className='gpt3__navbar'>
    <div className="gpt3__navbar-links">
    <Link to='/'>

        <div className="gpt3__navbar-links_logo">
          <img src={logo4} />
         
        </div>
    </Link>

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
            {/* <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">About Us</a></p>
            
            
            <p>Services</p>
            
              
            <p><a href="#features">Products</a></p>
            <p><a href="#blog">Application</a></p> */}


            <ul className="menus">
          <p><a href="#whpt3">About us</a></p>
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return <>
          <p>
          
          <MenuItems items={menu} key={index} depthLevel={depthLevel} />
          </p>
          </>
        })}
      </ul>

            {/* {menuItems.map((menu, index) => {
     return (
      <li className="menu-items" key={index}>
       <p>
       <a href="/#">{menu.title}</a>
       </p>
      </li>
     );
    })} */}

    
            
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Portfolio</p>

            <Link to='/contact'>

            <button type="button">Contact us!</button>
            </Link>
          </div>
        </div>
        )}
      </div>

    
    </div>
  )
}

export default Navbar