import React from "react";
import Header from "../Shared/Header";
import ProductsData from "./ProductsData";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

const ProductData = [
  {
    id: 1,
    img: "/assets/product/Samsung/p1.png",
    title: "Galaxy S21 Ultra",
    price: "$500",
  },
  {
    id: 2,
    img: "/assets/product/Samsung/p2.png",
    title: "Galaxy A33",
    price: "$299",
  },
  {
    id: 3,
    img: "/assets/product/Samsung/p3.png",
    title: "Galaxy Note 9",
    price: "$300",
  },
  {
    id: 4,
    img: "/assets/product/Samsung/p4.png",
    title: "Galaxy S22 Ultra",
    price: "$700",
  },
  {
    id: 5,
    img: "/assets/product/Samsung/Tab-1.png",
    title: "Galaxy Tab A8",
    price: "$599",
  },
  {
    id: 6,
    img: "/assets/product/Samsung/Tab-2.png",
    title: "Galaxy Tab A9",
    price: "$700",
  },
  {
    id: 7,
    img: "/assets/product/Samsung/Tab-3.png",
    title: "Galaxy Tab S7",
    price: "$575",
  },
  {
    id: 8,
    img: "/assets/product/Samsung/Tab-4.png",
    title: "Galaxy S6",
    price: "$540",
  },
];

const Products = ({ data }) => {
  const starCount = 5;
  return (
    <div>
      <div className="container" id="samsung">
        {/* Header section */}
        <Header title={"Our Products"} subtitle={" ---< Samsung >---"} />
        {/* Body section */}
        <ProductsData data={ProductData} />

        <div className="containers container ">
          <img
            src={"/assets/product/Samsung/Laptop-2.png"}
            alt="Snow"
            className=" opacity-50 object-cover rounded-xl hero-bg-color h-[230px] w-[230px]"
          />
          <Link onClick={() => window.scroll(0, 0)} to="/Samsung">
            <button className="btn ml-[120px] sm:ml-[100px] lg:ml-[120px]">
              <span>More items</span>
            </button>
          </Link>
          <div className=" w-[230px] hero-bg-color rounded-lg dark:text-white text-black px-2 mt-2 py-1  leading-7">
            <h2 className="font-bold opacity-55">Samaung Book3 pro</h2>

            <div className="flex">
              <h2 className="font-bold opacity-55 pr-[90px]">$1,099</h2>
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

export default Products;
