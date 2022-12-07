import './Display.css';
import notepad from '../../img/notepad.png'
import folder from '../../img/folder.png'
import myDocumentFolder from '../../img/my-documents-folder.png'
import React, { useState, useEffect } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
// import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import Notepad from '../../apps/Notepad';
import closeIcon from '../../img/close-icon.png'
const ResponsiveGridLayout = WidthProvider(Responsive);

const useStyles = makeStyles({
  appName: {
    color: "white",
    fontSize: 14,
    marginBottom: 5,
    // paddingLeft: 8
  },
  actionsContainer: {
    display: "flex",
    paddingTop: 1,
    paddingRight: 5
  },
  settingsWindow: {
    "&:hover": {
      backgroundColor: "orange"
    },
    "&:focus": {
      outline: "none"
    },
    backgroundColor: "transparent",
    border: "none",
    width: 20,
    height: 20,
    padding: 0,
    margin: 0,
    transition: "background-color 150ms ease"
  },
  closeWindow: {
    "&:hover": {
      backgroundColor: "red",
      border: "solid 2px bleck"
    },
    "&:focus": {
      outline: "none"
    },
    backgroundColor: "transparent",
    border: "none",
    width: 16,
    height: 16,
    padding: 0,
    margin: 0,
    transition: "background-color 150ms ease"
  },
  windowControlsIcon: {
    pointerEvents: "none",
    userSelect: "none",
    width: 20,
    height: 20,
    transition: "fill 150ms ease"
  },
  addButton: {
    height: "60px",
    width: "10%",
    minWidth: 120,
    padding: "1.5em auto",
    margin: "1em auto",
    textTransform: "uppercase",
    letterSpacing: "0.5em",
    fontSize: "12px"
  },
  gridItem: {
    cursor: "grab"
  }
});

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


function Display() {
  const [widget, setWidget] = useState(initialWidgetsList);
  const [widgetsState, setWidgetsState] = useState({
    One: true,
    Two: true,
    Three: true
  });

  const [layout, setlayout] = useState([]);
  const [newCounter, setNewCounter] = useState(0);

  const addWidget = (item) => {
    setNewCounter(newCounter + 1);
    const addedLayout = initialLayout.find(
      (x) => Number(x.i) === Number(item.id)
    );
    setlayout(
      layout.concat({
        i: String(addedLayout.i),
        x: addedLayout.x,
        minX: addedLayout.x,
        y: addedLayout.y,
        minY: addedLayout.y,
        w: addedLayout.w,
        h: addedLayout.h
        
      })
    );
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


  const WidgetHeader = (item) => {
    console.log(item.item.name)
    return (
      <>
        <div className='windowHeader'>
          <div className='logoContainer'>
            <span className={classes.appName}><img className='icon-titel' alt='icon' src={notepad}></img>{item.item.name}</span>
          </div>
          <div className={classes.actionsContainer}>
            {/* <button className={classes.settingsWindow} type="button">
              <div className={classes.windowControlsIcon}>
                <SettingsIcon />
              </div>
            </button> */}
            <button
              className='closeWindow'
              type="button"
              onClick={() => removeWidget(item.item)}
            >
              <img className='close-icon' src={closeIcon}></img>
            </button>
          </div>
        </div>
      </>
    );
  };
  const classes = useStyles();

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
