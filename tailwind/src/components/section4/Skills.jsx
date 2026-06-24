import React from "react";
import { skills } from "./skillsData";

const Skills = () => {
  return (
    <>
      {/* Heading */}
      <h1 className="text-center text-7xl font-bold text-black">
        Skills
      </h1>

      <p className="text-center text-2xl text-black mt-8">
        Crafting seamless UI/UX and clean code
      </p>

      {/* Cards */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 mt-20">
        {skills.map((card, index) => (
          <div
            key={index}
            className="bg-black border border-zinc-700 rounded-3xl p-8 min-h-[470px]"
          >
            <h2 className="text-5xl font-bold mb-10 text-white">
              {card.title}
            </h2>

            <div className="flex flex-wrap gap-4">
              {card.items.map((item, i) => (
                <span
                  key={i}
                  className="px-6 py-4 border border-zinc-600 rounded-2xl text-xl bg-[#202020] text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;