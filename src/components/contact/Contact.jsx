import React, {useRef} from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'


import emailjs from 'emailjs-com'


const Contact = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3btiw2z', 'template_ev7ofs7', form.current, 'RtFQFsESk3_I6zdBl')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    })

    e.target.reset()
  }



  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>aman.vyas.info@gmail.com</h5>
            <a href="mailto:aman.vyas.info@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>Aman vyas</h5>
            <a href="https://www.instagram.com/_amanvyas/" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91-1234567890</h5>
            <a href="https://api.whatsapp.com/send?phone=+917566562366" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* End of contact section */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary' >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact