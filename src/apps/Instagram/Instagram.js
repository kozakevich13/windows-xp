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
        setFeed(data.data)
      });
  }, []);

  console.log(feed)

 

  

  
  return (
    <div className='main-container-app'>
      <div className='main-container-inst'>
        
        <div className='header-conteinet-inst'>
          <p className='user-login'>vitaliy_kozakevich</p>
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
                    <div className='user-number-followers user-box-numbers-followers'>
                      <p className='numbers-stats'>1m</p>
                      <p className='stat-title'>followers</p>
                    </div>
                    <div className='user-number-following user-box-numbers'>
                      <p className='numbers-stats'>0</p>
                      <p className='stat-title'>following</p>
                    </div>
                </div>
                <div className='block-following'>
                  <a href="https://www.instagram.com/vitaliy_kozakevich/" className='btn-following'><p className='following'>Following</p></a>
                </div>
            </div>
          </div>

          <div className='more-user-info'>
            <h4 className='user-name'>Vitaliy Kozakevich</h4>
            <p className='user-description'>🐱‍👤I’m a web developer. 🐱‍🏍I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript. 🐱‍💻</p>
            <a  className='user-link' href='https://www.linkedin.com/in/vitaliy-kozakevich-492623237/'>Linkedin.com</a>
          </div>
        </div>

        <div className='instagram-feed-container'>
            {feed ? (
              <ul className='instagram-feed'>
                {feed.map((item) => (
                  <li className='post-background' key={item.id}>
                    <img className='post-img' src={item.media_url}></img>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Loading...</p>
            )}
        </div>
      </div>
      
     
    
    </div>
  );
}

export default Instagram;
