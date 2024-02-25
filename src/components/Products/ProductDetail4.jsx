import React from "react";
import { useParams } from "react-router-dom";

import Img1 from "../../assets/product/Samsung/p1.png";
import Img2 from "../../assets/product/Samsung/p2.png";
import Img3 from "../../assets/product/Samsung/p3.png";
import Img4 from "../../assets/product/Samsung/p4.png";
import Img5 from "../../assets/product/Samsung/Tab-1.png";
import Img6 from "../../assets/product/Samsung/Tab-2.png";
import Img7 from "../../assets/product/Samsung/Tab-3.png";
import Img8 from "../../assets/product/Samsung/Tab-4.png";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const ProductDetail4 = () => {
  const { id } = useParams(1);

  const products = [
    {
      id: 1,
      title: "Samsung Galaxy S21 Ultra",
      price: "$1200",
      description: " adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img1,
    },
    {
      id: 2,
      title: "Samsung Galaxy A33",
      price: "$599",
      description: " adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img2,
    },
    {
      id: 3,
      title: "Samsung Galaxy A33",
      price: "$599",
      description: " adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img3,
    },
    {
      id: 4,
      title: "Samsung Galaxy A33",
      price: "$599",
      description: " adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img4,
    },
    {
      id: 5,
      title: "Samsung Galaxy A33",
      price: "$599",
      description: " adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img5,
    },
    {
      id: 6,
      title: "Samsung Galaxy A33",
      price: "$599",
      description: " adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img6,
    },
    {
      id: 7,
      title: "Samsung Galaxy A33",
      price: "$599",
      description: " adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img7,
    },
    {
      id: 8,
      title: "Samsung ",
      price: "$599",
      description: " adipisicing elit. Provident fugit nesciunt saepe magni corrupti atque architecto commodi qui, inventore accusantium doloribus dolorem impedit, iste tempora!",
      Image: Img8,
    },
    
  ];

  const product3 = products.find((product3) => product3.id === parseInt(id));

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <div className="container bottom-auto mt-6 grid grid-cols-1 lg:grid-cols-2 ">
        <div className="flex justify-center items-center">
          <img
            src={product3.Image}
            alt={product3.title}
            className="w-[500px] h-[500px]  rounded-xl hero-bg-color"
          />
        </div>
        <div className="flex flex-col justify-center px-9 hero-bg-color rounded-xl ">
          <h2 className="text-2xl lg:text-4xl font-bold ">{product3.title}</h2>
          <p className="text-xl lg:text-2xl">Price: {product3.price}</p>
          <p className="text-lg lg:text-xl">{product3.description}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail4;
