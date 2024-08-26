import React, { useState } from 'react';
import JoshiverseLogo from '../../asset/logo/joshiverse-icon.jpeg';
import { Link } from 'react-scroll'; // Importing Link from react-scroll

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className='flex md:flex-row items-center justify-around md:gap- py-10 px-6'>
        <div className='flex items-center md:mr-20'>
          <img className='rounded-lg h-20 w-20' src={JoshiverseLogo} alt='Joshiverse Logo' />
        </div>
        <div className={`flex-col md:flex-row hidden md:flex md:items-center md:gap-16 mt-4 md:mt-0 w-full md:w-auto text-xl md:ml-80 text-[#990000]`}>
          <Link to='about-section' smooth={true} duration={500} className='cursor-pointer py-2 md:py-0'>
            About
          </Link>
          <Link to='gallery-section' smooth={true} duration={500} className='cursor-pointer py-2 md:py-0'>
            Gallery
          </Link>
          <Link to='sasi-section' smooth={true} duration={500} className='cursor-pointer py-2 md:py-0'>
            Sasi
          </Link>
          <Link to='contact-section' smooth={true} duration={500} className='cursor-pointer py-2 md:py-0'>
            Contact
          </Link>
        </div>
        <div className='flex items-center gap-5'>
          <button className='text-3xl md:text-4xl md:hidden ml-auto' onClick={toggleMenu}>
            ☰
          </button>
        </div>
      </div>
      {isOpen && (
        <div className='flex flex-col items-center bg-[#990000] text-white gap-2'>
          <Link to='about-section' smooth={true} duration={500} className='cursor-pointer py-2 md:py-0' onClick={toggleMenu}>
            About
          </Link>
          <Link to='gallery-section' smooth={true} duration={500} className='cursor-pointer py-2 md:py-0' onClick={toggleMenu}>
            Gallery
          </Link>
          <Link to='sasi-section' smooth={true} duration={500} className='cursor-pointer py-2 md:py-0' onClick={toggleMenu}>
            Sasi
          </Link>
          <Link to='contact-section' smooth={true} duration={500} className='cursor-pointer py-2 md:py-0' onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
