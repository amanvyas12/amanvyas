import React from 'react'
import './about.css'
import ME from "../../assests/a1.jpg";
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return ( 
    <section id='about' className='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
              <article className="about__card">
                <FaAward className='about__icon'/>
                <h5>Experince</h5>
                <small>4+ Years Working</small>
              </article>
              <article className="about__card">
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>5+ Clients</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>5+ Completed</small>
              </article>
          </div>

          <p>
          I'm an experienced Software Developer who constantly seeks out innovative solutions to everyday problems. In my two years in this industry, I've honed my analytical thinking and collaboration skills, and I love working with a team. I've also had the opportunity to serve as the main Software Develope Role for various projects in the Industry.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About