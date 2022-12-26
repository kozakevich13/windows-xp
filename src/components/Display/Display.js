import './Display.css';
import notepad from '../../img/notepad.png'
import folder from '../../img/folder.png'
import myDocumentFolder from '../../img/my-documents-folder.png'
import React, { useState, useEffect } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
// import CloseIcon from "@material-ui/icons/Close";
import Notepad from '../../apps/Notepad/Notepad';
import closeIcon from '../../img/close-icon.png'
import hidewindow from '../../img/hidewindow.png'
import fullscreen from '../../img/fullscreen.png'
const ResponsiveGridLayout = WidthProvider(Responsive);


const initialWidgetsList = [
  { id: 1, name: "Untitled - Notepad", content: <Notepad/> },
  { id: 2, name: "My documents", content: "app My documents" },
  { id: 3, name: "Folder", content: "app Folder" }
];

const initialLayout = [
  { i: "1", x: 0, y: 0, w: 5, h: 2 },
  { i: "2", x: 5, y: 0, w: 3, h: 2 },
  { i: "3", x: 8, y: 0, w: 4, h: 2 }
];


function Display({setMessage}) {
  const [widget, setWidget] = useState([]);
  const [widgetsState, setWidgetsState] = useState({
    One: true,
    Two: true,
    Three: true
  });

  const [layout, setlayout] = useState([]);
  const [newCounter, setNewCounter] = useState(0);
  
  useEffect(()=>{
    onButtonClick(widget)
  },[widget])

  const addWidget = (item) => {
    setNewCounter(newCounter + 1);
    const addedLayout = initialLayout.find(
      (x) => Number(x.i) === Number(item.id)
    );
    setlayout(
      layout.concat({
        i: String(addedLayout.i),
        x: addedLayout.x,
        minW: 4,
        y: addedLayout.y,
        minH: 4,
        w: addedLayout.w,
        h: addedLayout.h
      })
    );
    setTimeout(()=>{
      setlayout(layout.concat({ i: String(addedLayout.i), x: addedLayout.x, y: addedLayout.y, w: addedLayout.w, h: addedLayout.h }))
    }, 2)
    setWidgetsState({ ...widgetsState, [item.name]: true });

  };

  const removeWidget = (item) => {
    const filteredLayout = layout.filter(
      (x) => Number(x.i) !== Number(item.id)
    );
    setlayout(filteredLayout);
    setWidgetsState({ ...widgetsState, [item.name]: false });
  };

  useEffect(() => {
    const newWidgets = initialWidgetsList.filter((x) =>
      widgetsState[x.name] === true ? x : null
    );

    setWidget(newWidgets);
  }, [widgetsState]);

  const onButtonClick=(changeValue)=>{
    setMessage(changeValue)
    }

    function say() {
      alert('hi')
  }

  const WidgetHeader = (item) => {
    return (
      <>
        <div className='windowHeader'>
          <div className='logoContainer'>
            <span className='appName'><img className='icon-titel' alt='icon' src={notepad}></img>{item.item.name}</span>
          </div>
          <div className='actionsContainer'>

            <button
              className='window-btn'
              type="button"
            >
              <img alt='window-icon' className='window-icon' src={hidewindow}></img>
            </button>

            <button
              className='window-btn'
              type="button"
              onClick={()=>{say()}}
            >
              <img alt='window-icon' className='window-icon' src={fullscreen}></img>
            </button>

            <button
              className='window-btn'
              type="button"
              onClick={() => removeWidget(item.item)}
            >
              <img alt='window-icon' className='window-icon' src={closeIcon}></img>
            </button>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className='main-container' >
        <div className='all-icons'>
          <div className='grid-icons'>
            <button
              className='icon'
              type="button"
              onClick={() => addWidget(initialWidgetsList[0])}
              style={{ backgroundImage: `url(${notepad})` }}
            />
            <p className='icons-name'>Notepad</p>
          </div>

          <div className='grid-icons'>
            <button
              className='icon'
              type="button"
              onClick={() => addWidget(initialWidgetsList[1])}
              style={{ backgroundImage: `url(${myDocumentFolder})` }}
            />
            <p className='icons-name'>My Documents</p>
          </div>


          <div className='grid-icons'>
              <button
                className='icon'
                type="button"
                onClick={() => addWidget(initialWidgetsList[2])}
                style={{ backgroundImage: `url(${folder})` }}
              />
             <p className='icons-name'>Folder</p>
          </div>
        </div>
       
      <ResponsiveGridLayout
        layouts={{ lg: layout }}
        measureBeforeMount
        className="layout"
        isDraggable
        isResizable
        margin={[20, 20]}
        allowOverlap={true}
        draggableCancel={[".actionsContainer",'.working-area-notepad']}
      >
        {widget.map((item, i) => {
          return (
            <div key={item.id} className="grid-item">
              <WidgetHeader item={item} />
              {/* <h2>{item.name}</h2> */}
              {item.content}
            </div>
          );
        })}
      </ResponsiveGridLayout>
    </div>
  );
}

export default Display;
