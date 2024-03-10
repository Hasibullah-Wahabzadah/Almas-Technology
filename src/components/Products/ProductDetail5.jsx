import React from "react";
import { useParams } from "react-router-dom";



import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const ProductDetail5 = () => {
  const { id } = useParams(0);

  const products = [
    {
      id: 1,
      title: "Samsung Galaxy S21 Ultra",
      price: "$1200",
      description: "  corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: "/assets/product/iphone/16-1.png",
    },
    {
      id: 2,
      title: "Samsung Galaxy A33",
      price: "$599",
      description: "  corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: "/assets/product/iphone/16-2.png",
    },
    {
      id: 3,
      title: "Samsung Galaxy A33",
      price: "$599",
      description: "  corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: "/assets/product/iphone/14.png",
    },
    {
      id: 4,
      title: "Samsung Galaxy A33",
      price: "$599",
      description: "  corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: "/assets/product/iphone/15-1.png",
    },
    {
      id: 5,
      title: "Samsung Galaxy A33",
      price: "$599",
      description: "  corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: "/assets/product/iphone/17.png",
    },
    {
      id: 6,
      title: "Samsung Galaxy A33",
      price: "$599",
      description: "  corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: "/assets/product/iphone/18.png",
    },
    {
      id: 7,
      title: "Samsung Galaxy A33",
      price: "$599",
      description: "  corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: "/assets/product/iphone/19.png",
    },
    {
      id: 8,
      title: "Samsung Galaxy A33",
      price: "$599",
      description: "  corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: "/assets/product/iphone/20.png",
    },
 
  ];

  const product4 = products.find((product4) => product4.id === parseInt(id));

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <div className="container bottom-auto mt-6 grid grid-cols-1 lg:grid-cols-2 ">
        <div className="flex justify-center items-center"
        
        >
          <img
            src={product4.Image}
            alt={product4.title}
            className="w-[500px] h-[500px]  rounded-xl hero-bg-color"
          />
        </div>
        <div className="flex flex-col justify-center px-9 hero-bg-color rounded-xl "
       
        >
          <h2 className="text-2xl lg:text-4xl font-bold ">{product4.title}</h2>
          <p className="text-xl lg:text-2xl">Price: {product4.price}</p>
          <p className="text-lg lg:text-xl opacity-80">{product4.description}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail5;
