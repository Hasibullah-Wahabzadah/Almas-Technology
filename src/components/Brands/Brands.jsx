import React from "react";

// images import
import brand1 from "../../assets/brand/1.png";
import brand2 from "../../assets/brand/2.png";
import brand3 from "../../assets/brand/3-1.png";
import brand4 from "../../assets/brand/4.png";
import brand5 from "../../assets/brand/5.png";
import brand6 from "../../assets/brand/6.png";
import brand7 from "../../assets/brand/7.png";
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
            src={brand1}
            alt="brand"
            className="w-[130px] drop-shadow-[-8px_10px_6px_rgba(0,0,0,1.4)]"
            
          />
          <img
            src={brand2}
            alt="brand"
            className="w-[130px] drop-shadow-[-8px_10px_6px_rgba(0,0,0,1.4)]"
            
          />
          <img
            src={brand3}
            alt="brand"
            className="w-[130px] drop-shadow-[-8px_10px_6px_rgba(0,0,0,1.4)]"
            
          />
          <img
            src={brand4}
            alt="brand"
            className="w-[130px] drop-shadow-[-8px_10px_6px_rgba(0,0,0,1.4)]"
            
          />
          <img
            src={brand5}
            alt="brand"
            className="w-[130px] drop-shadow-[-8px_10px_6px_rgba(0,0,0,1.4)]"
            
          />
          <img
            src={brand6}
            alt="brand"
            className="w-[130px] drop-shadow-[-8px_10px_6px_rgba(0,0,0,1.4)]"
            
          />
          <img
            src={brand7}
            alt="brand"
            className="w-[130px] drop-shadow-[-8px_10px_6px_rgba(0,0,0,1.4)]"
            
          />
        </div>
      </div>
    </div>
  );
};

export default Brands;
