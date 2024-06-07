import React from 'react';
import Sasilogo from '../../asset/image/logo/sasi-icon.png';
import HeroPage from './HeroPage';

const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between p-4'>
        <img className='w-24 ml-20 mt-3' src={Sasilogo} alt='sasi Logo' />
        <div className='flex space-x-14 text-lg font-semibold font-sans mt-3 text-white'  style={{ fontWeight: 'bold', marginRight: '15%', fontSize: '20px' }}>
         <p className='cursor-pointer hover:text-[#F8B864]'>Home</p>
          <p className='cursor-pointer hover:text-[#F8B864]'>About</p>
          <p className='cursor-pointer hover:text-[#F8B864]'>Event</p>
          <p className='cursor-pointer hover:text-[#F8B864]'>Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
