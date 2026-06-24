import React from "react";

function Card({ image, title, description, tag, tagColor }) {
  return (
    <div className="relative
      w-[280px]
      sm:w-[260px]
      lg:w-[280px]
      xl:w-[300px]
      h-[420px]
      md:h-[500px]
      xl:h-[560px]
      rounded-3xl
      mt-30
      overflow-hidden
      shadow-lg
      flex-shrink-0">

      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-5 text-white">

        <div>
          <h3 className="font-bold text-xl">
            {title}
          </h3>

          <p className="mt-4 text-sm leading-8">
            {description}
          </p>
        </div>

        <div
          className={`flex justify-between items-center px-5 py-3 rounded-full font-semibold ${tagColor}`}
        >
          <span>{tag}</span>

          <span className="text-xl">→</span>
        </div>

      </div>
    </div>
  );
}

export default Card;