import React from 'react'
import About from './components/about/About'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from "./components/testimonials/Testimonials"
import Experince from './components/experince/Experince'
import Services from './components/services/Services'
import Contacts from "./components/contact/Contact"
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experince />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  )
}

export default App