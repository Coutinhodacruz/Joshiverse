import React, { useState } from 'react';
import Sasi from '../../asset/images/image.png';
import Podcast from '../../asset/images/podcast.avif';
import Youtube from '../../asset/images/youtube-logo.avif';
import { useNavigate } from 'react-router-dom';
import { BsFillPlayFill } from "react-icons/bs";
import { AiFillAudio } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { LuArrowUpRight } from "react-icons/lu";


const Gallery = () => {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);

  const navigateItem = (item) => {
    if(item.id === 1){
      navigate('/sasi');
    }
    if(item.id === 2){
      navigate('/podcasts');
    }
    if(item.id === 3){
      navigate('/youtube');
    }
  };

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const galleryItems = [
    { id: 1, image: Sasi, title: 'Sasi', icon: <LuArrowUpRight className="text-white text-5xl" /> },
    { id: 2, image: Podcast, title: 'Audio Podcast', icon: <AiFillAudio className="text-white text-5xl" /> },
    { id: 3, image: Youtube, title: 'Youtube Videos', icon: <AiFillYoutube className="text-white text-5xl" /> },
  ];

  return (
    <div className='flex flex-col items-center pt-20 relative bg-[#edeef6]'>
      <div className='top-[170px] items-center gap-8 lg:left-[50px] md:grid md:grid-cols-3'>
        {galleryItems.map(item => (
          <div
            key={item.id}
            className='flex flex-col items-start gap-3 mb-20 px-3 lg:px-0'
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigateItem(item)}
          >
            <div className="relative">
              <img
                className='h-[400px] w-[448px] object-cover group-hover:overlay-dark hover:cursor-pointer'
                src={item.image}
                alt=""
              />
              {hoveredItem === item.id && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
                  {item.icon}
                </div>
              )}
            </div>
            <p className='text-3xl font-bold text-[#990000]'>{item.title}</p>
            <p className='text-[#d45e5e] w-80'>
              Lorem ipsum dolor sit amet consectetur adipiscing
              elit seddo eiusmod tempor incididunt ut labore et.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
