import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import Statistics from './Statistics'
import About from './About'
import Gallery from './Gallery'
import Footer from './Footer'

const JoshiversePage = () => {
  return (
    <div className='bg-[#edeef6]'>
      <NavBar/>
      <Hero/>
      <Statistics/>
      <About/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default JoshiversePage
