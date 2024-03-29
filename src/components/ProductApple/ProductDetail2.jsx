import React from "react";
import { useParams } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const ProductDetail2 = () => {
  const { id } = useParams(0);

  const products = [
    {
      id: 1,
      title: "MacBook pro M1",
    price: "$1299",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  ",
      Image: "/assets/product/iphone/1.png",
    },
    {
      id: 2,
      title: "MacBook pro Air",
    price: "$999",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  ",
      Image: "/assets/product/iphone/2.png",
    },
    {
      id: 3,
      title: "MacBook pro 16",
    price: "$2399",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  ",
      Image: "/assets/product/iphone/3.png",
    },
    {
      id: 4,
      title: "MacBook pro 13",
      price: "$1399",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  ",
      Image: "/assets/product/iphone/4.png",
    },
    {
      id: 5,
      title: "iphone 7",
      price: "$399",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  ",
      Image: "/assets/product/iphone/28.png",
    },
    {
      id: 6,
      title: "iphone 8",
    price: "$499",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  ",
      Image: "/assets/product/iphone/29.png",
    },
    {
      id: 7,
      title: "iphone xs",
      price: "$999 ",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  ",
      Image: "/assets/product/iphone/30.png",
    },
    {
      id: 8,
      title: "iphone 5",
      price: "$100 ",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  ",
      Image: "/assets/product/iphone/38.png",
    },
    {
      id: 9,
      title: "iphone 6",
      price: "$199",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  ",
      Image: "/assets/product/iphone/39.png",
    },
    {
      id: 10,
      title: "ipad pro ",
    price: "$494",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  ",
      Image: "/assets/product/iphone/35.png",
    },
    {
      id: 11,
      title: "Fitbit Versa 3",
    price: "$229",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  ",
      Image:"/assets/product/iphone/31.png",
    },
    {
      id: 12,
      title: "Apple Watch SE",
      price: "$279",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  ",
      Image: "/assets/product/iphone/32.png",
    },
    {
      id: 13,
      title: "Apple Watch Series 6",
    price: "$399",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  ",
      Image: "/assets/product/iphone/33.png",
    },
    {
      id: 14,
      title: "Grmin Venu Sq",
    price: "$199",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  ",
      Image: "/assets/product/iphone/34.png",
    },
    {
      id: 15,
      title: "Samsung Galaxy A33",
      price: "$599",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  ",
      Image: "/assets/product/iphone/37.png",
    },
    {
      id: 16,
      title: "Power Bank Wireless Qi",
      price: "$100",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  ",
      Image: "/assets/product/iphone/36.png",
    },
    {
      id: 17,
      title: "ipad cover",
    price: "$12",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  ",
      Image: "/assets/product/iphone/26.png",
    },
    {
      id: 18,
      title: "iphone cover ",
    price: "$9",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  ",
      Image: "/assets/product/iphone/21.png",
    },
    {
      id: 19,
      title: "iphone charger",
    price: "$49",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  ",
      Image: "/assets/product/iphone/27.png",
    },
    {
      id: 20,
      title: "Iphone glass",
      price: "$3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  ",
      Image: "/assets/product/iphone/25.png",
    },
    {
      id: 21,
      title: "Iphone glass",
      price: "$2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  ",
      Image: "/assets/product/iphone/24.png",
    },
    {
      id: 22,
      title: "inpods",
    price: "$12",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  ",
      Image: "/assets/product/iphone/22.png",
    },
   
  ];

  const product1 = products.find((product1) => product1.id === parseInt(id));

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <div className="container bottom-auto mt-6 grid grid-cols-1 lg:grid-cols-2 ">
        <div className="flex justify-center items-center"
       
        >
          <img
            src={product1.Image}
            alt={product1.title}
            className="w-[500px] h-[500px]  rounded-xl hero-bg-color"
          />
        </div>
        <div className="flex flex-col justify-center px-9 hero-bg-color rounded-xl "  >
          <h2 className="text-2xl lg:text-4xl font-bold ">{product1.title}</h2>
          <p className="text-xl lg:text-2xl">Price: {product1.price}</p>
          <p className="text-lg lg:text-xl opacity-80">{product1.description}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail2;
