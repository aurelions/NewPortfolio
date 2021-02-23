import React,{} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects'


function App() {
 

  return (
   <BrowserRouter>
      <Switch>
        <Route component={Home} path='/' exact/>
        <Route component={About} path='/about'/>
        <Route component={Contact} path='/contact'/>
        <Route component={Projects} path='/projects'/>
      </Switch>
   </BrowserRouter>
   
  );
}

export default App;
