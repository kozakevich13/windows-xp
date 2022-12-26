import './Word.css';


function Word() {
  
  return (
    <div className='main-container-word'>
      <div className='word-header'>
        <div className='btn-word'>File</div>
        <div className='btn-word'>Edit</div>
        <div className='btn-word'>View</div>
        <div className='btn-word'>Insert</div>
        <div className='btn-word'>Format</div>
        <div className='btn-word'>Tools</div>
        <div className='btn-word'>Table</div>
        <div className='btn-word'>Window</div>
        <div className='btn-word'>Help</div>
      </div>
      <div className='working-area-word'>
        <textarea className='text-area'>its word</textarea>
        <div className='scroll'>
          <div className='scroll-btn'>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Word;
