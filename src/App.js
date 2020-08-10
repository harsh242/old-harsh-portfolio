import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/css/styles.css';

import Navbar from './components/navbar';
import Hero from './components/hero';
import Projects from './components/projects/projects';
import Footer from './components/footer';
import Contact from './components/contact';
import About from './components/about';




class App extends React.Component {

  render(){
  return (
    <Router>
    <div className="App">
     <Navbar/>
     <Hero/>
     <Projects/>
     <About/>
     <Contact/>
     <Footer/>
    </div>
    </Router>
  );
  

}
}

export default App;
