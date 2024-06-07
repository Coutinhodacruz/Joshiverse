import React from 'react';

const Statistics = () => {
  return (
    <div className='text-white flex flex-col lg:flex-row'>
      <div className='bg-[#ce9494] flex flex-col lg:flex-row sm:justify-around w-full lg:w-[1103px] p-4'>
        <div className='flex-1 text-center p-4'>
          <p className='text-3xl font-bold'>+100</p>
          <p className='text-sm'>CHILDREN IMPACTED</p>
        </div>
        <div className='flex-1 text-center p-4'>
          <p className='text-3xl font-bold'>+10</p>
          <p className=' text-sm'>VOLUNTEERS</p>
        </div>
        <div className='flex-1 text-center p-4'>
          <p className='text-3xl font-bold'>+4</p>
          <p className='text-sm'>MISSIONS DONE</p>
        </div>
      </div>
      <div className='bg-[#990000] hidden lg:flex lg:flex-col lg:justify-center lg:items-center lg:w-[817px] p-4'>
        <p className='text-2xl'>Lagos, Nigeria</p>
        <p className='text-lg'>A Joshiverse event</p>
      </div>
    </div>
  );
};

export default Statistics;
