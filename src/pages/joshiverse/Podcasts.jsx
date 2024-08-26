import React from 'react';
import Podcast from '../../asset/images/podcast-image.jpg'
import Form from './Form'
import SpotifyIcon from '../../asset/logo/spotify.svg';
import Anchor from '../../asset/logo/anchor.svg';
import Pocket from '../../asset/logo/pocket.png';
import Radio from '../../asset/logo/radio.png';


const Podcasts = () => {
  const buttons = [
    {id: 1, name: "Spotify", link: "https://open.spotify.com/show/0SMK1uf9hjuq4NZryzPxYn", icon: SpotifyIcon },
    {id: 2, name: "Anchor FM", link: "https://podcasters.spotify.com/pod/show/joshhiverse", icon: Anchor},
    {id: 3, name: "Pocketcast", link: "https://pca.st/jzwuxrga", icon: Pocket},
    {id: 4, name: "Radio Public", link: "https://www.podchaser.com/podcasts/how-to-data-joshiverse-journey-1654767?", icon: Radio},

  ]
  const buttonStyle = {
    padding: '10px 20px',
    margin: '10px',
    fontSize: '16px',
    backgroundColor: '#990000',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, font-size 0.3s ease'
    
  };

  const handleMouseEnter = (event) => {
    event.target.style.transform = 'scale(1.1)';
    event.target.style.fontSize = '18px';
  };

  const handleMouseLeave = (event) => {
    event.target.style.transform = 'scale(1)';
    event.target.style.fontSize = '16px';
  };

  return (
    <div>
      <div className='block lg:flex items-center justify-center gap-40 pt-10 lg:pt-40 px-3 '>
        <div className='flex flex-col items-center lg:w-2/4  mb-10'>
          <p className='text-[#990000] text-5xl mb-10'>My Podcasts</p>
          <div className='flex flex-col items-center justify-center gap-6  '>
            <img className='' src={Podcast} alt='podcast'/>
            <p className='text-[#990000] text-3xl'>Click on a button to hear from me on any of my platforms</p>
          </div>
        </div>
        
        <div className='flex flex-col items-center  justify-center gap-5'>
          {
            buttons.map(item => (
              <div key={item.id} className=''>
              
                <button
                  className='flex items-center justify-center gap-5 w-60'
                  style={buttonStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => window.open(item.link)}
                >
                <img className='w-14' src={item.icon} alt=''/>
                  {item.name}
                </button>
              </div>
            ))
          }
              
        </div>
      </div>
      <div>
        <Form/>
      </div>
    </div>
    
    
    
  );
};

export default Podcasts;