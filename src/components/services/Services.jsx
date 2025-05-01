import React from 'react'
import "./services.css";
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Desgin</h3>
          </div>

          <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Animations and Interactive Pages</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Dynamic Content</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Easily accessible</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Modern Designing Tools and Technologies</p>
              </li>
          </ul>
        </article>
        {/* End of UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Design Wireframes for landing pages to new Products</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Design Business Logic to handle functionality</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Design pattern and architecture</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Revamped web application security applications</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Dynamic and interactive website that ensured high traffic</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Oversaw full lifecycle of SLDC</p>
              </li>
              {/* <li>
                <BiCheck className='service__list-icon'/>
                <p>web design which i do</p>
              </li> */}
          </ul>
        </article>
        {/* end of web development */}
        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>
          <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Integrating Semantic Web Technologies</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Project structure and architecture</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Database driving application functionality</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Code maintenance</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Deployement for Project</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>CI/CD Pipeline Integration</p>
              </li>
          </ul>
        </article>
        {/* end of content creation */}
      </div>
    </section>
  )
}

export default Services