import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sasilogo from '../../asset/image/logo/sasi-icon.png';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false); // Close the menu when an item is clicked
  };

  return (
    <div className="text-black">
      <div className="flex justify-between items-center p-4">
        <img className="w-24 ml-16" src={Sasilogo} alt="SASI Logo" />
        <div className="hidden md:flex space-x-14 text-lg font-semibold font-sans" style={{ fontWeight: 'bold', marginRight: '10%', fontSize: '20px' }}>
          <div onClick={() => handleNavigation('/home')} className="cursor-pointer hover:text-[#e32c2c]">Home</div>
          <div onClick={() => handleNavigation('/about')} className="cursor-pointer hover:text-[#e32c2c]">About</div>
          <div onClick={() => handleNavigation('/event')} className="cursor-pointer hover:text-[#e32c2c]">Event</div>
          <div onClick={() => handleNavigation('/contact')} className="cursor-pointer hover:text-[#e32c2c]">Contact</div>
          <button
            className="bg-[#e32c2c] text-white font-bold hover:bg-[#e25151] hover:text-white"
            style={{ width: '160px', height: '40px', fontSize: '90%', whiteSpace: 'nowrap', borderRadius: '3px' }}
            onClick={() => handleNavigation('/partner')}
          >
            Become a partner
          </button>
        </div>
        <div className="md:hidden mr-4">
          <button onClick={toggleMenu}>
            {isOpen ? <XIcon className="w-8 h-8 text-black" /> : <MenuIcon className="w-8 h-8 text-black" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black text-white">
          <div onClick={() => handleNavigation('/home')} className="block px-4 py-2 hover:text-[#e32c2c]">Home</div>
          <div onClick={() => handleNavigation('/about')} className="block px-4 py-2 hover:text-[#e32c2c]">About</div>
          <div onClick={() => handleNavigation('/event')} className="block px-4 py-2 hover:text-[#e32c2c]">Event</div>
          <div onClick={() => handleNavigation('/contact')} className="block px-4 py-2 hover:text-[#e32c2c]">Contact</div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
