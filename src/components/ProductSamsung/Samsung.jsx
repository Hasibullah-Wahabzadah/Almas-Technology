import React from "react";
import Header from "../Shared/Header";
import ProductsData3 from "./ProductsData3";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";

// images import

import Img1 from "../../assets/product/Samsung/Laptop-1.png";
import Img2 from "../../assets/product/Samsung/Laptop-2.png";
import Img3 from "../../assets/product/Samsung/Laptop-3.png";
import Img4 from "../../assets/product/Samsung/Laptop-4.png";
import Img5 from "../../assets/product/Samsung/21.png";
import Img6 from "../../assets/product/Samsung/22.png";
import Img7 from "../../assets/product/Samsung/23.png";
import Img8 from "../../assets/product/Samsung/10.png";
import Img9 from "../../assets/product/Samsung/9.png";
import Img10 from "../../assets/product/Samsung/20.png";
import Img11 from "../../assets/product/Samsung/18.png";
import Img12 from "../../assets/product/Samsung/13.png";
import Img13 from "../../assets/product/Samsung/14.png";
import Img14 from "../../assets/product/Samsung/11.png";
import Img15 from "../../assets/product/Samsung/12.png";
import Img16 from "../../assets/product/Samsung/19.png";
import Img17 from "../../assets/product/Samsung/17.png";
import Img18 from "../../assets/product/Samsung/16.png";
import Img19 from "../../assets/product/Samsung/6.png";
import Img20 from "../../assets/product/Samsung/2.png";
import Img21 from "../../assets/product/Samsung/7.png";
import Img22 from "../../assets/product/Samsung/3.png";

const ProductData = [
  {
    id: 1,
    img: Img1,
    title: "Galaxy Book 3",
    price: " $299",
  },
  {
    id: 2,
    img: Img2,
    title: "Galaxy Book3 360 ",
    price: "$949",
  },
  {
    id: 3,
    img: Img3,
    title: "Galaxy Book3 pro ",
    price: "$1,099",
  },
  {
    id: 4,
    img: Img4,
    title: "Galaxy Book3 360 pro",
    price: "$1,834",
  },
  {
    id: 5,
    img: Img5,
    title: "Smart watche Active",
    price: "$250",
  },
  {
    id: 6,
    img: Img6,
    title: "Smart watche ",
    price: "$350",
  },
  {
    id: 7,
    img: Img7,
    title: "Smart watche",
    price: "$400",
  },
  {
    id: 8,
    img: Img8,
    title: "Samsung charger",
    price: "$19 ",
  },

  {
    id: 9,
    img: Img9,
    title: "Power Bank",
    price: "$34",
  },
  {
    id: 10,
    img: Img10,
    title: "Cable",
    price: "$4",
  },
  {
    id: 11,
    img: Img11,
    title: "Galaxy Tab S3",
    price: "$199",
  },
  {
    id: 12,
    img: Img12,
    title: "Galaxy Tab",
    price: "$109",
  },
  {
    id: 13,
    img: Img13,
    title: "Galaxy Tab A7",
    price: "$809",
  },
  {
    id: 14,
    img: Img14,
    title: "Galaxy Note 10",
    price: "$494",
  },
  {
    id: 15,
    img: Img15,
    title: "Galaxy Note 20",
    price: "$599",
  },
  {
    id: 16,
    img: Img16,
    title: "Galaxy A10s",
    price: "$149",
  },

  {
    id: 17,
    img: Img17,
    title: "Galaxy M11",
    price: "$134",
  },
  {
    id: 18,
    img: Img18,
    title: "Galaxy A50",
    price: "$194",
  },
  {
    id: 19,
    img: Img19,
    title: "Galaxy glass",
    price: "$3",
  },
  {
    id: 20,
    img: Img20,
    title: "inpod",
    price: "$10",
  },
  {
    id: 21,
    img: Img21,
    title: "Tab cover",
    price: "$14",
  },
  {
    id: 22,
    img: Img22,
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
