
import React, { useState } from 'react';
import JoshiverseLogo from '../../asset/image/logo/joshiverse.81bbc5229f044a87bd45.jpeg';
import { FaArrowRight } from 'react-icons/fa';


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex md:flex-row items-center justify-around gap py-10 px-6 '>
      <div className='flex items-center'>
        <img className='rounded-lg h-20 w-20' src={JoshiverseLogo} alt='Joshiverse Logo' />
        
      </div>
      <div className={`flex-col md:flex-row md:flex ${isOpen ? 'block' : 'hidden'} md:items-center md:gap-16 mt-4 md:mt-0 w-full md:w-auto text-xl md:ml-0 text-[#990000]`}>
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
        <button
          className='flex items-center gap-3 text-lg md:text-xl text-white bg-[#990000] px-4 py-2 md:px-7 md:py-4 mt-4 md:mt-0'
        >
          Donate
          <FaArrowRight/>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
