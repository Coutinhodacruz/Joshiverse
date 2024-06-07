import React from 'react';
import { FaCheckSquare } from 'react-icons/fa';
import Image from '../../asset/image/images/image.png';

const About = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center pt-20 lg:pt-10 gap-10 lg:gap-5 px-4'>
      <div className='text-[#d45e5e] flex flex-col gap-y-5 max-w-lg'>
        <p className='text-sm font-bold'>ABOUT US</p>
        <div className='flex flex-col gap-4'>
          <p className='text-[#990000] text-4xl font-bold'>Mission</p>
          <p className='text-pretty'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <p className='flex gap-3 items-center'>
            <FaCheckSquare color='#d45e5e' />
            Excepteur sint occaecat cupidatat non proident
          </p>
          <p className='flex gap-3 items-center'>
            <FaCheckSquare color='#d45e5e' />
            Excepteur sint occaecat cupidatat non proident
          </p>
        </div>
        <div className='flex flex-col gap-4'>
          <p className='text-[#990000] text-4xl font-bold'>Vision</p>
          <p className='text-pretty'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <p className='flex gap-3 items-center'>
            <FaCheckSquare color='#d45e5e' />
            Excepteur sint occaecat cupidatat non proident
          </p>
          <p className='flex gap-3 items-center'>
            <FaCheckSquare color='#d45e5e' />
            Excepteur sint occaecat cupidatat non proident
          </p>
        </div>
      </div>
      <div className='lg:pt-0 pt-10 w-full lg:w-auto'>
        <img className='w-full lg:w-[385px] h-auto' src={Image} alt='Our mission' />
      </div>
    </div>
  );
};

export default About;
