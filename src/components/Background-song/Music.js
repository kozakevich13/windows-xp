import sound from '../../assets/sound.wav';
import React, { useState } from "react";
import Sound from "react-sound";
import './Music.css'



function Music() {

    const [SoundStatus, setSoundStatus] = useState(0);
    const [Condition, setCondition] = useState(true);

    const handleSoundPlay = () => {
        setCondition(!Condition);
        if (Condition) {
          setSoundStatus(Sound.status.PLAYING);
        } else {
          setSoundStatus(Sound.status.PAUSED);
        }
    };


  return (
    <div className='music'>
       <button  className='volume-icons' alt='windows-volume' src='https://98.js.org/images/icons/audio-okay-16x16.png' onClick={handleSoundPlay}></button>
      <Sound
        url={sound}
        autoLoad="true"
        playStatus={SoundStatus}
        playFromPosition={0}
        volume= {10}
      />
    </div>
  );
}

export default Music;
