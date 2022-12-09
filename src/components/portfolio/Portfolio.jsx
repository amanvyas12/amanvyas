import React from 'react';
import './portfolio.css'
import IMG1 from '../../assests/portfolio1.png'
import IMG2 from '../../assests/portfolio2.png'
import IMG3 from '../../assests/portfolio3.png'
import IMG4 from '../../assests/portfolio4.jpg'
import IMG5 from '../../assests/portfolio5.png'
import IMG6 from '../../assests/portfolio6.jpg'


const Portfolio = () => {

  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Nayab Ecommerce',
      // github: 'http://github.com',
      demo: 'http://nayab.biz/'
    },
    {
      id: 2,
      image: IMG2,
      title: 'Digital Portfolio',
      // github: 'http://github.com',
      demo: 'http://github.com'
    },
    {
      id: 3,
      image: IMG3,
      title: 'Motor training Institute',
      // github: 'http://github.com',
      demo: 'https://amanvyas12.github.io/Motor-Training-Institute/HomePage.html'
    },
    {
      id: 4,
      image: IMG4,
      title: 'WP Portfolio',
      // github: 'http://github.com',
      demo: 'https://wpportfolio.net/website-portfolio/'
    },
    {
      id: 5,
      image: IMG5,
      title: 'Reflect',
      // github: 'http://github.com',
      demo: 'https://reflect.app/?ref=onepagelove'
    },
    // {
    //   id: 6,
    //   image: IMG6,
    //   title: 'Crypto Currency',
    //   github: 'http://github.com',
    //   demo: 'http://github.com'
    // },
  ]


  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  {/* <a href={github} className='btn'>Github</a> */}
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio