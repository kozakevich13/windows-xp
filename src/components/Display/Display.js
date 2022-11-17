import './Display.css';
import notepad from '../../img/notepad.png'
import folder from '../../img/folder.png'
import myDocumentFolder from '../../img/my-documents-folder.png'
import React, { useState, useEffect } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import SettingsIcon from "@material-ui/icons/Settings";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
const ResponsiveGridLayout = WidthProvider(Responsive);

const useStyles = makeStyles({
  windowHeader: {
    backgroundColor: "lightblue",
    display: "flex",
    justifyContent: "space-between",
    height: 25
  },
  logoContainer: {
    overflow: "hidden"
  },
  appName: {
    color: "black",
    fontSize: 14,
    marginBottom: 5,
    paddingLeft: 8
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
    width: 20,
    height: 20,
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
  { id: 1, name: "Notepad", content: "app Notepad" },
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
    const classes = useStyles();
    console.log(item.item.name)
    return (
      <>
        <div className={classes.windowHeader}>
          <div className={classes.logoContainer}>
            <span className={classes.appName}>{item.item.name}</span>
          </div>
          <div className={classes.actionsContainer}>
            {/* <button className={classes.settingsWindow} type="button">
              <div className={classes.windowControlsIcon}>
                <SettingsIcon />
              </div>
            </button> */}
            <button
              className={classes.closeWindow}
              type="button"
              onClick={() => removeWidget(item.item)}
            >
              {/* <div className='windowControlsIcon'> */}
                <CloseIcon className='windowControlsIcon' />
              {/* </div> */}
            </button>
          </div>
        </div>
      </>
    );
  };
  const classes = useStyles();

  return (
    <>
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
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        measureBeforeMount
        className="layout"
        isDraggable
        isRearrangeable
        isResizable
        margin={[20, 20]}
        allowOverlap={true}
      >
        {widget.map((item, i) => {
          return (
            <div key={item.id} className="grid-item">
              <WidgetHeader item={item} />
              <h2>{item.name}</h2>
              <p>{item.content}</p>
              
            </div>
          );
        })}
      </ResponsiveGridLayout>
    </>
  );
}

export default Display;
