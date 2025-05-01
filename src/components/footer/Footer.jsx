import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>AMAN VYAS</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experince">Experince</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/aman-vyas-1215ane1249" target="_blank" rel="noreferrer"><AiOutlineLinkedin/></a>
        <a href="https://github.com/amanvyas12" target="_blank" rel="noreferrer"><AiOutlineGithub /></a>
        <a href="https://www.instagram.com/_amanvyas/" target="_blank" rel="noreferrer"><BsInstagram /></a>
      </div>

      <div className="footer__copywrite">
        <small>&copy; Aman vyas. All rigths reserved.</small>
      </div>
    </footer>
  )
}

export default Footer