import React from 'react'
import JoshiverseLogo from '../../asset/image/logo/joshiverse-icon.jpeg'

const NavBar = () => {
  return (
    <div>
      <img src={JoshiverseLogo} alt='Joshverse Logo'/>
      <div>
        <p>About</p>
        <p>Gallery</p>
        <p>Sasi</p>
        <p>Contact</p>

      </div>
    </div>
  )
}

export default NavBar
