import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Projects from './components/projects/projects';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <Projects/>
     <Footer/>
    </div>
  );
}

export default App;
