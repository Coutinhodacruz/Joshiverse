import React, { useState } from "react";
import Navbar from "./Navbar";
import trust from "../../asset/image/logo/trust.jpg";
import Modal from "../../component/sasi/Modal.jsx";

const HeroPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <style>
        {`
          body, html {
            height: 100%;
            margin: 0;
            overflow: hidden;
          }
        `}
      </style>
      <div className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.5), 
            rgba(0, 0, 0, 0.5), 
            rgba(0, 0, 0, 0.5)
          ), url(${trust})`,
        }}>
        <Navbar />
        <div className="absolute mt-40 left-20 text-white">
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '35px' }}>
            WE NEED YOUR <span style={{ color: '#F8B864' }}>HELP</span>
          </h2>
          <h1 className="text-4xl font-bold mt-4" style={{ fontFamily: 'Roboto Slab, serif', fontSize: '60px' }}>
            For the new <span style={{ color: '#F8B864' }}>world</span>
          </h1>
          <p className="mt-4 text-lg">
            There are many variations of passages of Lorem Ipsum available,<br />
            but the majority have suffered alteration in some form.
          </p>
          <button className="mt-8 px-6 py-3 bg-[#F8B864] text-white font-bold rounded hover:bg-white hover:text-[#74706b]"
            style={{ borderRadius: '25px' }}
            onClick={() => setModalOpen(true)}>
            DONATE
          </button>
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </div>
  );
};

export default HeroPage;
