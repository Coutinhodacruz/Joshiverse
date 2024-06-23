import React from 'react'
import Navbar from './Navbar'
import HeroPage from './HeroPage'
import About from './About'
import Event from './Event'
import Contact from './Contact'

const SasiPage = () => {
  return (
    <div className='bg-[#eeeeee]'>
        <HeroPage/>
        <About/>
       <Event/>
       <Contact />
    </div>
  )
}

export default SasiPage