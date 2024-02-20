import React from 'react'
import { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import logo from '../images/logo.jpg'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import './Nav.css'

const Menu=()=>(
  <ul className='app__navbar-links'>
        <li className='p__opensans'><a href='#Home'>Home</a></li>
        <li className='p__opensans'><a href='#header'>Header</a></li>
        <li className='p__opensans'><a href='#about'>About</a></li>
        <li className='p__opensans'><a href='#menu'>Menu</a></li>
        <li className='p__opensans'><a href='#MenuItems'>menuItems</a></li>
        <li className='p__opensans'><a href='#contacts'>Contacts</a></li>

      </ul>
)


const Nav = () => {
  const [toggleMenu, setToggleMenu]=useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
          <img src={logo} alt='logo'/>
      </div>
        <Menu/>
      <div className='app__navbar-login'>
         <a href='footer' className='p__opensans'>Log In</a>
        <div/>
        <a href='/' className='p__opensans'>Order Now</a>
      </div>
      <div className='app__navbar-smallscreen'>
          <GiHamburgerMenu color='#fff' className='overlay__close' fontSize={27} onClick={()=>setToggleMenu(true)}/>
       {toggleMenu &&(
          <div className='app__navbar-smallscreen_overlay flex__center slide-botom'>

          <MdOutlineRestaurantMenu fontSize={27}  className='overlay__close' onClick={()=>setToggleMenu(false)}/>
          <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><a href='#Home'>Home</a></li>
              <li className='p__opensans'><a href='#header'>Header</a></li>
              <li className='p__opensans'><a href='#about'>About</a></li>
              <li className='p__opensans'><a href='#menu'>Menu</a></li>
              <li className='p__opensans'><a href='#awards'>Chef</a></li>
              <li className='p__opensans'><a href='#contacts'>Contacts</a></li>
          </ul>
          </div>
       )}
      
        
      </div>
       
    </nav>
  )
}

export default Nav