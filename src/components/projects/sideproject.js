import React from "react";
import { Link } from "react-router-dom";

import hackmol from "../../assets/img/code/HackMoL.jpg";
import krishihub from "../../assets/img/code/Krishi_Hub.jpg";
import Techniti from "../../assets/img/films/Techniti.jpg";

import Card from "./card";

function SideProject() {
  return (
    <div id="work">
      <section className="text-gray-700 body-font overflow-hidden">
        <div className="container px-5 pt-24 mx-auto">
          <div className="flex flex-wrap w-full mb-8 items-start">
            <div className="lg:w-1/2 w-full  mb-6 lg:mb-0 pr-3">
              <h1 className="sm:text-3xl text-2xl font-semibold mb-2 text-gray-900">
                Side Projects
                <span role="img" aria-label="design">
                  👇
                </span>
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"> </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3  gap-16">
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
              description="A Digital Solution for bringing together farmers and buyers at a common E-commerce MarketPlace."
              link="https://drive.google.com/file/d/1ADhDXTdp2VZzbSTqzYd-_u0F1BwBW5UE/view?usp=sharing"
              button="Read Project"
            />
            <Card
              name="Techniti Aftermovie |Techno-Managerial Fest | NIT Jalandhar"
              image={Techniti}
              description="Shot & Edited the Aftermovie for the Techno-Managerial Fest  of NIT Jalandhar"
              url="https://www.youtube.com/watch?v=dFC98MLN4Rc&ab_channel=TheHODOPHILES"
              button="Watch"
            />
          </div>
          <div className="flex justify-center w-full mt-16">
            <Link to="/side-projects">
              {" "}
              <button className="inline-flex text-white bg-indigo-500 border-0 py-3 px-12 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                See More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SideProject;
