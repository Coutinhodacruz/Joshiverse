import React, {useRef, useState} from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import kenya from "../../asset/images/kenyapoverty.jpg";
import event from "../../asset/images/event1.jpg"
import event2 from "../../asset/images/event2.jpg"
import {FaChevronDown, FaExpand, FaPlay, FaTimes, FaVolumeUp} from "react-icons/fa";
import Navbar from "./Navbar";
import somalia from "../../asset/images/somalia.jpg";
import Slider from "react-slick";
import {GrNext, GrPrevious} from "react-icons/gr";
import ReactPlayer from "react-player";
import {IoIosPause} from "react-icons/io";
import style from "../../style/sasi/Styles.module.css";


const images = [
   kenya,
    event,
    event2
    // Add more image imports as needed
];

const PercilOutreach = () => {

    const [isExpanded, setExpanded] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isPlaying, setPlaying] = useState(false);
    const [isFullscreen, setFullscreen] = useState(false);
    const [volume, setVolume] = useState(0.8);
    const [played, setPlayed] = useState(0);
    const [duration, setDuration] = useState(0);

    const playerRef = useRef(null);

    const toggleExpand = () => {
        setExpanded(!isExpanded);
    };

    const openModal = (image, index) => {
        setSelectedImage(image);
        setCurrentImageIndex(index);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedImage(null);
    };

    const handleNext = () => {
        const nextIndex = (currentImageIndex + 1) % images.length;
        setSelectedImage(images[nextIndex]);
        setCurrentImageIndex(nextIndex);
    };

    const handlePrev = () => {
        const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
        setSelectedImage(images[prevIndex]);
        setCurrentImageIndex(prevIndex);
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
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 font-serif">Pacelli school for the blind </h1>
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
                                src={kenya}
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
                        <div key={index} onClick={() => openModal(image, index)} className="px-2">
                            <img src={image} alt={`Slide ${index}`} className="cursor-pointer w-full h-auto max-w-[300px]" />
                        </div>
                    ))}
                </Slider>
            </section>

            {isModalOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50"
                    onClick={closeModal} // Close modal when clicking outside the image
                >
                    <div
                        className="relative flex items-center justify-center"
                        style={{ width: '70%', height: '60%' }}
                        onClick={(e) => e.stopPropagation()} // Prevent the modal from closing when clicking inside this div
                    >
                        <button onClick={closeModal} className="absolute top-0 right-0 mt-4 mr-4 text-white z-10">
                            <FaTimes size={24} />
                        </button>
                        <img src={selectedImage} alt="Selected" className="rounded-lg" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                        <button onClick={handlePrev} className="absolute left-0 ml-4 text-white z-10">
                            <GrPrevious size={24} />
                        </button>
                        <button onClick={handleNext} className="absolute right-0 mr-4 text-white z-10">
                            <GrNext size={24} />
                        </button>
                    </div>
                </div>
            )}

            {/* YouTube Video Player with Custom Controls */}
            <section className="w-full p-8">
                <h2 className="text-2xl font-bold mb-4">Pacelli outreach</h2>
                <div style={{ width: '100%', maxWidth: isFullscreen ? '100%' : '782px', margin: '0 auto', position: 'relative' }}>
                    <ReactPlayer
                        ref={playerRef}
                        url="https://www.youtube.com/watch?v=ay5silTP-n4&list=PLAxrjribyq1fUXs3-sGU6LC-wTQaZJ-Lr"
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
                                className={style.reactPlayerProgress} /* Add this class */
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
                                className={`${style.reactPlayerVolume} mx-2`} /* Add this class */
                            />
                            <button onClick={toggleFullscreen} aria-label={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'} title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}>
                                <FaExpand size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PercilOutreach;






