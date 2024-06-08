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
      <section className="hero bg-white mb-4 flex flex-col items-center md:flex-row md:items-center">
        <div className="hero__text flex flex-col w-full md:w-1/2 p-8 md:p-20 order-2 md:order-1">
        <h1 className="hero-title text-4xl md:text-5xl font-bold mb-4">Say ENOUGH to child hunger</h1>
          <p className="hero-subtitle text-lg md:text-xl text-gray-800 mb-8">
            Join us to ensure every child has enough food to thrive.
          </p>
          <div className="hero__buttons flex flex-col md:flex-row">
            <button
              className="button bg-[#c75300] text-white font-bold py-2 px-4 rounded mb-4 md:mb-0 md:mr-4"
              aria-label="Donate now"
              title="Donate now"
              onClick={() => setModalOpen(true)}
              // onClick={() => window.location.href = '/donate/enough/'}
            >
              Donate now
            </button>
            <button
              className="button button--secondary border-2 border-[#c75300] text-[#c75300] font-bold py-2 px-4 rounded flex items-center"
              aria-label="Find out more"
              title="Find out more"
              onClick={() => window.location.href = '/campaign/enough/'}
            >
              <ArrowRightIcon className="w-5 h-5 mr-2" />
              Find out more
            </button>
          </div>
        </div>
        <div className="hero__image w-full md:w-1/2 order-1 md:order-2">
          <a href="/donate/enough/" id="ctaclickableimage">
            <div className="image">
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











