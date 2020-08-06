import React from 'react';
import hero from "../assets/img/hero.png";

export default function Hero() {
    return (
        <div>
            <section class="text-gray-700 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center order-last">
      <h1 class="title-font sm:text-4xl text-4xl mb-4 font-medium text-gray-900">Hi👋, I am Harsh Badhai,
        <br class="hidden lg:inline-block" /> A Digital Product Designer
      </h1>
      <p class="mb-8 leading-relaxed">A Passionate Problem Solver before a Designer. I combine my creative and problem solving skills to give out what's best for the Product.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href="#work">Work </a></button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"> <a href="https://drive.google.com/file/d/1uTIPwsX5I0q9_DvJEU2nM1eFY_2xzIoi/view?usp=sharing" rel="noopener noreferrer" target="_blank" >Resume</a></button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 order-first ">
      <img class="object-cover object-center rounded" alt="hero" src={hero} />
    </div>
  </div>
</section>
        </div>
    )
}
