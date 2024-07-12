import React from 'react';
import Podcast from '../../asset/images/podcast-image.jpg'

const Podcasts = () => {
  const buttons = [
    {id: 1, name: "Spotify", link: "https://open.spotify.com/show/0SMK1uf9hjuq4NZryzPxYn"},
    {id: 2, name: "Anchor FM", link: "https://podcasters.spotify.com/pod/show/joshhiverse"},
    {id: 3, name: "Google Podcast", link: "https://joshiversejourneyofabuddingdatascientist.wordpress.com/"},
    {id: 4, name: "Apple Podcast", link: "https://player.fm/"},
    {id: 5, name: "Pocketcast", link: "https://pca.st/jzwuxrga"},
    {id: 6, name: "Radio Public", link: "https://www.podchaser.com/podcasts/how-to-data-joshiverse-journey-1654767?"},

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
                style={buttonStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => window.open(item.link)}
              >
                {item.name}
              </button>
            </div>
          ))
        }
            
      </div>
    </div>
    
    
  );
};

export default Podcasts;