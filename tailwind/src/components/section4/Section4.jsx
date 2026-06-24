import React from "react";
import Skills from "./Skills";

const Section4 = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-200 text-black flex items-center justify-center py-24"
    >
      <div className="max-w-[1750px] w-full px-10">
        <Skills />
      </div>
    </section>
  );
};

export default Section4;