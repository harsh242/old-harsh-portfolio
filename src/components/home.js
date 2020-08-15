import React from 'react';

import Hero from './hero';
import Projects from './projects/projects';
import About from './about';




class Home extends React.Component {

  render(){
  return (
    <div className="App">
     <Hero/>
     <Projects/>
     <About/>
    </div>
  );
  

}
}

export default Home;
