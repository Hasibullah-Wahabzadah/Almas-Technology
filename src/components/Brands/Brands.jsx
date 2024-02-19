import React from "react";

// images import
import brand1 from "../../assets/brand/1.png";
import brand2 from "../../assets/brand/2.png";
import brand3 from "../../assets/brand/3.png";
import brand4 from "../../assets/brand/4.png";
import brand5 from "../../assets/brand/5.png";
import brand6 from "../../assets/brand/6.png";
import brand7 from "../../assets/brand/7.png";

const Brands = () => {
  return (
    <div className="py-2 mt-14  md:block bg-gray-200 dark:bg-white/10">
      <div className="container ">
        <div className="grid grid-cols-7 gap-1 place-items-center ">
          <img
            src={brand1}
            alt="brand"
            className="w-[130px] hover:scale-110 duration-500"
          />
          <img
            src={brand2}
            alt="brand"
            className="w-[130px] hover:scale-110 duration-500"
          />
          <img
            src={brand3}
            alt="brand"
            className="w-[130px] hover:scale-110 duration-500"
          />
          <img
            src={brand4}
            alt="brand"
            className="w-[130px] hover:scale-110 duration-500"
          />
          <img
            src={brand5}
            alt="brand"
            className="w-[130px] hover:scale-110 duration-500"
          />
          <img
            src={brand6}
            alt="brand"
            className="w-[130px] hover:scale-110 duration-500"
          />
          <img
            src={brand7}
            alt="brand"
            className="w-[130px] hover:scale-110 duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Brands;
