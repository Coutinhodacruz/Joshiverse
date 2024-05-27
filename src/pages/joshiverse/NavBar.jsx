import React from 'react'
import JoshiverseLogo from '../../asset/image/logo/joshiverse.81bbc5229f044a87bd45.jpeg'

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
