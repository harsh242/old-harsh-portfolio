import React from "react";
import krishihub from "../../assets/img/code/Krishi_Hub.jpg";
import utkansh from "../../assets/img/code/Utkansh.jpg";
import hackmol from "../../assets/img/code/HackMoL.jpg";
import visualizer from "../../assets/img/code/Algorithm_Visualizer.jpg";
import Card from "../projects/card";

function Code() {
  return (
    <div className="grid md:grid-cols-2  gap-16 fade-in">
      <Card
        name="HackMoL"
        image={hackmol}
        description="Designed & developed the website for a 36-hour long virtual hackathon hosted by DSC NIT Jalandhar"
        url="https://hackmol.tech/"
        button="Visit Website"
      />
      <Card
        name="Krishi Hub | SIH Internal Hackathon Project"
        image={krishihub}
        description="A Digital Solution for bringing together farmers and buyers at a common E-commerce MarketPlace. We were in the top 5 teams who got selected from the Institute. "
        link="https://drive.google.com/file/d/1ADhDXTdp2VZzbSTqzYd-_u0F1BwBW5UE/view?usp=sharing"
        button="Read Project"
      />
      <Card
        name="Utkansh 2020 Website "
        image={utkansh}
        description="Designed & Developed the website of Utkansh-Annual Cultural Fest of NIT Jalandhar."
        url="https://utkansh.cultnitj.co.in/"
        button="Visit Website"
      />
      <Card
        name="Greedy Algorithm Visualizer"
        image={visualizer}
        description="A Web Interface which implements all the popular Greedy Algorithms."
        url="https://harsh242.github.io/algorithmvisualizer/"
        button="Visit Website"
      />
    </div>
  );
}

export default Code;
