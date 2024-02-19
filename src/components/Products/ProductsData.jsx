import React from "react";
import Button from "../Shared/Button";
const ProductsData = ({ data }) => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-4 gap-9 place-items-center">
        {/* card section */}
        {data.map((data) => (
          <div key={data.id} className="hover:scale-110 duration-500 group ">
            <div className="relative">
              <img
                src={data.img}
                alt=""
                className="h-[230px] w-[230px] object-cover rounded-xl hero-bg-color  "
              />
              {/* hover button */}
              <div
                className="hidden absolute top-1/2 -translate-y-1/2 left-1/2  -translate-x-1/2 h-full w-full text-center group-hover:flex
             justify-center items-center duration-200 group-hover:backdrop-blur-sm"
              >
                <Button
                  text={"shop"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <div className="hero-bg-color rounded-lg dark:text-white text-black px-2 mt-2 hover:scale-105 duration-300 leading-7">
              <h2 className="font-bold hover:scale-105 duration-300">
                {data.title}
              </h2>
              <h2 className="font-bold hover:scale-105 duration-300">
                {data.price}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsData;
