import React from "react";
import About from "./About";

const Section3 = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full bg-gray-200 not-visited:flex items-center justify-center py-24"
    >
      <div className="max-w-7xl w-full px-6">
        <About />
      </div>
    </section>
  );
};

export default Section3;