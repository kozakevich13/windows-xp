import { async } from 'q';
import { useState, useEffect } from 'react';
import './Instagram.css';
import user_avatar from '../../img/user_avatar.jpg'



function Instagram() {

  const [feed, setFeed] = useState()

  useEffect(() => {
    fetch(`https://v1.nocodeapi.com/betlin/instagram/gkseMhdAxftspXdz`)
    
      .then(response => response.json())
      .then(data => {
        setFeed(data)
      });
  }, []);

  console.log(feed)

 

  

  
  return (
    <div className='main-container-app'>
      <div className='main-container-inst'>
        
        <div className='header-conteinet-inst'>
          <p className='user-name'>vitaliy_kozakevich</p>
        </div>
        
        <div className='page-info-inst'>
          <div className='top-info-block'>
            <div className='user-box'>
                <img className='user-avatar' src={user_avatar}></img>
            </div>
            <div className='details-user'>
                <div className='user-statistic'>
                    <div className='user-number-photos user-box-numbers'>
                      <p className='numbers-stats'>6</p>
                      <p className='stat-title'>photos</p>
                    </div>
                    <div className='user-number-followers user-box-numbers'>
                      <p className='numbers-stats'>1m</p>
                      <p className='stat-title'>followers</p>
                    </div>
                    <div className='user-number-following user-box-numbers'>
                      <p className='numbers-stats'>0</p>
                      <p className='stat-title'>following</p>
                    </div>
                </div>
                <div className='block-following'>
                  <button className='btn-following'>following</button>
                </div>
            </div>
        
           
          </div>

        </div>
      </div>
      
     
    
    </div>
  );
}

export default Instagram;
