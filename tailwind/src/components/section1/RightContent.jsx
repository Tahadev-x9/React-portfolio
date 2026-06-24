import React from "react";
import Card from "./Card";

const cards = [
  {
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    title: "Prime customers",
    description:
      "that have access to bank credit and are satisfied with the current product.",
    tag: "Satisfied",
    tagColor: "bg-blue-500",
  },
  {
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    title: "Customers",
    description:
      "that have access to bank credit and are not satisfied with the current service.",
    tag: "Underserved",
    tagColor: "bg-blue-600",
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    title: "Customers",
    description:
      "from near-prime and sub-prime segments with no access to bank credit.",
    tag: "Underbanked",
    tagColor: "bg-green-400 text-black",
  },
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    title: "Young Adults",
    description: "Potential customers starting their financial journey.",
    tag: "Growth",
    tagColor: "bg-purple-500",
  },
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    title: "Business",
    description: "Small business owners requiring business loans.",
    tag: "Business",
    tagColor: "bg-orange-500",
  },
  {
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
    title: "Premium",
    description: "High-income customers looking for premium banking.",
    tag: "Premium",
    tagColor: "bg-pink-500",
  },
];

const RightContent = () => {
  return (
    <div className="w-full lg:w-3/5">
      
      {/* SCROLL CONTAINER */}
      <div className="overflow-x-auto scroll-smooth no-scrollbar px-4 py-4">

        <div className="flex gap-8 w-max">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>

      </div>

    </div>
  );
};

export default RightContent;