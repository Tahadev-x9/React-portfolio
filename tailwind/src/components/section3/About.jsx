import React from "react";
import { approach, stats } from "./aboutData";

const About = () => {
  return (
    <>
      <h2 className="text-6xl font-bold text-center">
        About Me
      </h2>

      <p className="max-w-6xl mx-auto text-center text-black text-xl leading-10 mt-10">
        I'm a front-end developer and designer passionate about crafting
        clean, intuitive, and responsive digital experiences. I focus on
        turning ideas into seamless interfaces by understanding user needs,
        designing thoughtful UI layouts, and ensuring smooth interactions
        across devices.
      </p>

      <h3 className="text-5xl font-bold text-center mt-20">
        My Approach
      </h3>

      <div className="grid md:grid-cols xl:grid-cols-3 gap-6 mt-12">

        {approach.map((item, index) => (
          <div
            key={index}
            className="bg-black text-white border border-zinc-700 rounded-4xl p-8 flex items-center gap-8"
          >
            <div className="bg-gray-200 text-black font-bold text-3xl rounded-xl h-16 w-16 flex items-center justify-center">
              {item.number}
            </div>

            <h4 className="text-2xl font-semibold">
              {item.title}
            </h4>
          </div>
        ))}

      </div>

      <div className="grid grid-cols-3 mt-12 gap-2">

        {stats.map((item, index) => (
          <div key={index} className="text-center">

            <h1 className="text-6xl font-bold">
              {item.number}
            </h1>

            <p className="text-2xl text-black mt-5">
              {item.title}
            </p>

          </div>
        ))}

      </div>
    </>
  );
};

export default About;