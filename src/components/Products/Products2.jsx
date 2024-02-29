import React, { Suspense } from "react";
import Header from "../Shared/Header";
import ProductsDatac from "./ProductsDatac";
import { FaStar } from "react-icons/fa6";

import "./ImageButton.css";

// images import
import Image from "../../assets/product/iphone/2.png";
import Img1 from "../../assets/product/iphone/16-1.png";
import Img2 from "../../assets/product/iphone/16-2.png";
import Img3 from "../../assets/product/iphone/14.png";
import Img4 from "../../assets/product/iphone/15-1.png";
import Img5 from "../../assets/product/iphone/17.png";
import Img6 from "../../assets/product/iphone/18.png";
import Img7 from "../../assets/product/iphone/19.png";
import Img8 from "../../assets/product/iphone/20.png";

import { Link } from "react-router-dom";
import Samsung from "../ProductApple/Apple";

const ProductData = [
  {
    id: 1,
    img: Img1,
    title: "iphone 11 pro max",
    price: "$400",
  },
  {
    id: 2,
    img: Img2,
    title: "iphone 13 pro max",
    price: "$699",
  },
  {
    id: 3,
    img: Img3,
    title: "iphone 14 pro max",
    price: "$899",
  },
  {
    id: 4,
    img: Img4,
    title: "iphone 15 pro max",
    price: "$999",
  },
  {
    id: 5,
    img: Img5,
    title: "ipad Air",
    price: "$599",
  },
  {
    id: 6,
    img: Img6,
    title: "ipad pro M2",
    price: "$1,099",
  },
  {
    id: 7,
    img: Img7,
    title: "ipad pro",
    price: "$799",
  },
  {
    id: 8,
    img: Img8,
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
        <div className="containers container "
       
        >
          <img
            src={Image}
            alt="Snow"
            className=" opacity-50 object-cover rounded-xl hero-bg-color h-[230px] w-[230px]"
          />
          <Link to="/Apple">
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
