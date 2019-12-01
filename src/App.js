import React, {useRef, useEffect} from 'react';
//import logo from ./logo.svg******add later******
import './App.css';
import Navigation from './components/Navigation';
import {TweenMax, Power3} from 'gsap';

function App() {
  let item = useRef('hello');
  console.log(item);



  return (
    <>
      <header className="App-header">
       <Navigation/>

      </header>

    </>
  );
}

export default App;
