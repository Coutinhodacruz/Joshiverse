import React from 'react'

const Video = () => {
  return (
    <div>
        <div className='flex flex-col items-center pt-20 relative'>
            <div className='bg-[#ce9494] w-[95%] h-[300px] relative'>
                {/* Empty pink box */}
            </div>
            <div className='absolute top-[170px] flex items-center lg:left-[140px]'>
                <div className=' flex flex-col items-start '>
                    <img
                    style={{
                        transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d"
                    }}
                    className='h-[400px] w-[448px]  object-cover group-hover:overlay-dark '
                    src={Sasi}
                    alt={`Sasi ${num}.0`}
                    />
                    <p className=' text-3xl font-bold text-[#990000]'>Sasi {num}.0</p>
                    <p className=' text-[#d45e5e]'>
                    Lorem ipsum dolor sit amet consectetur adipiscing
                    elit seddo eiusmod tempor incididunt ut labore et.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Video
