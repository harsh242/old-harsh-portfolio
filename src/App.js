import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Hero from './components/hero';
import Projects from './components/projects/projects';
import Footer from './components/footer';
import Contact from './components/contact';
import About from './components/about';


function App() {
  return (
    <Router>
    <div className="App">
     <Navbar/>
     <Hero/>
     <Projects/>
     
     <Contact/>
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
