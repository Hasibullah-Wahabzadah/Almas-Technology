import React from "react";
import Button from "../Shared/Button";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductDetail4 from "./ProductDetail4";
const ProductsData = ({ data }) => {
  const starCount = 5;

  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-2 lg:grid-cols-4 gap-9 place-items-center ">
        {/* card section */}
        {data.map((data) => (
          <div 
          
          key={data.id} className="hover:scale-110 duration-500 group ">
            <div
            
            className="relative ">
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
                <Link to={`/product3/${data.id}`}>
                <Button
                  text={"see"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
                </Link>
              </div>
            </div>
            <div className=" w-[230px] hero-bg-color rounded-lg dark:text-white text-black px-2 mt-2 py-1 hover:scale-105 duration-300 leading-7">
              <h2 className="font-bold hover:scale-105 duration-300">
                {data.title}
              </h2>
              {/* <h2 className=" text-sm hover:scale-105 duration-300 opacity-0 hidden group-hover:block group-visited:block hover:opacity-40">
                {data.title1}
              </h2> */}
              <div className="flex">
              <h2 className="font-bold hover:scale-105 duration-300 pr-[90px]">
                {data.price}
              </h2>
              {Array.from({length:starCount}, (index) => (<FaStar className="text-brandYellow inline-block mt-1" key={index}/>))
                
              }
              </div>
              
            </div>
          </div>
          
        ))}
      </div>
     
    </div>
  );
};

export default ProductsData;
