import React from "react";
import Header from "../Shared/Header";
import ProductsData2 from "./ProductsData2";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Banner2 from "../Banner/Banner2";

const ProductData = [
  {
    id: 1,
    img: "/assets/product/iphone/1.png",
    title: "MacBook pro M1",
    price: "$1299",
  },
  {
    id: 2,
    img: "/assets/product/iphone/2.png",
    title: "MacBook pro Air",
    price: "$999",
  },
  {
    id: 3,
    img: "/assets/product/iphone/3.png",
    title: "MacBook pro 16",
    price: "$2399",
  },
  {
    id: 4,
    img: "/assets/product/iphone/4.png",
    title: "MacBook pro 13",
    price: "$1399",
  },
  {
    id: 5,
    img: "/assets/product/iphone/28.png",
    title: "iphone 7",
    price: "$399",
  },
  {
    id: 6,
    img: "/assets/product/iphone/29.png",
    title: "iphone 8",
    price: "$499",
  },
  {
    id: 7,
    img: "/assets/product/iphone/30.png",
    title: "iphone xs",
    price: "$999 ",
  },
  {
    id: 8,
    img: "/assets/product/iphone/38.png",
    title: "iphone 5",
    price: "$100 ",
  },
  {
    id: 9,
    img: "/assets/product/iphone/39.png",
    title: "iphone 6",
    price: "$199",
  },
  {
    id: 10,
    img: "/assets/product/iphone/35.png",
    title: "ipad pro ",
    price: "$494",
  },
  {
    id: 11,
    img: "/assets/product/iphone/31.png",
    title: "Fitbit Versa 3",
    price: "$229",
  },
  {
    id: 12,
    img: "/assets/product/iphone/32.png",
    title: "Apple Watch SE",
    price: "$279",
  },
  {
    id: 13,
    img: "/assets/product/iphone/33.png",
    title: "Apple Watch Series 6",
    price: "$399",
  },
  {
    id: 14,
    img: "/assets/product/iphone/34.png",
    title: "Grmin Venu Sq",
    price: "$199",
  },
  {
    id: 15,
    img: "/assets/product/iphone/37.png",
    title: "Power Bank",
    price: "$89",
  },
  {
    id: 16,
    img: "/assets/product/iphone/36.png",
    title: "Power Bank Wireless Qi",
    price: "$100",
  },
  {
    id: 17,
    img: "/assets/product/iphone/26.png",
    title: "ipad cover",
    price: "$12",
  },
  {
    id: 18,
    img: "/assets/product/iphone/21.png",
    title: "iphone cover ",
    price: "$9",
  },
  {
    id: 19,
    img: "/assets/product/iphone/27.png",
    title: "iphone charger",
    price: "$49",
  },
  {
    id: 20,
    img: "/assets/product/iphone/25.png",
    title: "Iphone glass",
    price: "$3",
  },
  {
    id: 21,
    img: "/assets/product/iphone/24.png",
    title: "Iphone glass",
    price: "$2",
  },
  {
    id: 22,
    img: "/assets/product/iphone/22.png",
    title: "inpods",
    price: "$12",
  },
  
];

const Apple = () => {
  return (
    <div className=" bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <div className="mt-9">
        <div>
          <div className="container ">
            <Banner2 />
            {/* Header section */}
            <Header title={"Our Products"} 
            subtitle={"---< Apple >---"}/>
            {/* Body section */}
            <ProductsData2 data={ProductData} />
          
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Apple;
