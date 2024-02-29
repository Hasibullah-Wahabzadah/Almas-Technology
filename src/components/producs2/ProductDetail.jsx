import React from "react";
import { useParams } from "react-router-dom";

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
import Img23 from "../../assets/product/Samsung/Laptop-1.png";
import Img24 from "../../assets/product/Samsung/Laptop-2.png";
import Img25 from "../../assets/product/Samsung/Laptop-3.png";
import Img26 from "../../assets/product/Samsung/Laptop-4.png";
import Img27 from "../../assets/product/Samsung/21.png";
import Img28 from "../../assets/product/Samsung/22.png";
import Img29 from "../../assets/product/Samsung/23.png";
import Img30 from "../../assets/product/Samsung/10.png";
import Img31 from "../../assets/product/Samsung/9.png";
import Img32 from "../../assets/product/Samsung/20.png";
import Img33 from "../../assets/product/Samsung/18.png";
import Img34 from "../../assets/product/Samsung/13.png";
import Img35 from "../../assets/product/Samsung/14.png";
import Img36 from "../../assets/product/Samsung/11.png";
import Img37 from "../../assets/product/Samsung/12.png";
import Img38 from "../../assets/product/Samsung/19.png";
import Img39 from "../../assets/product/Samsung/17.png";
import Img40 from "../../assets/product/Samsung/16.png";
import Img41 from "../../assets/product/Samsung/6.png";
import Img42 from "../../assets/product/Samsung/2.png";
import Img43 from "../../assets/product/Samsung/7.png";
import Img44 from "../../assets/product/Samsung/3.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const ProductDetail = () => {
  const { id } = useParams(0);

  const products = [
    {
      id: 1,
      title: "MacBook pro M1",
    price: "$1299",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img1,
    },
    {
      id: 2,
      title: "MacBook pro Air",
    price: "$999",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img2,
    },
    {
      id: 3,
      title: "MacBook pro 16",
      price: "$2399",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img3,
    },
    {
      id: 4,
      title: "MacBook pro 13",
    price: "$1399",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img4,
    },
    {
      id: 5,
      title: "iphone 7",
      price: "$399",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img5,
    },
    {
      id: 6,
      title: "iphone 8",
      price: "$499",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img6,
    },
    {
      id: 7,
      title: "iphone xs",
    price: "$999 ",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img7,
    },
    {
      id: 8,
      title: "iphone 5",
      price: "$100 ",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img8,
    },
    {
      id: 9,
      title: "iphone 6",
      price: "$199",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img9,
    },
    {
      id: 10,
      title: "ipad pro ",
    price: "$494",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img10,
    },
    {
      id: 11,
      title: "Fitbit Versa 3",
      price: "$229",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img11,
    },
    {
      id: 12,
      title: "Apple Watch SE",
    price: "$279",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img12,
    },
    {
      id: 13,
      title: "Apple Watch Series 6",
    price: "$399",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img13,
    },
    {
      id: 14,
      title: "Grmin Venu Sq",
    price: "$199",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img14,
    },
    {
      id: 15,
      title: "Power Bank",
    price: "$89",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img15,
    },
    {
      id: 16,
      title: "Power Bank Wireless Qi",
      price: "$100",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img16,
    },
    {
      id: 17,
      title: "ipad cover",
    price: "$12",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img17,
    },
    {
      id: 18,
      title: "iphone cover ",
      price: "$9",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img18,
    },
    {
      id: 19,
      title: "iphone charger",
    price: "$49",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img19,
    },
    {
      id: 20,
      title: "Iphone glass",
    price: "$3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img20,
    },
    {
      id: 21,
      title: "Iphone glass",
    price: "$2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img21,
    },
    {
      id: 22,
      title: "inpods",
      price: "$12",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img22,
    },
    {
      id: 23,
      title: "Galaxy Book 3",
    price: " $299",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img23,
    },
    {
      id: 24,
      title: "Galaxy Book3 360 ",
    price: "$949",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img24,
    },
    {
      id: 25,
      title: "Galaxy Book3 pro ",
      price: "$1,099",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img25,
    },
    {
      id: 26,
      title: "Galaxy Book3 360 pro",
      price: "$1,834",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img26,
    },
    {
      id: 27,
      title: "Smart watche Active",
    price: "$250",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img27,
    },
    {
      id: 28,
      title: "Smart watche ",
    price: "$350",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img28,
    },
    {
      id: 29,
      title: "Smart watche",
    price: "$400",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img29,
    },
    {
      id: 30,
      title: "Samsung charger",
      price: "$19 ",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img30,
    },
    {
      id: 31,
      title: "Power Bank",
    price: "$34",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img31,
    },
    {
      id: 32,
      title: "Cable",
    price: "$4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img32,
    },
    {
      id: 33,
      title: "Galaxy Tab S3",
    price: "$199",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img33,
    },
    {
      id: 34,
      title: "Galaxy Tab",
    price: "$109",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img34,
    },
    {
      id: 35,
      title: "Galaxy Tab A7",
      price: "$809",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img35,
    },
    {
      id: 36,
      title: "Galaxy Note 10",
    price: "$494",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img36,
    },
    {
      id: 37,
      title: "Galaxy Note 20",
    price: "$599",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img37,
    },
    {
      id: 38,
      title: "Galaxy A10s",
      price: "$149",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img38,
    },
    {
      id: 39,
      title: "Galaxy M11",
      price: "$134",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img39,
    },
    {
      id: 40,
      title: "Galaxy A50",
      price: "$194",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img40,
    },
    {
      id: 41,
      title: "Galaxy glass",
    price: "$3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img41,
    },
    {
      id: 42,
      title: "inpod",
    price: "$10",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img42,
    },
    {
      id: 43,
      title: "Tab cover",
      price: "$14",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img43,
    },
    {
      id: 44,
      title: "Galaxy glass",
      price: "$4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img44,
    },
  ];

  const product = products.find((product) => product.id === parseInt(id));

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <div className="container bottom-auto mt-6 grid grid-cols-1 lg:grid-cols-2 "
      >
        <div className="flex justify-center items-center"
        
        >
          <img
            src={product.Image}
            alt={product.title}
            className="w-[500px] h-[500px]  rounded-xl hero-bg-color"
          />
        </div>
        <div className="flex flex-col justify-center px-9 hero-bg-color rounded-xl " 
       
        >
          <h2 className="text-2xl lg:text-4xl font-bold ">{product.title}</h2>
          <p className="text-xl lg:text-2xl">Price: {product.price}</p>
          <p className="text-lg lg:text-xl opacity-80">{product.description}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
