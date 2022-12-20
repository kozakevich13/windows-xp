import './App.css';
import Display from './components/Display/Display';
import Footer from './components/Footer/Footer';
import LoadingScreen from "react-loading-screen";
import spinner from "../src/assets/loading-windows98.gif";
import React, { useEffect, useState } from "react";



function App() {

  const [isLoding, setIsLoding] = useState(true);
  const [selectedMessage,setMessage]=useState();

  useEffect(() => {
    setTimeout(() => {
      setIsLoding(false);
    }, 5000);
  }, []);
  return (
    <div className="App">

{isLoding ? (
        <LoadingScreen
          loading={true}
          bgColor="#f1f1f1"
          spinnerColor="#9ee5f8"
          textColor="#676767"
          logoSrc={spinner}
          text="Loading..."
        />
      ) : (
        <>
           <Display setMessage={setMessage}/>
           <Footer selectedMessage={selectedMessage}/>
        </>
       
      )}

     
    </div>
  );
}

export default App;