import './Notepad.css';
import { useState } from 'react';


function Notepad() {
  


  return (
    <div className='main-container-notepad'>
      <div className='notepad-header'>
        <div className='btn-notepad'>
            File
        </div>
        <div className='btn-notepad'>
            Edit
        </div>
        <div className='btn-notepad'>
            Search
        </div>
        <div className='btn-notepad'>
            Help
        </div>
      </div>
      <div className='working-area-notepad'>
        <textarea className='text-area'>At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.</textarea>
        <div className='scroll'>
          <div className='scroll-btn'>
            <div className='arrow-btn-top'></div>
          </div>
          {/* <div className='scroll-btn scroll-bottom'>
            <div className='arrow-btn-bottom'></div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Notepad;
