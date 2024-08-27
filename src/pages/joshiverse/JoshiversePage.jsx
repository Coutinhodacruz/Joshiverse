import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import Statistics from './Statistics'
import About from './About'
import Gallery from './Gallery'
import Footer from './Footer'
import Form from './Form'
import Socials from './Socials'
import ScrollToTop from '../../ScrollToTop'

const JoshiversePage = () => {
  return (
    <div className='bg-[#edeef6]'>
      <ScrollToTop/>
      <NavBar/>
      <Hero/>
      <Statistics/>
      <About/>
      <Gallery/>
      <Form/>
      <Socials/>
      <Footer/>
    </div>
  )
}

export default JoshiversePage
