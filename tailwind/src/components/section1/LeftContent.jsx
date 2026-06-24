import React from "react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";


const LeftContent = () => {
  return (
    <div className="w-full mt-30 lg:w-2/5 flex flex-col justify-between h-full">

      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          NEX DEV
          <br />
          Front - End
          <br />
          Developer & Designer
        </h1>

        <p className="mt-4 text-gray-700 text-base md:text-lg leading-8">
          Blending thoughtful UI design with clean , responsive development <br />
          to create website that looks great and perform flawlessly.</p>
          <button className="bg-black  text-white h-12 w-40 rounded-2xl mt-10">Download CV</button>
      </div>

      {/* Bottom Arrow */}
    <div className="flex items-center gap-4 mt-40">
  <button className="w-14 h-14 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition">
    <ArrowUpRight size={22} />
  </button>

  <button className="w-14 h-14 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition">
    <FaGithub size={22} />
  </button>
</div>
    </div>
  );
};

export default LeftContent;