import React, { useState } from 'react';
import Slider from "react-slick";
import somalia from "../../asset/images/somalia.jpg";
import { FaTimes } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import trust from "../../asset/images/enough.png";
import Navbar from "./Navbar";

const images = [
  somalia,
  trust,
  // Add more image imports as needed
];

const MakokoOutreach = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleExpand = () => {
    setExpanded(!isExpanded);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display 3 images at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // 2 seconds
  };

  return (
      <>
        <Navbar />
        <section className="bg-white mb-4 flex flex-col items-center md:flex-row md:items-center min-h-screen">
          <div className="flex flex-col w-full md:w-1/2 p-8 md:p-20 order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 font-serif">Makoko Outreach</h1>
            <p className="px-5 pb-6 text-lg leading-7 text-[#777777]">
              SASI (Share a Smile Initiative) is an expression of Joshiverse, that leverages the goodwill
              <button
                  className="text-[#e32c2c] font-bold py-2 px-4 inline ml-2"
                  aria-label="Expand"
                  title="Expand"
                  onClick={toggleExpand}
              >
                {isExpanded ? "Collapse" : "Expand"}
              </button>
              <span className={`transition-opacity duration-500 ${isExpanded ? 'opacity-100 blur-none' : 'opacity-50 blur-sm'}`}>
              <br />
              of our community, partners, and supporters, channeling their generosity towards enabling the
              disadvantaged to access quality education, encouraging them to grow holistically, and empowering
              them to lead!
              We strive to provide support in emergencies, address poverty, and protect children from
              abuse and exploitation. Our mission is to ensure that every child has the opportunity
              to reach their full potential.
            </span>
            </p>
            <div className={`flex flex-col md:flex-row transition-all duration-500 ${isExpanded ? 'mt-6' : ''}`}>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 h-auto md:h-full">
            <a href="/donate/enough/" id="ctaclickableimage">
              <div className="w-full sm:w-[70%] md:w-[80%] lg:w-[90%] h-auto md:h-full">
                <img
                    src={somalia}
                    alt="Trust"
                    className="w-full h-full object-cover"
                />
              </div>
            </a>
          </div>
        </section>

        <section className="w-full p-8">
          <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index} onClick={() => openModal(image)} className="px-2">
                  <img src={image} alt={`Slide ${index}`} className="cursor-pointer w-full h-auto max-w-[300px]" />
                </div>
            ))}
          </Slider>
        </section>

        {isModalOpen && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
              <div className="relative flex items-center justify-center" style={{ width: '70%', height: '60%' }}>
                <button onClick={closeModal} className="absolute top-0 right-0 mt-4 mr-4 text-white z-10">
                  <FaTimes size={24} />
                </button>
                <img src={selectedImage} alt="Selected" className="rounded-lg" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </div>
            </div>
        )}
      </>
  );
};

export default MakokoOutreach;
