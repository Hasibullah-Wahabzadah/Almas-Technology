import React from 'react'
import Header from '../Shared/Header'
import ProductsCart1 from '../producs2/ProductsData1'


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
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
// import Blogs2 from './Bolgs2';



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
  {
    id: 23,
    img: Img23,
    title: "Galaxy Book 3",
    price: " $299",
  },
  {
    id: 24,
    img: Img24,
    title: "Galaxy Book3 360 ",
    price: "$949",
  },
  {
    id: 25,
    img: Img25,
    title: "Galaxy Book3 pro ",
    price: "$1,099",
  },
  {
    id: 26,
    img: Img26,
    title: "Galaxy Book3 360 pro",
    price: "$1,834",
  },
  {
    id: 27,
    img: Img27,
    title: "Smart watche Active",
    price: "$250",
  },
  {
    id: 28,
    img: Img28,
    title: "Smart watche ",
    price: "$350",
  },
  {
    id: 29,
    img: Img29,
    title: "Smart watche",
    price: "$400",
  },
  {
    id: 30,
    img: Img30,
    title: "Samsung charger",
    price: "$19 ",
  },

  {
    id: 31,
    img: Img31,
    title: "Power Bank",
    price: "$34",
  },
  {
    id: 32,
    img: Img32,
    title: "Cable",
    price: "$4",
  },
  {
    id: 33,
    img: Img33,
    title: "Galaxy Tab S3",
    price: "$199",
  },
  {
    id: 34,
    img: Img34,
    title: "Galaxy Tab",
    price: "$109",
  },
  {
    id: 35,
    img: Img35,
    title: "Galaxy Tab A7",
    price: "$809",
  },
  {
    id: 36,
    img: Img36,
    title: "Galaxy Note 10",
    price: "$494",
  },
  {
    id: 37,
    img: Img37,
    title: "Galaxy Note 20",
    price: "$599",
  },
  {
    id: 38,
    img: Img38,
    title: "Galaxy A10s",
    price: "$149",
  },

  {
    id: 39,
    img: Img39,
    title: "Galaxy M11",
    price: "$134",
  },
  {
    id: 40,
    img: Img40,
    title: "Galaxy A50",
    price: "$194",
  },
  {
    id: 41,
    img: Img41,
    title: "Galaxy glass",
    price: "$3",
  },
  {
    id: 42,
    img: Img42,
    title: "inpod",
    price: "$10",
  },
  {
    id: 43,
    img: Img43,
    title: "Tab cover",
    price: "$14",
  },
  {
    id: 44,
    img: Img44,
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
            {/* <ProductsCart1 data={ProductData2}/>
            <ProductsCart1 data={ProductData3}/>
            <ProductsCart1 data={ProductData4}/>
            <ProductsCart1 data={ProductData5}/>
            <ProductsCart1 data={ProductData6}/> */}
            
        </div>
        <Footer/>
    </div>
    </div>
  )
}

export default Blogs