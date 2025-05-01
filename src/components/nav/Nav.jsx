import React from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import { BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from "react";


const Nav = () => {
 
  const [activeNav, setActiveNav] = useState('#')


  return (
    <nav >
      <a href="#home" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''} title="Home"><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''} title="About"><AiOutlineUser/></a>
      <a href="#experince" onClick={() => setActiveNav('#experince')} className={activeNav === '#experince' ? 'active': ''} title="Experince"><BiBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active': ''} title="Services"><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''} title="Contact Me"><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav