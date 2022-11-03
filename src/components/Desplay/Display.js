import './Display.css';
import React, { useState, useMemo, useEffect } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import SettingsIcon from "@material-ui/icons/Settings";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
// import "./styles.css";
import { Widgets } from "@material-ui/icons";
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
    paddingTop: 3
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
      backgroundColor: "red"
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
  { id: 1, name: "One" },
  { id: 2, name: "Two" },
  { id: 3, name: "Three" }
];

const initialLayout = [
  { i: "1", x: 0, y: 0, w: 5, h: 2 },
  { i: "2", x: 5, y: 0, w: 3, h: 2 },
  { i: "3", x: 8, y: 0, w: 4, h: 2 }
  // { i: "4", x: 0, y: 3, w: 5, h: 2 },
  // { i: "5", x: 5, y: 3, w: 3, h: 2 },
  // { i: "6", x: 8, y: 3, w: 4, h: 2 },
  // { i: "7", x: 0, y: 6, w: 5, h: 2 },
  // { i: "8", x: 5, y: 6, w: 3, h: 2 },
  // { i: "9", x: 8, y: 6, w: 4, h: 2 }
];


function Display() {
  const [widget, setWidget] = useState(initialWidgetsList);
  const [widgetsState, setWidgetsState] = useState({
    One: true,
    Two: true,
    Three: true
  });

  const [layout, setlayout] = useState(initialLayout);
  const [newCounter, setNewCounter] = useState(0);

  const addWidget = (item) => {
    setNewCounter(newCounter + 1);
    const addedLayout = initialLayout.find(
      (x) => Number(x.i) === Number(item.id)
    );
    // console.log(12, layout[layout.length - 1].x);
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
    // console.log(11, (widget.length * 2) % 12);
    const newWidgets = widget.filter((x) =>
      widgetsState[x.name] ? widget : null
    );
    setWidgetsState({ ...widgetsState, [item.name]: true });

    // setWidget(
    //   widget.concat({
    //     id: widget[widget.length - 1].id + 1,
    //     name: `n${newCounter}`
    //   })
    // );

    // console.log(2, layout[layout.length - 1]);
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

  console.log(layout);

  const WidgetHeader = (item) => {
    const classes = useStyles();
    return (
      <>
        <div className={classes.windowHeader}>
          <div className={classes.logoContainer}>
            <span className={classes.appName}>Widget Name</span>
            <span className={classes.appName}>(Last Updated)</span>
          </div>
          <div className={classes.actionsContainer}>
            <button className={classes.settingsWindow} type="button">
              <div className={classes.windowControlsIcon}>
                <SettingsIcon />
              </div>
            </button>
            <button
              className={classes.closeWindow}
              type="button"
              onClick={() => removeWidget(item.item)}
            >
              <div className={classes.windowControlsIcon}>
                <CloseIcon />
              </div>
            </button>
          </div>
        </div>
      </>
    );
  };
  const classes = useStyles();

  return (
    <>
      {initialWidgetsList.map((item) => (
        <Button
          className={classes.addButton}
          variant="outlined"
          color="primary"
          type="button"
          onClick={() => addWidget(item)}
        >
          Add Widget {item.name}
        </Button>
      ))}

      <ResponsiveGridLayout
        layouts={{ lg: layout }}
        measureBeforeMount
        className="layout"
        isDragable
        isResizable
        margin={[20, 20]}
      >
        {widget.map((item, i) => {
          return (
            <div key={item.id} className="grid-item">
              <WidgetHeader item={item} />
              {item.name}
            </div>
          );
        })}
      </ResponsiveGridLayout>
    </>
  );
}

export default Display;
