import React from "react";
import Header from "../Shared/Header";
import ProductsData from "./ProductsData";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

// images import
import Images from "../../assets/product/Samsung/Laptop-2.png";
import Img1 from "../../assets/product/Samsung/p1.png";
import Img2 from "../../assets/product/Samsung/p2.png";
import Img3 from "../../assets/product/Samsung/p3.png";
import Img4 from "../../assets/product/Samsung/p4.png";
import Img5 from "../../assets/product/Samsung/Tab-1.png";
import Img6 from "../../assets/product/Samsung/Tab-2.png";
import Img7 from "../../assets/product/Samsung/Tab-3.png";
import Img8 from "../../assets/product/Samsung/Tab-4.png";


const ProductData = [
  {
    id: 1,
    img: Img1,
    title: "Galaxy S21 Ultra",
    price: "$500",
  },
  {
    id: 2,
    img: Img2,
    title: "Galaxy A33",
    price: "$299",
  },
  {
    id: 3,
    img: Img3,
    title: "Galaxy Note 9",
    price: "$300",
  },
  {
    id: 4,
    img: Img4,
    title: "Galaxy S22 Ultra",
    price: "$700",
  },
  {
    id: 5,
    img: Img5,
    title: "Galaxy Tab A8",
    price: "$599",
  },
  {
    id: 6,
    img: Img6,
    title: "Galaxy Tab A9",
    price: "$700",
  },
  {
    id: 7,
    img: Img7,
    title: "Galaxy Tab S7",
    price: "$575",
  },
  {
    id: 8,
    img: Img8,
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
        {/* <ProductsData data={ProductData2} /> */}
        {/* <ProductsData data={ProductData3}/> */}

        <div 
         data-aos="flip-left"
         data-aos-easing="ease-out-cubic"
         data-aos-duration="2000"
        className="containers container ">
          <img
          
            src={Images}
            alt="Snow"
            className=" opacity-50 object-cover rounded-xl hero-bg-color h-[230px] w-[230px]"
          />
          <Link to="/Samsung">
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
