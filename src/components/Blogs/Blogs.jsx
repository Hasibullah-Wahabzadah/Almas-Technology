import React from 'react'
import Header from '../Shared/Header'
import ProductsCart1 from '../producs2/ProductsData1'

import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'


// Products

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
  {
    id: 23,
    img: "/assets/product/Samsung/Laptop-1.png",
    title: "Galaxy Book 3",
    price: " $299",
  },
  {
    id: 24,
    img:"/assets/product/Samsung/Laptop-2.png",
    title: "Galaxy Book3 360 ",
    price: "$949",
  },
  {
    id: 25,
    img: "/assets/product/Samsung/Laptop-3.png",
    title: "Galaxy Book3 pro ",
    price: "$1,099",
  },
  {
    id: 26,
    img: "/assets/product/Samsung/Laptop-4.png",
    title: "Galaxy Book3 360 pro",
    price: "$1,834",
  },
  {
    id: 27,
    img: "/assets/product/Samsung/21.png",
    title: "Smart watche Active",
    price: "$250",
  },
  {
    id: 28,
    img: "/assets/product/Samsung/22.png",
    title: "Smart watche ",
    price: "$350",
  },
  {
    id: 29,
    img: "/assets/product/Samsung/23.png",
    title: "Smart watche",
    price: "$400",
  },
  {
    id: 30,
    img: "/assets/product/Samsung/10.png",
    title: "Samsung charger",
    price: "$19 ",
  },

  {
    id: 31,
    img: "/assets/product/Samsung/9.png",
    title: "Power Bank",
    price: "$34",
  },
  {
    id: 32,
    img: "/assets/product/Samsung/20.png",
    title: "Cable",
    price: "$4",
  },
  {
    id: 33,
    img: "/assets/product/Samsung/18.png",
    title: "Galaxy Tab S3",
    price: "$199",
  },
  {
    id: 34,
    img: "/assets/product/Samsung/13.png",
    title: "Galaxy Tab",
    price: "$109",
  },
  {
    id: 35,
    img: "/assets/product/Samsung/14.png",
    title: "Galaxy Tab A7",
    price: "$809",
  },
  {
    id: 36,
    img: "/assets/product/Samsung/11.png",
    title: "Galaxy Note 10",
    price: "$494",
  },
  {
    id: 37,
    img: "/assets/product/Samsung/12.png",
    title: "Galaxy Note 20",
    price: "$599",
  },
  {
    id: 38,
    img: "/assets/product/Samsung/19.png",
    title: "Galaxy A10s",
    price: "$149",
  },

  {
    id: 39,
    img: "/assets/product/Samsung/17.png",
    title: "Galaxy M11",
    price: "$134",
  },
  {
    id: 40,
    img: "/assets/product/Samsung/16.png",
    title: "Galaxy A50",
    price: "$194",
  },
  {
    id: 41,
    img: "/assets/product/Samsung/6.png",
    title: "Galaxy glass",
    price: "$3",
  },
  {
    id: 42,
    img: "/assets/product/Samsung/2.png",
    title: "inpod",
    price: "$10",
  },
  {
    id: 43,
    img: "/assets/product/Samsung/7.png",
    title: "Tab cover",
    price: "$14",
  },
  {
    id: 44,
    img: "/assets/product/Samsung/3.png",
    title: "Galaxy glass",
    price: "$4",
  },
];

const Blogs = () => {
  return (
    <div>
      <Navbar/>
    <div className='bg-white dark:bg-gray-900'>
      {/* <Blogs2/> */}
      <Header
            title={"Our Products"}
            subtitle={" ---< Find the best brand here >---"}
            />
        <div className="container ">

            {/* Body section */}
            <ProductsCart1 data={ProductData}/>
           
            
        </div>
        <Footer/>
    </div>
    </div>
  )
}

export default Blogs