import sound from '../../assets/sound.wav';
import React, { useState } from "react";
import Sound from "react-sound";



function Music() {

    const [SoundStatus, setSoundStatus] = useState(0);
    const [Condition, setCondition] = useState(true);
    const [OnOff, setOnOff] = useState("Off");

    const handleSoundPlay = () => {
        setCondition(!Condition);
        if (Condition) {
          setSoundStatus(Sound.status.PLAYING);
          setOnOff("On");
        } else {
          setSoundStatus(Sound.status.PAUSED);
          setOnOff("Off");
        }
    };


  return (
    <div className='music'>
       <button onClick={handleSoundPlay}>Sound {OnOff}</button>
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
