import React, { useEffect } from 'react'
import HeroPage from './HeroPage'
import About from './About'
import Event from './Event'
import Contact from './Contact'
import ScrollToTop from '../../scripts/ScrollToTop'

const SasiPage = () => {

  return (
    <div className='bg-[#eeeeee]'>
      <ScrollToTop/>
        <HeroPage/>
        <About/>
       <Event/>
       <Contact />
    </div>
  )
}

export default SasiPage