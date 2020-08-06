import React from 'react';
import feelgood from "../../assets/img/projects/feelgood.jpg";
import taxibazaar from "../../assets/img/projects/taxibazaar.jpg"
import utkansh from "../../assets/img/projects/utkansh.jpg"

export default class Projects extends React.Component {
    constructor() {
      super();
        this.state = {
          show: false,
          showme: true,
          projects: [
            {
              category: "UI/UX Design",
              name: "Feel Good : Let's get through this together",
              image: feelgood,
              description:"A Solution designed to help Millennials & Gen-Z to talk their feelings out and use features that can help them improve their mental health.",
              link: "https://uxplanet.org/feelgood-ui-ux-case-study-4b10e5cc77f9",
              button:"Read Case Study"
            },
            {
                category: "UI/UX Design",
                name: "Taxi Bazaar | Coming Soon",
                image: taxibazaar,
                description:"Re-Designed the Website and Vendor app of Taxi Bazaar- An Outstation Taxi Provider with a reach of more than 400 cities across India.",
                link: "/comingsoon",
                button:"Coming Soon"
              },
            {
                category: "UI Design and Front-end Development",
                name: "Utkansh 2020 Website ",
                image: utkansh,
                description:"Designed and Developed the website of Utkansh-Annual Cultural Fest of NIT Jalandhar.",
                link: "https://utkansh.cultnitj.co.in/",
                button:"Visit Website"
              },
        ]
            }}
            render(){
    return (
        <div id="work">
            <section class="text-gray-700 body-font overflow-hidden">
            {this.state.projects.map((project,key)=> (
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt={project.name} class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={project.image}/>
      <div class="lg:w-1/2 w-full  justify-center lg:pl-10 lg:py-6 items-center mt-6 lg:mt-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">{project.category}</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{project.name}</h1>
        <div class="flex mb-4">
        
    
        </div>
        <p class="leading-relaxed">{project.description}</p>
        <div class="flex mt-6 items-center pb-2 border-b-2 border-gray-200 mb-5">
         
        </div>
        <div class="flex">
          <button class="flex mr-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"><a href={project.link} rel="noopener noreferrer" target="_blank" >{project.button}</a></button>
        </div>
      </div>
    </div>
  </div>
             ) )}
</section>
        </div>
    )
}}


