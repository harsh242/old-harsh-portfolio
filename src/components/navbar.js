import React from 'react'
import {NavLink} from 'react-router-dom';

function navbar() {

    return (
        <div>
            <header class="text-gray-700 body-font fixed-top">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <NavLink to="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-2xl">Harsh Badhai</span>
    </NavLink>
    
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a  class="mr-5 text-xl hover:text-gray-900"  href="#responsive-header">Work</a>
      <a class="mr-5 text-xl hover:text-gray-900" href="#about">About</a>
      <a class="mr-5 text-xl hover:text-gray-900" href="#contact">Contact</a>
    </nav>
    <button class="inline-flex items-center bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0 text-xl"> <a href="https://drive.google.com/file/d/1uTIPwsX5I0q9_DvJEU2nM1eFY_2xzIoi/view?usp=sharing" rel="noopener noreferrer" target="_blank" >Resume
      </a>
    </button>
  </div>
</header>
        </div>
    )
}

export default navbar
