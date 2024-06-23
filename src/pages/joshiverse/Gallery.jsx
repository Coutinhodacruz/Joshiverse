import React from 'react'
import Sasi from '../../asset/image/images/image.png'
import { useNavigate } from 'react-router-dom'

const Gallery = () => {
  const navigate = useNavigate()

  const navigateToSasi = () => {
    navigate('/sasi')
  }
  return (
    <div className=' flex flex-col items-center pt-20 relative bg-[#edeef6]'>
      
      <div className=' top-[170px]  items-center  gap-8 lg:left-[50px] md:grid md:grid-cols-3'>
          <div className=' flex flex-col items-start gap-3 mb-20 px-3 lg:px-0  ' onClick={navigateToSasi}>
            <img
              style={{
                transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d"
              }}
              className='h-[400px] w-[448px]  object-cover group-hover:overlay-dark  hover:cursor-pointer'
              src={Sasi}
              alt=""
            />
            <p className=' text-3xl font-bold text-[#990000]'>Sasi</p>
            <p className=' text-[#d45e5e] w-80'>
            Lorem ipsum dolor sit amet consectetur adipiscing
              elit seddo eiusmod tempor incididunt ut labore et.
            </p>
          </div>
          <div className=' flex flex-col items-start gap-3 mb-20 px-3 lg:px-0  '>
            <img
              style={{
                transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d"
              }}
              className='h-[400px] w-[448px]  object-cover group-hover:overlay-dark  hover:cursor-pointer'
              src={Sasi}
              alt=""
            />
            <p className=' text-3xl font-bold text-[#990000]'>Audio Podcast</p>
            <p className=' text-[#d45e5e] w-80'>
            Lorem ipsum dolor sit amet consectetur adipiscing
              elit seddo eiusmod tempor incididunt ut labore et.
            </p>
          </div>
          <div className=' flex flex-col items-start gap-3 mb-20 px-3 lg:px-0  '>
            <img
              style={{
                transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d"
              }}
              className='h-[400px] w-[448px]  object-cover group-hover:overlay-dark  hover:cursor-pointer'
              src={Sasi}
              alt=""
            />
            <p className=' text-3xl font-bold text-[#990000]'>Youtube Videos</p>
            <p className=' text-[#d45e5e] w-80'>
            Lorem ipsum dolor sit amet consectetur adipiscing
              elit seddo eiusmod tempor incididunt ut labore et.
            </p>
          </div>
      </div>
    </div>
  )
}

export default Gallery
