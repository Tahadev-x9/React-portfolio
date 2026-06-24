import React from "react";
import services from "./servicesData";

const Services = () => {
  return (
    <>
      <h2 className="text-5xl font-bold text-center text-black">Services</h2>

      <p className="text-center text-black mt-4 mb-16">
        Designing clean scalable responsive websites
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-[#111] border border-zinc-700 rounded-3xl p-8"
          >
            <h3 className="text-3xl font-bold leading-tight">
              {item.title}
            </h3>

            <p className="text-gray-300 mt-6 leading-8">
              {item.description}
            </p>

            <hr className="my-8 border-zinc-700" />

            <div className="space-y-4">
              {item.tags.map((tag, i) => (
                <div
                  key={i}
                  className="border border-zinc-700 rounded-xl py-4 px-8"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;




