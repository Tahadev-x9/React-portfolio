import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1Content = () => {
  return (
    <section className="bg-gray-200 min-h-screen flex items-start">
      
      <div className="max-w-[1800px] mx-auto px-6 py-16 w-full">
        
        <div className="flex flex-col lg:flex-row items-start gap-16">
          
          <LeftContent />
          <RightContent />

        </div>

      </div>
      
    </section>
  );
};

export default Page1Content;