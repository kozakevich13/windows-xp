import './App.css';
import Display from './components/Display/Display';
import Footer from './components/Footer/Footer';
import LoadingScreen from "react-loading-screen";
import spinner from "../src/assets/loading-windows98.gif";
import React, { useEffect, useState } from "react";



function App() {

  const [isLoding, setIsLoding] = useState(true);
  const [textLoader, setTextLoader] = useState('Loading...')

  useEffect(() => {
    setTimeout(() => {
      // setIsLoding(false);
      setTextLoader('Сlick anywhere')
    }, 5000);
  }, []);

  function unLock() {
    setIsLoding(false);
  }
  return (
    <div className="App">

      {isLoding ? (
        <div onClick={()=>{unLock()}}>
          <p>sasdsda</p>
          <LoadingScreen
          loading={true}
          bgColor="white"
          // spinnerColor="#9ee5f8"
          textColor="#676767"
          logoSrc={spinner}
          text={textLoader}
        />
      ) : (
        <>
           <Display/>
           <Footer/>
        </>
       
      )}

     
    </div>
  );
}

export default App;
