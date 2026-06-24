import React from "react";
import Services from "./Services";

const Section2 = () => {
  return (
    <section
      id="services"
      className="min-h-screen w-full bg-gray-200 text-white flex items-center justify-center py-20"
    >
      <div className="max-w-7xl w-full px-6">
        <Services />
      </div>
    </section>
  );
};

export default Section2;