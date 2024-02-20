import React from 'react'
import Header from '../Shared/Header'
import ProductsData from './ProductsData'

     // images import

import Img1 from '../../assets/product/iphone/16-1.png'
import Img2 from '../../assets/product/iphone/16-2.png'
import Img3 from '../../assets/product/iphone/14.png'
import Img4 from '../../assets/product/iphone/15-1.png'
import Img5 from '../../assets/product/iphone/17.png'
import Img6 from '../../assets/product/iphone/18.png'
import Img7 from '../../assets/product/iphone/19.png'
import Img8 from '../../assets/product/iphone/20.png'
import Img9 from '../../assets/product/iphone/1.png'
import Img10 from '../../assets/product/iphone/2.png'
import Img11 from '../../assets/product/iphone/3.png'
import Img12 from '../../assets/product/iphone/4.png'


const ProductData = [
  {
    id: 1,
    img: Img1,
    title: "iphone 11 pro max",
    price: "$400",
    
  },
  {
    id: 2,
    img: Img2,
    title: "iphone 13 pro max",
    price: "$699",
    
  },
  {
    id: 3,
    img: Img3,
    title: "iphone 14 pro max",
    price: "$899",
    
  },
  {
    id: 4,
    img: Img4,
    title: "iphone 15 pro max",
    price: "$999",
   
  },
];

  const ProductData2 =[
  {
    id: 1,
    img: Img5,
    title: "ipad Air",
    price: "$599",
    
  },
  {
    id: 2,
    img: Img6,
    title: "ipad pro M2",
    price: "$1,099",
    
  },
  {
    id: 3,
    img: Img7,
    title: "ipad pro",
    price: "$799",
    
  },
  {
    id: 4,
    img: Img8,
    title: "ipad 9th",
    price: "$329 ",
    
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
    title: "MackBook M2 pro",
    price: "$2,094",
    
  },
  {
    id: 3,
    img: Img11,
    title: "MacBook Air 13",
    price: "$999",
    
  },
  {
    id: 3,
    img: Img12,
    title: "Samsung Book3 360",
    price: "$949",
    
  },
];

const Products2 = () => {
  return (
    <div>
        <div className="container ">
            {/* Header section */}
            <Header
            title={"Our Products"}
            subtitle={"---< Apple >---"}
            />
            {/* Body section */}
            <ProductsData data={ProductData}/>
            <ProductsData data={ProductData2}/>
            <ProductsData data={ProductData3}/>
        </div>
    </div>
  )
}

export default Products2