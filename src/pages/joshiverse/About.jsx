import React from 'react';
import { FaCheckSquare } from 'react-icons/fa';
import Image from '../../asset/images/image.png';

const About = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center pt-20 lg:pt-40 gap-10 lg:gap-5 px-4'>
      <div className='text-[#d45e5e] flex flex-col gap-y-5 max-w-lg'>
        <p className='text-sm font-bold'>ABOUT US</p>
        <div className='flex flex-col gap-4'>
          <p className='text-[#990000] text-4xl font-bold'>Mission</p>
          <p className='text-pretty'>
            Our mission is to:
          </p>
          <p className='flex gap-3 items-center'>
            <FaCheckSquare color='#d45e5e' />
            Empower passionate learners, enable them to grow professionally
            and build leadership competence.          </p>
          <p className='flex gap-3 items-center'>
            <FaCheckSquare color='#d45e5e' />
            Excepteur sint occaecat cupidatat non proident
          </p>
        </div>
        <div className='flex flex-col gap-4'>
          <p className='text-[#990000] text-4xl font-bold'>Vision</p>
          <p className='text-pretty'>
            Our visions are to be:
          </p>
          <p className='flex gap-3 items-center'>
            <FaCheckSquare color='#d45e5e' />
            Enablers of continuous decentralized learning without barriers
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
