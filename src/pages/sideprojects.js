import React,{useState} from "react";
import { Helmet } from "react-helmet";

import Code from "../components/sideprojects/code";
import Animation from "../components/sideprojects/animation";
import Filmmaking from "../components/sideprojects/filmmaking";

function SideProjects() {
  const [openTab, setOpenTab] = useState(1);
  return (
    <section className="text-gray-700 body-font fade-in">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Side Projects by Harsh</title>
        <link rel="canonical" href="http://harshbadhai.me/side-projects" />
      </Helmet>
      <div className="container px-5 py-24 mx-auto">
        <div class="flex flex-col md:flex-row md:items-center mb-8">
          <div className="flex-1">
            <h1 class="sm:text-3xl text-2xl font-semibold mb-2 text-gray-900 ">
              Stuff I do for fun
              <span role="img" aria-label="design">
                👇
              </span>
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"> </div>
          </div>
          <nav
            class="flex text-sm mt-3 md:ml-4 md:mt-0 whitespace-nowrap overflow-x-auto py-3 lg:py-0"
            role="tablist"
          >
            <a
              data-toggle="tab"
              href="#code"
              role="tablist"
              class={
                "px-4 py-2 rounded-full   " +
                (openTab === 1
                  ? "bg-indigo-600 font-semibold text-white hover:bg-indigo-700"
                  : "text-gray-700 hover:text-indigo-600")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
            >
              Code
            </a>
            <a
              data-toggle="tab"
              href="#animation"
              role="tablist"
              class={
                "px-4 py-2 rounded-full   " +
                (openTab === 2
                  ? "bg-indigo-600 font-semibold text-white hover:bg-indigo-700"
                  : "text-gray-700 hover:text-indigo-600")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
            >
              Animation
            </a>
            <a
              data-toggle="tab"
              href="#filmmaking"
              role="tablist"
              class={
                "px-4 py-2 rounded-full   " +
                (openTab === 3
                  ? "bg-indigo-600 font-semibold text-white hover:bg-indigo-700"
                  : "text-gray-700 hover:text-indigo-600")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
              }}
            >
              Filmmaking
            </a>
          </nav>
        </div>
        <div>
          <div className={openTab === 1 ? "block" : "hidden"} id="code">
            <Code />
          </div>
          <div className={openTab === 2 ? "block" : "hidden"} id="animation">
            <Animation />
          </div>
          <div className={openTab === 3 ? "block" : "hidden"} id="filmmaking">
            <Filmmaking />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SideProjects;
