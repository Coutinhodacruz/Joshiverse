import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sasilogo from '../../asset/logo/sasi-icon.png';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import PartnerModal from '../../component/sasi/PartnerModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
      <div className="text-black">
        <div className="flex justify-between items-center p-4">
          <img className="w-24 ml-4 md:ml-16" src={Sasilogo} alt="SASI Logo" />
          <div className="hidden md:flex space-x-6 lg:space-x-14 text-lg font-semibold font-sans mr-4 lg:mr-16" style={{ fontWeight: 'bold', fontSize: '22px', fontFamily: 'initial' }}>
            <Link to="/#home" className="cursor-pointer hover:text-[#e32c2c]">Home</Link>
            <Link to="/#about" className="cursor-pointer hover:text-[#e32c2c]">About</Link>
            <Link to="/#event" className="cursor-pointer hover:text-[#e32c2c]">Event</Link>
            <Link to="/#contact" className="cursor-pointer hover:text-[#e32c2c]">Contact</Link>
            <button
                className="bg-[#e32c2c] text-white font-bold hover:bg-[#e25151] hover:text-white"
                style={{ width: '160px', height: '40px', fontSize: '90%', whiteSpace: 'nowrap', borderRadius: '3px' }}
                onClick={openModal}
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
            <div className="md:hidden bg-white text-black absolute top-16 left-0 right-0 z-50">
              <Link to="/#home" className="block px-4 py-2 hover:bg-gray-200">Home</Link>
              <Link to="/#about" className="block px-4 py-2 hover:bg-gray-200">About</Link>
              <Link to="/#event" className="block px-4 py-2 hover:bg-gray-200">Event</Link>
              <Link to="/#contact" className="block px-4 py-2 hover:bg-gray-200">Contact</Link>
            </div>
        )}
        <PartnerModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
  );
};

export default Navbar;
