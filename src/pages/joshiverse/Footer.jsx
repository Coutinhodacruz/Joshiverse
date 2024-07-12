import React from 'react'

const Footer = () => {
    const date = new Date();
    var d = date.getFullYear();
  return (
    <div className='bg-[#990000] flex text-white items-center justify-center py-6 text-xl'>
      <p>© Copyright - Joshiverse - {d}</p>
    </div>
  )
}

export default Footer
