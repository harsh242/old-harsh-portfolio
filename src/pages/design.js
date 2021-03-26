import React from "react";
import { Helmet } from "react-helmet";

import Card from "../components/projects/card";

import cryptoverse from "../assets/img/projects/Cryptoverse_Wars.jpg";
import zeda from "../assets/img/projects/Zeda.jpg";
import feelgood from "../assets/img/projects/feelgood.jpg";
import taxibazaar from "../assets/img/projects/taxibazaar.jpg";
import pack from "../assets/img/projects/pack.jpg";

function Design() {
  return (
    <section className="text-gray-700 body-font fade-in">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Design Case Studies by Harsh</title>
        <link rel="canonical" href="http://harshbadhai.me/design" />
      </Helmet>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-8 items-start">
          <div className="lg:w-1/2 w-full  mb-6 lg:mb-0 pr-3">
            <h1 className="sm:text-3xl text-2xl font-semibold mb-2 text-gray-900">
              Everything Design
              <span role="img" aria-label="design">
                👇
              </span>
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"> </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2  gap-16">
          <Card
            category="UI/UX Design"
            name="Pack | D'source Corona Design Challenge Winner"
            image={pack}
            description="A Solution designed to minimize the crowd at small shops/stores and focuses on a safer and digital way to buy ration and daily goods. We were one of the winners in Interaction Design Domain"
            link="/pack"
            button="Read Case Study"
          />
          <Card
            category="UI/UX Design"
            name="Cryptoverse Wars"
            image={cryptoverse}
            description="An Interactive Code School which can take you from a Blockchain Noob to Pro"
            link="/cryptoverse"
            button="Read Case Study"
          />
          <Card
            category="UI/UX Design"
            name="Zeda.io"
            image={zeda}
            description="Building a Product for Product Managers"
            link="/zeda"
            button="Read Case Study"
          />
          <Card
            category="UI/UX Design"
            name="Feel Good : Let's get through this together"
            image={feelgood}
            description="A Solution designed to help Millennials & Gen-Z to talk their feelings out and use features that can help them improve their mental health."
            url="https://uxplanet.org/feelgood-ui-ux-case-study-4b10e5cc77f9"
            button="Read Case Study"
          />
          <Card
            category="UI/UX Design"
            name="Taxi Bazaar | Coming Soon"
            image={taxibazaar}
            description="Re-Designed the Website and Vendor app of Taxi Bazaar- An Outstation Taxi Provider with a reach of more than 400 cities across India."
            button="Coming Soon"
            classes="opacity-50 cursor-not-allowed"
          />
        </div>
      </div>
    </section>
  );
}

export default Design;
