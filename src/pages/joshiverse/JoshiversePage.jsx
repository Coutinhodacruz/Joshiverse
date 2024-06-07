import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import Statistics from './Statistics'
import About from './About'

const JoshiversePage = () => {
  return (
    <div className='bg-[#edeef6]'>
      <NavBar/>
      <Hero/>
      <Statistics/>
      <About/>
    </div>
  )
}

export default JoshiversePage
