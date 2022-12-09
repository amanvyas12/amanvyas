import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assests/avatar11.jpg';
import AVTR2 from '../../assests/nayabb.png';
import AVTR3 from '../../assests/MTI.png';

// import Swiper core and required modules
import {  Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const Testimonials = () => {
  const data = [
    {
      avatar: AVTR1,
      name: 'Reliance General Insurance',
      review: 'Always available, extremely knowledgeable, and a tremendous "can-do" attitude. Our company was on a tight timeline and strict budget to create a first-class web app, and aman was the perfect developer. His developing skills in producing that app which easily exceeded my expectations... the entire company was thrilled with it! Without any hesitation... highly recommended.'
    },
    {
      avatar: AVTR2,
      name: 'Nayab Ecommerce',
      review: 'Always available to answer any questions. Very knowledgeable about the services they provide. Would recommend to anyone!'
    },
    {
      avatar: AVTR3,
      name: 'Motor Training Institute',
      review: 'Aman is attentive, personable, and professional. Aman provide great support for my companys needs.'
    },
    // {
    //   avatar: AVTR4,
    //   name: 'rohit',
    //   review: 'A well know site to every one here'
    // },
  ]

  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testiomonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination, Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                   {review}
                </small>
              </SwiperSlide>
            )
          })
        }
       
      </Swiper>
    </section>
  )
}

export default Testimonials