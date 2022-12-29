import './Word.css';
import i_new from '../../img/word/New.bmp'
import i_open from '../../img/word/Open.bmp'
import i_save from '../../img/word/save.bmp'
import i_print from '../../img/word/print.bmp'
import i_preview from '../../img/word/preview.bmp'
import i_spellcheck from '../../img/word/spellcheck.bmp'
import i_cut from '../../img/word/cut.bmp'
import i_copy from '../../img/word/copy.bmp'
import i_paste from '../../img/word/paste.bmp'
import i_style from '../../img/word/style.bmp'
import i_undo from '../../img/word/undo.bmp'
import i_redo from '../../img/word/redo.bmp'









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
      <div className='toolbar'>
        <div className='toolbar-block-left'>
          <div  style={{ backgroundImage: `url(${i_new})` }} className='toolbar-item'></div>
          <div  style={{ backgroundImage: `url(${i_open})` }} className='toolbar-item'></div>
          <div  style={{ backgroundImage: `url(${i_save})` }} className='toolbar-item'></div>
          <div class="vl-toolbar"></div>
          <div class="vl-toolbar-white"></div>
          <div  style={{ backgroundImage: `url(${i_print})` }} className='toolbar-item'></div>
          <div  style={{ backgroundImage: `url(${i_preview})` }} className='toolbar-item'></div>
          <div  style={{ backgroundImage: `url(${i_spellcheck})` }} className='toolbar-item'></div>
          <div class="vl-toolbar"></div>
          <div class="vl-toolbar-white"></div>
          <div  style={{ backgroundImage: `url(${i_cut})` }} className='toolbar-item'></div>
          <div  style={{ backgroundImage: `url(${i_copy})` }} className='toolbar-item'></div>
          <div  style={{ backgroundImage: `url(${i_paste})` }} className='toolbar-item'></div>
          <div  style={{ backgroundImage: `url(${i_style})` }} className='toolbar-item'></div>
          <div class="vl-toolbar"></div>
          <div class="vl-toolbar-white"></div>
          <div  style={{ backgroundImage: `url(${i_undo})` }} className='toolbar-item'></div>
          <div  style={{ backgroundImage: `url(${i_redo})` }} className='toolbar-item'></div>
        </div>
        <div className='toolbar-block-right'>
        <select className='default-paragraph-font'> 
          <option>Heading 1</option>
          <option>Heading 2</option>
          <option>Heading 3</option>
          <option>Normal</option>
          <option>Default Paragraph Font</option>
        </select>
        <select className='fontName'>
          <option>Arial</option>
          <option>Georgia</option>
          <option>Times New Roman</option>
          <option>Arial Black</option>
          <option>Comic Sans MS</option>

        </select>
        <select>
          <option>Пункт 1</option>
          <option>Пункт 2</option>
        </select>
        </div>
  



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
