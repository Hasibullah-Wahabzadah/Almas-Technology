import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-10 max-w-[600px] mx-auto space-y-2 pt-10">
      <h1 className="text-3xl font-bold lg:text-4xl dark:text-white">{title}</h1>
      <p className="text-2xl text-gray-400 ">{subtitle}</p>
    </div>
  );
};

export default Header;
