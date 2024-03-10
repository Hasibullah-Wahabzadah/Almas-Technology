import React, { Suspense } from "react";
import Header from "../Shared/Header";
import ProductsDatac from "./ProductsDatac";
import { FaStar } from "react-icons/fa6";

import "./ImageButton.css";


import { Link } from "react-router-dom";
import Samsung from "../ProductApple/Apple";

const ProductData = [
  {
    id: 1,
    img: "/assets/product/iphone/16-1.png",
    title: "iphone 11 pro max",
    price: "$400",
  },
  {
    id: 2,
    img: "/assets/product/iphone/16-2.png",
    title: "iphone 13 pro max",
    price: "$699",
  },
  {
    id: 3,
    img: "/assets/product/iphone/14.png",
    title: "iphone 14 pro max",
    price: "$899",
  },
  {
    id: 4,
    img: "/assets/product/iphone/15-1.png",
    title: "iphone 15 pro max",
    price: "$999",
  },
  {
    id: 5,
    img: "/assets/product/iphone/17.png",
    title: "ipad Air",
    price: "$599",
  },
  {
    id: 6,
    img: "/assets/product/iphone/18.png",
    title: "ipad pro M2",
    price: "$1,099",
  },
  {
    id: 7,
    img: "/assets/product/iphone/19.png",
    title: "ipad pro",
    price: "$799",
  },
  {
    id: 8,
    img: "/assets/product/iphone/20.png",
    title: "ipad 9th",
    price: "$329 ",
  },
];

const Products2 = ({ data }) => {
  const starCount = 5;
  return (
    <div>
      <div className="container " id="apple">
        {/* Header section */}
        <Header title={"Our Products"} subtitle={"---< Apple >---"} />
        {/* Body section */}

        <ProductsDatac data={ProductData} />
        {/* <ProductsDatac data={ProductData2} /> */}
        {/* <ProductsData data={ProductData3} /> */}
        <div className="containers container ">
          <img
            src={"/assets/product/iphone/2.png"}
            alt="Snow"
            className=" opacity-50 object-cover rounded-xl hero-bg-color h-[230px] w-[230px]"
          />
          <Link onClick={() => window.scroll(0, 0)} to="/Apple">
            <button className="btn ml-[120px] sm:ml-[100px] lg:ml-[120px]">
              <span>More items</span>
            </button>
          </Link>
          <div className=" w-[230px] hero-bg-color rounded-lg dark:text-white text-black px-2 mt-2 py-1  leading-7">
            <h2 className="font-bold opacity-55">MackBook M2 pro</h2>

            <div className="flex">
              <h2 className="font-bold opacity-55 pr-[90px]">$2,094</h2>
              {Array.from({ length: starCount }, (index) => (
                <FaStar
                  className="text-brandYellow inline-block mt-1 opacity-60"
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products2;
