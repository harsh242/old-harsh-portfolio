import React from "react";
import { Helmet } from "react-helmet";

import AboutHero from "../components/about/hero";

function About() {
  return (
    <div className="fade-in">
    <Helmet>
        <meta charSet="utf-8" />
        <title>About Me | Harsh Badhai</title>
        <link rel="canonical" href="http://harshbadhai.me/about" />
      </Helmet>
      <AboutHero />
    </div>
  );
}

export default About;
