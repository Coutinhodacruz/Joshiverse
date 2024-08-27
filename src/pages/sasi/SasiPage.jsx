import React, { useEffect } from 'react'
import HeroPage from './HeroPage'
import About from './About'
import Event from './Event'
import Contact from './Contact'
import ScrollToTop from '../../scripts/ScrollToTop'
import Socials from "../joshiverse/Socials";
import Footer from "../joshiverse/Footer";

const SasiPage = () => {

  return (
    <div className='bg-[#eeeeee]'>
      <ScrollToTop/>
        <HeroPage/>
        <About/>
       <Event/>
       <Contact />
        <Footer/>
    </div>
  )
}

export default SasiPage