import React from "react";
import Header from "../Shared/Header";
import ProductsData3 from "./ProductsData3";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";


const ProductData = [
  {
    id: 1,
    img: "/assets/product/Samsung/Laptop-1.png",
    title: "Galaxy Book 3",
    price: " $299",
  },
  {
    id: 2,
    img: "/assets/product/Samsung/Laptop-2.png",
    title: "Galaxy Book3 360 ",
    price: "$949",
  },
  {
    id: 3,
    img: "/assets/product/Samsung/Laptop-3.png",
    title: "Galaxy Book3 pro ",
    price: "$1,099",
  },
  {
    id: 4,
    img: "/assets/product/Samsung/Laptop-4.png",
    title: "Galaxy Book3 360 pro",
    price: "$1,834",
  },
  {
    id: 5,
    img: "/assets/product/Samsung/21.png",
    title: "Smart watche Active",
    price: "$250",
  },
  {
    id: 6,
    img: "/assets/product/Samsung/22.png",
    title: "Smart watche ",
    price: "$350",
  },
  {
    id: 7,
    img: "/assets/product/Samsung/23.png",
    title: "Smart watche",
    price: "$400",
  },
  {
    id: 8,
    img: "/assets/product/Samsung/10.png",
    title: "Samsung charger",
    price: "$19 ",
  },

  {
    id: 9,
    img: "/assets/product/Samsung/9.png",
    title: "Power Bank",
    price: "$34",
  },
  {
    id: 10,
    img: "/assets/product/Samsung/20.png",
    title: "Cable",
    price: "$4",
  },
  {
    id: 11,
    img: "/assets/product/Samsung/18.png",
    title: "Galaxy Tab S3",
    price: "$199",
  },
  {
    id: 12,
    img: "/assets/product/Samsung/13.png",
    title: "Galaxy Tab",
    price: "$109",
  },
  {
    id: 13,
    img: "/assets/product/Samsung/14.png",
    title: "Galaxy Tab A7",
    price: "$809",
  },
  {
    id: 14,
    img: "/assets/product/Samsung/11.png",
    title: "Galaxy Note 10",
    price: "$494",
  },
  {
    id: 15,
    img: "/assets/product/Samsung/12.png",
    title: "Galaxy Note 20",
    price: "$599",
  },
  {
    id: 16,
    img: "/assets/product/Samsung/19.png",
    title: "Galaxy A10s",
    price: "$149",
  },

  {
    id: 17,
    img: "/assets/product/Samsung/17.png",
    title: "Galaxy M11",
    price: "$134",
  },
  {
    id: 18,
    img: "/assets/product/Samsung/16.png",
    title: "Galaxy A50",
    price: "$194",
  },
  {
    id: 19,
    img: "/assets/product/Samsung/6.png",
    title: "Galaxy glass",
    price: "$3",
  },
  {
    id: 20,
    img: "/assets/product/Samsung/2.png",
    title: "inpod",
    price: "$10",
  },
  {
    id: 21,
    img: "/assets/product/Samsung/7.png",
    title: "Tab cover",
    price: "$14",
  },
  {
    id: 22,
    img: "/assets/product/Samsung/3.png",
    title: "Galaxy glass",
    price: "$4",
  },
];

const Samaung = () => {
  return (
    <div
      className="bg-white dark:bg-gray-900 dark:text-white
    duration-200"
    >
      <Navbar />
      <div className="mt-12">
        <Banner />
        <div className="container ">
          {/* Header section */}
          <Header title={"Our Products"} subtitle={"---< Samaung >---"} />

          {/* Body section */}
          <ProductsData3 data={ProductData} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Samaung;
