import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/css/styles.css';

import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import Contact from './components/contact';
import Pack from './components/projects/pack';





class App extends React.Component {

  render(){
  return (
    <Router>
    <div className="App">
     <Navbar/>
     <Route exact path="/" component={Home} />
     <Route exact path="/pack" component={Pack} />
     <Contact/>
     <Footer/>
    </div>
    </Router>
  );
  

}
}

export default App;
