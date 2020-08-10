import React from 'react';
import harsh from "../assets/img/meandme.jpg"

function About() {
    return (
        <div id="about">
          <section class="text-gray-700 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full  mb-6 lg:mb-0 pr-3">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">About Me</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"> </div>
        <p class=" leading-relaxed text-base mt-5" >A <span className="text-black-500 font-medium">Visual Artist and a Designer 🤹‍♂️</span> by Passion and Engineer👨‍🎓 by Degree, I love to show my empathy towards users and audience by variety of things (Product Design 📱, Short Films 🎥, Animations 🎨) for a start. <br/> <br/>Currently a <span className="text-black-500 font-medium">Pre-Final Year Student of NIT Jalandhar</span>, I started designing back in school with designing school magazines and PPT's in Corel Draw and later in college I started making short films and videos for fun which taught me how important it is to keep the <span className="text-black-500 font-medium">audience hooked.</span> <br/> <br/>Later in my 2nd Semester I discovered Web Development which led me to <span className="text-black-500 font-medium">UI/UX Design</span> and ever since then I have not stopped designing, solving and exploring. <br/> <br/> More Design works on <span className="text-pink-500 underline font-medium" ><a href="https://dribbble.com/harsh242" rel="noopener noreferrer" target="_blank"> Dribbble</a></span> & <span className="text-red-500 underline font-medium" ><a href="https://www.instagram.com/frames_by._harsh/" rel="noopener noreferrer" target="_blank">Instagram</a> </span> and If you are interested in my coding skills <span className="text-black-500 underline font-medium" ><a href="https://github.com/harsh242" rel="noopener noreferrer" target="_blank">Github </a> </span>.</p>

      </div>
      <img class="lg:w-1/2 w-full rounded" src={harsh} />
    </div>

  </div>
</section>
        </div>
    )
}

export default About
