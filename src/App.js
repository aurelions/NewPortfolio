import React,{} from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Particles from "./components/Particles";

function App() {
  // let item = useRef('hello');
  // console.log(item);



  return (
    <div>
      <header className="App-header">
        <Navigation />
      </header>
      <div id="Light"></div>
      <Particles />
    </div>
  );
}

export default App;
