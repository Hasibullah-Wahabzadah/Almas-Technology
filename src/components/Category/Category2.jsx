import React from "react";
import Image1 from "../../assets/category/phone-5.png";
import Image2 from "../../assets/category/smartwatch.png";
import Image3 from "../../assets/category/phone-1.png";
import Button from "../Shared/Button";

const Category = () => {
  return (
    <div className="py-1">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First col */}
          <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white text-xl">Enjoy</p>
                <p className="text-3xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-6xl font-bold opacity-40 mb-2">
                  Phone
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={Image1}
              alt=""
              className="w-[330px] absolute top-1/2 -translate-y-1/2 -right-0 drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] hover:scale-105 duration-300"
            />
          </div>
          {/* Second col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-3xl xl:text-5xl font-bold opacity-40 mb-2">
                Smartwatch
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandGreen"}
                />
              </div>
            </div>
            <img src={Image2} alt="" className="w-[201px] absolute -right-1 sm:w-[150px] sm:bottom-[50px] drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] hover:scale-105 duration-300"/>
          </div>
          {/* Third col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-6xl font-bold opacity-40 mb-2">
                  Phone
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandBlue"}
                />
              </div>
            </div>
            <img
              src={Image3}
              alt=""
              className="w-[250px] absolute bottom-2  -right-9 drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] hover:scale-105 duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
