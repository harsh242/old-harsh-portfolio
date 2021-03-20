import React from "react";
import { Helmet } from "react-helmet";

import Hero from "../components/hero";
import RecentWork from "../components/projects/recentwork";
import SideProject from "../components/projects/sideproject";

const Home = () => {
  return (
    <div className="App fade-in">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Harsh Badhai | Product Designer</title>
        <link rel="canonical" href="http://harshbadhai.me/" />
      </Helmet>
      <Hero />
      <RecentWork />
      <SideProject />
    </div>
  );
};

export default Home;
