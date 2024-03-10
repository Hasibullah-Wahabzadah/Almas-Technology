import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const ProductDetail3 = () => {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      title: "Galaxy Book 3",
      price: " $299",
      description: "Lorem ipsum dolor sit .Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit ",
      Image: "/assets/product/Samsung/Laptop-1.png",
    },
    {
      id: 2,
      title: "Galaxy Book3 360 ",
      price: "$949",
      description: "Lorem ipsum dolor sit .Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit ",
      Image: "/assets/product/Samsung/Laptop-2.png",
    },
    {
      id: 3,
      title: "Galaxy Book3 pro ",
      price: "$1,099",
      description: "Lorem ipsum dolor sit .Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit ",
      Image: "/assets/product/Samsung/Laptop-3.png",
    },
    {
      id: 4,
      title: "Galaxy Book3 360 pro",
      price: "$1,834",
      description: "Lorem ipsum dolor sit .Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit ",
      Image: "/assets/product/Samsung/Laptop-4.png",
    },
    {
      id: 5,
      title: "Smart watche Active",
      price: "$250",
      description: "Lorem ipsum dolor sit .Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit ",
      Image: "/assets/product/Samsung/21.png",
    },
    {
      id: 6,
      title: "Smart watche ",
      price: "$350",
      description: "Lorem ipsum dolor sit .Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit ",
      Image: "/assets/product/Samsung/22.png",
    },
    {
      id: 7,
      title: "Smart watche",
      price: "$400",
      description: "Lorem ipsum dolor sit .Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit ",
      Image: "/assets/product/Samsung/23.png",
    },
    {
      id: 8,
      title: "Samsung charger",
      price: "$19 ",
      description: "Lorem ipsum dolor sit .Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit ",
      Image: "/assets/product/Samsung/10.png",
    },
    {
      id: 9,
      title: "Power Bank",
    price: "$34",
      description: "Lorem ipsum dolor sit .Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit ",
      Image: "/assets/product/Samsung/9.png",
    },
    {
      id: 10,
      title: "Cable",
    price: "$4",
      description: "Lorem ipsum dolor sit .Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit ",
      Image: "/assets/product/Samsung/20.png",
    },
    {
      id: 11,
      title: "Galaxy Tab S3",
    price: "$199",
      description: "Lorem ipsum dolor sit .Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit ",
      Image: "/assets/product/Samsung/18.png",
    },
    {
      id: 12,
      title: "Galaxy Tab",
    price: "$109",
      description: "Lorem ipsum dolor sit .Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit ",
      Image: "/assets/product/Samsung/13.png",
    },
    {
      id: 13,
      title: "Galaxy Tab A7",
    price: "$809",
      description: "Lorem ipsum dolor sit .Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit ",
      Image: "/assets/product/Samsung/14.png",
    },
    {
      id: 14,
      title: "Galaxy Note 10",
      price: "$494",
      description: "Lorem ipsum dolor sit .Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit ",
      Image: "/assets/product/Samsung/11.png",
    },
    {
      id: 15,
      title: "Galaxy Note 20",
    price: "$599",
      description: "Lorem ipsum dolor sit .Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit ",
      Image: "/assets/product/Samsung/12.png",
    },
    {
      id: 16,
      title: "Galaxy A10s",
      price: "$149",
      description: "Lorem ipsum dolor sit .Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit ",
      Image: "/assets/product/Samsung/19.png",
    },
    {
      id: 17,
      title: "Galaxy M11",
      price: "$134",
      description: "Lorem ipsum dolor sit .Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit ",
      Image: "/assets/product/Samsung/17.png",
    },
    {
      id: 18,
      title: "Galaxy A50",
    price: "$194",
      description: "Lorem ipsum dolor sit .Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit ",
      Image: "/assets/product/Samsung/16.png",
    },
    {
      id: 19,
      title: "Galaxy glass",
      price: "$3",
      description: "Lorem ipsum dolor sit .Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit ",
      Image: "/assets/product/Samsung/6.png",
    },
    {
      id: 20,
      title: "inpod",
      price: "$10",
      description: "Lorem ipsum dolor sit .Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit ",
      Image: "/assets/product/Samsung/2.png",
    },
    {
      id: 21,
      title: "Tab cover",
    price: "$14",
      description: "Lorem ipsum dolor sit .Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit ",
      Image: "/assets/product/Samsung/7.png",
    },
    {
      id: 22,
      title: "Galaxy glass",
      price: "$4",
      description: "Lorem ipsum dolor sit .Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit ",
      Image: "/assets/product/Samsung/3.png",
    },
  
  ];

  const product2 = products.find((product2) => product2.id === parseInt(id));

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
     
      <div className="container bottom-auto mt-6 grid grid-cols-1 lg:grid-cols-2 ">
        <div className="flex justify-center items-center"
         >
          <img
            src={product2.Image}
            alt={product2.title}
            className="w-[500px] h-[500px]  rounded-xl hero-bg-color"
          />
        </div>
        <div className="flex flex-col justify-center px-9 hero-bg-color rounded-xl "
       
        >
          <h2 className="text-2xl lg:text-4xl font-bold ">{product2.title}</h2>
          <p className="text-xl lg:text-2xl">Price: {product2.price}</p>
          <p className="text-lg lg:text-xl opacity-80">{product2.description}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail3;
