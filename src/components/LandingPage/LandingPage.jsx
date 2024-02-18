import React from "react";
import backgroundImage from "../../assets/LandingPage/2.png"; // مسیر تصویر

const LandingPage = () => {
  return (
    <div className="container pt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 rounded-3xl min-h-[550px] sm:min-h[650px] hero-bg-color justify-center items-center">
        <div className=" text-center">
          <h1 className="uppercase lg:text-4xl text-3xl sm:text-90xl text-black font-bold dark:text-white ml-7">
            Mobile and computer equipment information website
          </h1>
        </div>
        <div className="relative">
          <img
            src={backgroundImage} // استفاده از مسیر تصویر
            alt="Mobile and computer equipment  " // متن جایگزین برای تصویر
            className="w-[530px]  drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)]"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
