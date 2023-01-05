import './Footer.css';
import { useState } from 'react';
import Music from '../Background-song/Music';
import start from '../../img/start.png';
import scheduler from '../../img/scheduler.png';


function Footer({selectedMessage}) {
  
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
                <img alt='windows-logo' src={start}/>
                <b>Start</b>
        </button>
        <div className="vl"></div>
        <div className='tasks'>
          {selectedMessage?.map((d) => <div className='task-item' key={d.name}><div style={{ backgroundImage: `url(${d.img})` }} className='toolbar-icon'></div>{d.name} </div>)}
        </div>
        <div className='icons-menu'>
            <Music/>
            <img className='taskbar-calendar' alt='windows-calendar' src={scheduler}/>
            <time className='taskbar-time'>{time}</time> 
        </div>
    </div>
  );
}

export default Footer;
