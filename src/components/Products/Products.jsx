import React from 'react'
import Header from '../Shared/Header'
import ProductsData from './ProductsData'

     // images import

import Img1 from '../../assets/product/Samsung/p1.png'
import Img2 from '../../assets/product/Samsung/p2.png'
import Img3 from '../../assets/product/Samsung/p3.png'
import Img4 from '../../assets/product/Samsung/p4.png'
import Img5 from '../../assets/product/Samsung/Tab-1.png'
import Img6 from '../../assets/product/Samsung/Tab-2.png'
import Img7 from '../../assets/product/Samsung/Tab-3.png'
import Img8 from '../../assets/product/Samsung/Tab-4.png'
import Img9 from '../../assets/product/Samsung/Laptop-1.png'
import Img10 from '../../assets/product/Samsung/Laptop-2.png'
import Img11 from '../../assets/product/Samsung/Laptop-3.png'
import Img12 from '../../assets/product/Samsung/Laptop-4.png'


const ProductData = [
  {
    id: 1,
    img: Img1,
    title: "Galaxy S21 Ultra",
    price: "$500",
    
  },
  {
    id: 2,
    img: Img2,
    title: "Galaxy A33",
    price: "$299",
    
  },
  {
    id: 3,
    img: Img3,
    title: "Galaxy Note 9",
    price: "$300",
    
  },
  {
    id: 4,
    img: Img4,
    title: "Galaxy S22 Ultra",
    price: "$700",
   
  },
];

  const ProductData2 =[
  {
    id: 1,
    img: Img5,
    title: "Galaxy Tab A8",
    price: "$599",
    
  },
  {
    id: 2,
    img: Img6,
    title: "Galaxy Tab A9",
    price: "$700",
    
  },
  {
    id: 3,
    img: Img7,
    title: "Galaxy Tab S7",
    price: "$575",
    
  },
  {
    id: 4,
    img: Img8,
    title: "Galaxy S6",
    price: "$540",
    
  },
];
const ProductData3 =[
  {
    id: 1,
    img: Img9,
    title: "Samsung Book3 360 pro",
    price: "$1,834",
    
  },
  {
    id: 2,
    img: Img10,
    title: "Samaung Book3 pro",
    price: "$1,099",
    
  },
  {
    id: 3,
    img: Img11,
    title: "Samsung Book3",
    price: "$999",
    
  },
  {
    id: 3,
    img: Img12,
    title: "Samsung Book3 360",
    price: "$949",
    
  },
];

const Products = () => {
  return (
    <div>
        <div className="container" id='shop'>
            {/* Header section */}
            <Header
            title={"Our Products"}
            subtitle={" ---< Samsung >---"}
            />
            {/* Body section */}
            <ProductsData data={ProductData}/>
            <ProductsData data={ProductData2}/>
            <ProductsData data={ProductData3}/>
        </div>
    </div>
  )
}

export default Products