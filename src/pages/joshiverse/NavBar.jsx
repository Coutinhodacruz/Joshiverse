import React, { useState } from 'react';
import JoshiverseLogo from '../../asset/image/logo/joshiverse.81bbc5229f044a87bd45.jpeg';
import { FaArrowRight } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className='flex md:flex-row items-center justify-around md:gap- py-10 px-6 '>
        <div className='flex items-center md:mr-20'>
          <img className='rounded-lg h-20 w-20' src={JoshiverseLogo} alt='Joshiverse Logo' />
          
        </div>
        <div className={`flex-col md:flex-row hidden  md:flex md:items-center md:gap-16 mt-4 md:mt-0 w-full md:w-auto text-xl md:ml-80 text-[#990000]`}>
          <p className='cursor-pointer py-2 md:py-0'>About</p>
          <p className='cursor-pointer py-2 md:py-0'>Gallery</p>
          <p className='cursor-pointer py-2 md:py-0'>Sasi</p>
          <p className='cursor-pointer py-2 md:py-0'>Contact</p>
        </div>
        <div className='flex items-center gap-5'>
          <button 
            className=' text-3xl md:text-4xl md:hidden ml-auto' 
            onClick={toggleMenu}
          >
            ☰
          </button>
          
        </div>
        
      </div>
      {
        isOpen && 
        <div className='flex flex-col items-center bg-[#990000] text-white gap-2'>
          <p className='cursor-pointer py-2 md:py-0'>About</p>
          <p className='cursor-pointer py-2 md:py-0'>Gallery</p>
          <p className='cursor-pointer py-2 md:py-0'>Sasi</p>
          <p className='cursor-pointer py-2 md:py-0'>Contact</p>
        </div>
      }
    </div>
    
  );
}

export default NavBar;
