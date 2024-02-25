import React from "react";
import Header from "../Shared/Header";
import ProductsData2 from "./ProductsData2";

// images import

import Img1 from "../../assets/product/iphone/1.png";
import Img2 from "../../assets/product/iphone/2.png";
import Img3 from "../../assets/product/iphone/3.png";
import Img4 from "../../assets/product/iphone/4.png";
import Img5 from "../../assets/product/iphone/28.png";
import Img6 from "../../assets/product/iphone/29.png";
import Img7 from "../../assets/product/iphone/30.png";
import Img8 from "../../assets/product/iphone/38.png";
import Img9 from "../../assets/product/iphone/39.png";
import Img10 from "../../assets/product/iphone/35.png";
import Img11 from "../../assets/product/iphone/31.png";
import Img12 from "../../assets/product/iphone/32.png";
import Img13 from "../../assets/product/iphone/33.png";
import Img14 from "../../assets/product/iphone/34.png";
import Img15 from "../../assets/product/iphone/37.png";
import Img16 from "../../assets/product/iphone/36.png";
import Img17 from "../../assets/product/iphone/26.png";
import Img18 from "../../assets/product/iphone/21.png";
import Img19 from "../../assets/product/iphone/27.png";
import Img20 from "../../assets/product/iphone/25.png";
import Img21 from "../../assets/product/iphone/24.png";
import Img22 from "../../assets/product/iphone/22.png";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Banner2 from "../Banner/Banner2";

const ProductData = [
  {
    id: 1,
    img: Img1,
    title: "MacBook pro M1",
    price: "$1299",
  },
  {
    id: 2,
    img: Img2,
    title: "MacBook pro Air",
    price: "$999",
  },
  {
    id: 3,
    img: Img3,
    title: "MacBook pro 16",
    price: "$2399",
  },
  {
    id: 4,
    img: Img4,
    title: "MacBook pro 13",
    price: "$1399",
  },
  {
    id: 5,
    img: Img5,
    title: "iphone 7",
    price: "$399",
  },
  {
    id: 6,
    img: Img6,
    title: "iphone 8",
    price: "$499",
  },
  {
    id: 7,
    img: Img7,
    title: "iphone xs",
    price: "$999 ",
  },
  {
    id: 8,
    img: Img8,
    title: "iphone 5",
    price: "$100 ",
  },
  {
    id: 9,
    img: Img9,
    title: "iphone 6",
    price: "$199",
  },
  {
    id: 10,
    img: Img10,
    title: "ipad pro ",
    price: "$494",
  },
  {
    id: 11,
    img: Img11,
    title: "Fitbit Versa 3",
    price: "$229",
  },
  {
    id: 12,
    img: Img12,
    title: "Apple Watch SE",
    price: "$279",
  },
  {
    id: 13,
    img: Img13,
    title: "Apple Watch Series 6",
    price: "$399",
  },
  {
    id: 14,
    img: Img14,
    title: "Grmin Venu Sq",
    price: "$199",
  },
  {
    id: 15,
    img: Img15,
    title: "Power Bank",
    price: "$89",
  },
  {
    id: 16,
    img: Img16,
    title: "Power Bank Wireless Qi",
    price: "$100",
  },
  {
    id: 17,
    img: Img17,
    title: "ipad cover",
    price: "$12",
  },
  {
    id: 18,
    img: Img18,
    title: "iphone cover ",
    price: "$9",
  },
  {
    id: 19,
    img: Img19,
    title: "iphone charger",
    price: "$49",
  },
  {
    id: 20,
    img: Img20,
    title: "Iphone glass",
    price: "$3",
  },
  {
    id: 21,
    img: Img21,
    title: "Iphone glass",
    price: "$2",
  },
  {
    id: 22,
    img: Img22,
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
