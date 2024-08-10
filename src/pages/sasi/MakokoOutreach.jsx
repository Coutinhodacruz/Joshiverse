import React, { useState, useRef } from 'react';
import Slider from "react-slick";
import ReactPlayer from 'react-player';
import somalia from "../../asset/images/somalia.jpg";
import { FaTimes, FaExpand, FaVolumeUp, FaPlay } from "react-icons/fa";
import { IoIosPause } from "react-icons/io";
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
  const [isPlaying, setPlaying] = useState(false);
  const [isFullscreen, setFullscreen] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);

  const playerRef = useRef(null);

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

  const toggleFullscreen = () => {
    setFullscreen(!isFullscreen);
  };

  const handleProgress = (state) => {
    setPlayed(state.played);
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
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

      {/* YouTube Video Player with Custom Controls */}
      <section className="w-full p-8">
        <h2 className="text-2xl font-bold mb-4">Makoko Outreach</h2>
        <div style={{ width: '100%', maxWidth: isFullscreen ? '100%' : '782px', margin: '0 auto', position: 'relative' }}>
          <ReactPlayer
              ref={playerRef}
              url="https://www.youtube.com/watch?v=OQGpKVaV6Ag"
              playing={isPlaying}
              volume={volume}
              width="100%"
              height={isFullscreen ? '100vh' : '439.875px'}
              onProgress={handleProgress}
              onDuration={handleDuration}
              controls={false}
          />
          <div className="absolute bottom-0 left-0 w-full p-4 flex items-center text-white bg-black bg-opacity-50">
            <button onClick={() => setPlaying(!isPlaying)} aria-label={isPlaying ? 'Pause' : 'Play'} title={isPlaying ? 'Pause' : 'Play'}>
              {isPlaying ? <IoIosPause size={18} /> : <FaPlay size={18} />}
            </button>
            {/* Progress Bar and Timer */}
            <div className="flex-1 flex flex-col mx-4">
              <div className="flex justify-between text-sm mb-1">
                <span>{formatTime(played * duration)}</span>
                <span>{formatTime(duration)}</span>
              </div>
              <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={played}
                  onChange={(e) => playerRef.current.seekTo(parseFloat(e.target.value))}
                  aria-label="Progress Slider"
                  className="react-player-progress" /* Add this class */
              />
            </div>
            <div className="flex items-center">
              <FaVolumeUp />
              <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  aria-label="Volume Slider"
                  className="react-player-volume" /* Add this class */
                  style={{ margin: '0 10px' }}
              />
              <button onClick={toggleFullscreen} aria-label="Fullscreen" title="Fullscreen">
                <FaExpand />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional CSS for styling */}
      <style jsx>{`
        /* Slim red progress bar for the video */
        .react-player-progress {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 3px; /* Make the bar slim */
          background: #444; /* Background color when not played */
          outline: none;
        }

        .react-player-progress::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 0;
          height: 0;
          background: red; /* Red color for the progress */
        }

        .react-player-progress::-moz-range-thumb {
          width: 0;
          height: 0;
          background: red; /* Red color for the progress */
        }

        /* Slim white progress bar for the volume */
        .react-player-volume {
          -webkit-appearance: none;
          appearance: none;
          width: 100px; /* Adjust the width as needed */
          height: 3px; /* Make the bar slim */
          background: #444; /* Background color when not played */
          outline: none;
        }

        .react-player-volume::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 0;
          height: 0;
          background: white; /* White color for the volume */
        }

        .react-player-volume::-moz-range-thumb {
          width: 0;
          height: 0;
          background: white; /* White color for the volume */
        }
      `}</style>
    </>
  );
};

export default MakokoOutreach;
