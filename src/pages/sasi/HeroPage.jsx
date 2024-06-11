import React, { useState } from "react";
import { ArrowRightIcon } from '@heroicons/react/outline';
import Navbar from "./Navbar";
import trust from "../../asset/image/enough.png";
import Modal from "../../component/sasi/Modal.jsx";

const HeroPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <section className="bg-white mb-4 flex flex-col items-center md:flex-row md:items-center min-h-screen">
        <div className="flex flex-col w-full md:w-1/2 p-8 md:p-20 order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Say ENOUGH to child hunger</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Join us to ensure every child has enough food to thrive.
          </p>
          <div className="flex flex-col md:flex-row">
            <button
              className="bg-[#e32c2c] text-white hover:bg-[#e25151] font-bold py-2 px-4 rounded mb-4 md:mb-0 md:mr-4"
              aria-label="Donate now"
              title="Donate now"
              onClick={() => setModalOpen(true)}
            >
              Donate now
            </button>
            <button
              className="border-2 border-[#e32c2c] text-[#e32c2c] font-bold py-2 px-4 rounded flex items-center"
              aria-label="Find out more"
              title="Find out more"
              onClick={() => window.location.href = '/campaign/enough/'}
            >
              Find out more
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2 h-auto md:h-full">
          <a href="/donate/enough/" id="ctaclickableimage">
            <div className="h-auto md:h-full" style={{ height: '650px' }}>
              <img 
                src={trust} 
                alt="Trust" 
                className="w-full h-full object-cover" 
              />
            </div>
          </a>
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      </section>
    </div>
  );
};

export default HeroPage;
