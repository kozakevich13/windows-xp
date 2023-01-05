import './Notepad.css';


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
        <textarea className='text-area-notepad'>How Strong Are Cats? </textarea>
        <div className='scroll'>
          <div className='scroll-btn'>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notepad;
