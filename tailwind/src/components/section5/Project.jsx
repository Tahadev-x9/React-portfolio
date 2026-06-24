import React from "react";
import { projects } from "./projectsData";

const Projects = () => {
  return (
    <>
      {/* Heading */}

      <h1 className="text-7xl font-bold text-center">
        Projects
      </h1>

      <p className="text-center text-2xl text-black mt-8">
        A showcase of clean, modern, responsive websites
      </p>

      {/* Cards */}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 mt-20">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-black border border-zinc-700 rounded-3xl overflow-hidden flex flex-col"
          >

            {/* Image */}

            <img
              src={project.image}
              alt={project.title}
              className="h-56 w-full object-cover"
            />

            {/* Content */}

            <div className="p-8 flex flex-col flex-grow">

              <h2 className="text-4xl font-bold">
                {project.title}
              </h2>

              <h3 className="text-2xl text-gray-300 mt-4">
                {project.subtitle}
              </h3>

              <p className="text-gray-400 mt-8 leading-8 flex-grow">
                {project.description}
              </p>

              {/* Button */}

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full py-4 rounded-xl bg-white text-black text-center text-lg font-semibold hover:bg-gray-300 transition-all duration-300"
              >
                Live Website →
              </a>

            </div>

          </div>
        ))}

      </div>
    </>
  );
};

export default Projects;