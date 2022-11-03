import './Footer.css';
import { useState } from 'react';





function Footer() {

  
const [time, setTime] = useState('')
function say() {
    alert('hi')
}
setInterval(getActualtime, 1000)

function getActualtime() {
  let actualHour = new Date().getHours() 
  let actualMinute = new Date().getMinutes() 
  setTime(`${actualHour}:${actualMinute}`)
}

  return (
    <div className='footer'>
        <button  className='btn-start' onClick={()=>{say()}}>
                <img alt='windows-logo' src='https://98.js.org/images/start.png'/>
                <b>Start</b>
        </button>
        <div className="vl"></div>
        <div className='tasks'>
        </div>
        <div className='icons-menu'>
            <img className='taskbar-icons' alt='windows-volume' src='https://98.js.org/images/icons/audio-okay-16x16.png'/>
            <img className='taskbar-icons' alt='windows-calendar' src='https://98.js.org/images/icons/task-scheduler-16x16.png'/>
            <time className='taskbar-time'>{time}</time> 
        </div>
    </div>
  );
}

export default Footer;
