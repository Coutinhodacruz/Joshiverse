import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full max-w-screen-md mx-auto">
      <div className="relative overflow-hidden h-64 md:h-80">
        <img
          src={images[currentIndex]}
          alt="slider"
          className="w-full h-full object-cover transition-transform duration-500"
        />
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 left-4 text-white cursor-pointer" onClick={prevSlide}>
        <FaChevronLeft size={32} />
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-4 text-white cursor-pointer" onClick={nextSlide}>
        <FaChevronRight size={32} />
      </div>
    </div>
  );
};

export default Slider;
