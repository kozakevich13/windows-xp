import React, {useState} from 'react'
import './Resume.css';
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
import i_bold from '../../img/word/bold.bmp'
import i_italic from '../../img/word/italic.bmp'
import i_underline from '../../img/word/underline.bmp'
import i_left from '../../img/word/left.bmp'
import i_center from '../../img/word/center.bmp'
import i_right from '../../img/word/right.bmp'
import i_number from '../../img/word/number.bmp'
import i_bullet from '../../img/word/bullet.bmp'
import i_outdent from '../../img/word/inc-indent.bmp'
import i_indent from '../../img/word/indent.bmp'
import i_highlight from '../../img/word/highlight.bmp'
import i_fontcolor from '../../img/word/fontcolor.bmp'



function Resume() {
 
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
      <div className='toolbar-top'>
        <div className='toolbar-top-block-left'>
          <div  style={{ backgroundImage: `url(${i_new})` }} className='toolbar-item'></div>
          <div  style={{ backgroundImage: `url(${i_open})` }} className='toolbar-item'></div>
          <div  style={{ backgroundImage: `url(${i_save})` }} className='toolbar-item'></div>
          <div className="vl-toolbar"></div>
          <div className="vl-toolbar-white"></div>
          <div  style={{ backgroundImage: `url(${i_print})` }} className='toolbar-item'></div>
          <div  style={{ backgroundImage: `url(${i_preview})` }} className='toolbar-item'></div>
          <div  style={{ backgroundImage: `url(${i_spellcheck})` }} className='toolbar-item'></div>
          <div className="vl-toolbar"></div>
          <div className="vl-toolbar-white"></div>
          <div  style={{ backgroundImage: `url(${i_cut})` }} className='toolbar-item'></div>
          <div  style={{ backgroundImage: `url(${i_copy})` }} className='toolbar-item'></div>
          <div  style={{ backgroundImage: `url(${i_paste})` }} className='toolbar-item'></div>
          <div  style={{ backgroundImage: `url(${i_style})` }} className='toolbar-item'></div>
          <div className="vl-toolbar"></div>
          <div className="vl-toolbar-white"></div>
          <div  style={{ backgroundImage: `url(${i_undo})` }} className='toolbar-item'></div>
          <div  style={{ backgroundImage: `url(${i_redo})` }} className='toolbar-item'></div>
        </div>
        <div className='toolbar-top-block-right'>
        <select className='default-paragraph-font'> 
          <option>Heading 1</option>
          <option>Heading 2</option>
          <option>Heading 3</option>
          <option>Normal</option>
          <option selected>Default Paragraph Font</option>
        </select>
        <select className='fontName'>
          <option>Arial</option>
          <option>Georgia</option>
          <option>Times New Roman</option>
          <option>Arial Black</option>
          <option>Comic Sans MS</option>
        </select>
        <select>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option selected>12</option>
          <option>14</option>
          <option>16</option>
          <option>18</option>
          <option>20</option>
          <option>22</option>
          <option>24</option>
          <option>26</option>
          <option>28</option>
          <option>30</option>
          <option>32</option>
          <option>34</option>
          <option>36</option>
          <option>48</option>
          <option>72</option>
        </select>
        </div>
      </div>
      <div className='toolbar-bottom'>
        <div className='toolbar-bottom-block-left'>
          <div  style={{ backgroundImage: `url(${i_bold})` }} className='toolbar-item'></div>
          <div  style={{ backgroundImage: `url(${i_italic})` }} className='toolbar-item'></div>
          <div  style={{ backgroundImage: `url(${i_underline})` }} className='toolbar-item'></div>
          
          <div className="vl-toolbar"></div>
          <div className="vl-toolbar-white"></div>
          <div  style={{ backgroundImage: `url(${i_left})` }} className='toolbar-item'></div>
          <div  style={{ backgroundImage: `url(${i_center})` }} className='toolbar-item'></div>
          <div  style={{ backgroundImage: `url(${i_right})` }} className='toolbar-item'></div>
          <div className="vl-toolbar"></div>
          <div className="vl-toolbar-white"></div>
          <div  style={{ backgroundImage: `url(${i_number})` }} className='toolbar-item'></div>
          <div  style={{ backgroundImage: `url(${i_bullet})` }} className='toolbar-item'></div>
          <div  style={{ backgroundImage: `url(${i_indent})` }} className='toolbar-item'></div>
          <div  style={{ backgroundImage: `url(${i_outdent})` }} className='toolbar-item'></div>
          <div className="vl-toolbar"></div>
          <div className="vl-toolbar-white"></div>
          <div  style={{ backgroundImage: `url(${i_highlight})` }} className='toolbar-item'></div>
          <div  style={{ backgroundImage: `url(${i_fontcolor})` }} className='toolbar-item'></div>

        </div>
      </div>
      <div className='working-area-word'>
        <div className='text-area-word'>
          <iframe
            src="https://drive.google.com/file/d/1k7tycyZXUNuDQtP2Vnn5WFncFcr3yPHM/preview"
            width="500"
            height="575"
          >
          </iframe>
        </div>
        <div className='scroll'>
          <div className='scroll-btn'>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
