import React from "react";
import { Link } from "react-router-dom";

import Tilt from "react-tilt";

function Card({
  name,
  image,
  category,
  description,
  url,
  link,
  classes,
  button,
}) {
  return (
    <div className="h-full rounded-lg overflow-hidden">
      {url ? (
        <a
          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
          href={url}
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="h-auto w-full object-cover object-center rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            src={image}
            alt={name}
          />{" "}
        </a>
      ) : (
        <Link to={link}>
          {" "}
          <img
            className="h-auto w-full object-cover object-center rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            src={image}
            alt={name}
          />
        </Link>
      )}
      <div className="pt-6">
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
          {name}
        </h1>
        <p className="leading-relaxed mb-3">{description}</p>
        <div className="flex items-center flex-wrap ">
          {url ? (
            <a
              className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
              href={url}
              rel="noopener noreferrer"
              target="_blank"
            >
              {button}
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          ) : (
            <Link to={link}>
              <div
                className={`text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 ${classes}`}
              >
                {button}
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
