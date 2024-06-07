import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import HeroImage from '../../asset/image/images/hero.webp'


const Hero = () => {
  return (
    <div className=' block lg:flex items-center justify-center gap-40 pt-12'>
      <div className='flex flex-col justify-center gap-10 lg:pl-0 pl-5'>
        <p className='text-5xl md:text-6xl font-bold text-[#990000]'>
          Small changes make a <span className='text-[#ce9494]'><br/>big impact</span> on children’s<br/>
          lives
        </p>
        <p className='text-pretty text-center text-[#990000] text-lg lg:w-[600px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam.
        </p>
        <button className='flex items-center bg-[#990000] text-white px-7 py-4 w-44 gap-3'>
          Learn More
          <FaArrowRight/>
        </button>
      </div>
      <div className='lg:pt-0 pt-10'>
        <img className=' w-full lg:w-[544px] h-[100%]' src={HeroImage} alt='Hero page'/>
      </div>
    </div>
  );
}

export default Hero;
