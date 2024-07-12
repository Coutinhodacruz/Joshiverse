import React from 'react'
import { FaInstagram, FaLinkedin, FaYoutube, FaTelegram, FaTwitter } from 'react-icons/fa6'

const Socials = () => {
  return (
    <div className='flex flex-col items-center justify-center text-[#990000] gap-7 my-20'>
        <div className='flex flex-col gap-3 items-center justify-center'>
            <p className=' text-5xl'>Stay in touch</p>
            <p className=' text-2xl'>Follow me on</p>
        </div>
       
        <div className='flex items-center justify-center gap-5'>
          <a href='https://www.instagram.com/j_joshiverse'>
            <FaInstagram size={32}/>
          </a>
          <a href='https://www.linkedin.com/in/joshua-matthew-extreme/'>
            <FaLinkedin size={32}/>
          </a>
          <a href='https://www.youtube.com/@joshiverse'>
          <FaYoutube size={32}/>
          </a>
          <a href='https://t.me/joinchat/U-y5g-6qKPzsTbzW'>
          <FaTelegram size={32}/>
          </a>
          <a href='https://x.com/j_joshiverse'>
          <FaTwitter size={32}/>
          </a>
          
            
        </div>
    </div>
  )
}

export default Socials
