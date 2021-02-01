import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/css/styles.css";
import ScrollToTop from "react-router-scroll-top";

import Home from "./pages/home";
import Design from "./pages/design";
import SideProjects from "./pages/sideprojects";
import About from "./pages/about";

import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";

import Contact from "./components/layout/contact";

import Pack from "./components/projects/pack";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/design" component={Design} />
          <Route exact path="/side-projects" component={SideProjects} />
          <Route exact path="/about" component={About} />
          <Route exact path="/pack" component={Pack} />
          <Contact />
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
