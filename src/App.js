import './App.css';
import Music from './components/Background-song/Music';
import Display from './components/Desplay/Display';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Display/>
      <Footer/>
      <Music/>
    </div>
  );
}

export default App;
