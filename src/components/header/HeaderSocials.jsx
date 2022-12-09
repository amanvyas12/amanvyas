import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/aman-vyas-1215ane1249" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/amanvyas12" target="_blank"><FaGithub /></a>
        <a href="https://www.instagram.com/_amanvyas/" target="_blank"><AiFillInstagram /></a>
    </div>
  )
}

export default HeaderSocials