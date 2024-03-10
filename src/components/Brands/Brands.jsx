import React from "react";

import Header from "../Shared/Header";

const Brands = () => {
  return (
    <div className="" id="brand">
      <div>
        <Header title="Our Brands" subtitle={"Get the best brands here"} />
      </div>
      <div className=" bg-gray-200 dark:bg-white/10 py-2 mt-14  md:block ">
        <div className="grid grid-cols-7 gap-1 place-items-center container">
          <img
            src={"/assets/brand/1.png"}
            alt="brand"
            className="w-[130px] drop-shadow-[-8px_10px_6px_rgba(0,0,0,1.4)]"
            
          />
          <img
            src={"/assets/brand/2.png"}
            alt="brand"
            className="w-[130px] drop-shadow-[-8px_10px_6px_rgba(0,0,0,1.4)]"
            
          />
          <img
            src={"/assets/brand/3-1.png"}
            alt="brand"
            className="w-[130px] drop-shadow-[-8px_10px_6px_rgba(0,0,0,1.4)]"
            
          />
          <img
            src={"/assets/brand/4.png"}
            alt="brand"
            className="w-[130px] drop-shadow-[-8px_10px_6px_rgba(0,0,0,1.4)]"
            
          />
          <img
            src={"/assets/brand/5.png"}
            alt="brand"
            className="w-[130px] drop-shadow-[-8px_10px_6px_rgba(0,0,0,1.4)]"
            
          />
          <img
            src={"/assets/brand/6.png"}
            alt="brand"
            className="w-[130px] drop-shadow-[-8px_10px_6px_rgba(0,0,0,1.4)]"
            
          />
          <img
            src={"/assets/brand/7.png"}
            alt="brand"
            className="w-[130px] drop-shadow-[-8px_10px_6px_rgba(0,0,0,1.4)]"
            
          />
        </div>
      </div>
    </div>
  );
};

export default Brands;
