import React from "react";
import krishihub from "../../assets/img/projects/krishihub.jpg";
import utkansh from "../../assets/img/projects/utkansh.jpg";
import Card from "../projects/card";

function Animation() {
  return (
    <div className="grid md:grid-cols-2  gap-16">
      <Card
        category="UI Design and Front-end Development"
        name="Utkansh 2020 Website "
        image={utkansh}
        description="Designed and Developed the website of Utkansh-Annual Cultural Fest of NIT Jalandhar."
        link="https://utkansh.cultnitj.co.in/"
        button="Visit Website"
      />
      <Card
        category="UI/UX Design and Front End Development"
        name="Krishi Hub | SIH Internal Hackathon Project"
        image={krishihub}
        description="A Digital Solution for bringing together farmers and buyers at a common E-commerce MarketPlace. We were in the top 5 teams who got selected from the Institute. "
        link="https://drive.google.com/file/d/1ADhDXTdp2VZzbSTqzYd-_u0F1BwBW5UE/view?usp=sharing"
        button="Read Project"
      />
    </div>
  );
}

export default Animation;
