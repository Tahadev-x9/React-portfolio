import React from "react";
import Projects from "./Project";

const Section5 = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-200 text-black flex items-center justify-center py-24"
    >
      <div className="max-w-[1700px] w-full px-10">
        <Projects />
      </div>
    </section>
  );
};

export default Section5;