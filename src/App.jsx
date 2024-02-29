import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pages from "./Pages";

import Category from "./components/Category/Category";
import Blogs from "./components/Blogs/Blogs";
import ProductDetail from "./components/producs2/ProductDetail";
import Products2 from "./components/Products/Products2";
import Apple from "./components/ProductApple/Apple";
import ProductDetail2 from "./components/ProductApple/ProductDetail2";
import Products from "./components/Products/Products";
import Samsung from "./components/ProductSamsung/Samsung";
import ProductDetail3 from "./components/ProductSamsung/ProductDetail3";
import ProductsData from "./components/Products/ProductsData";
import ProductDetail4 from "./components/Products/ProductDetail4";
import ProductsDatac from "./components/Products/ProductsDatac";
import ProductDetail5 from "./components/Products/ProductDetail5";
// import AOS from "aos";
// import "aos/dist/aos.css";
const App = () => {

  // React.useEffect(() => {
  //   AOS.init({
  //     duration: 800,
  //     easing: "ease-in-sine",
  //     delay: 100,
  //     offset: 100,
  //   });
  //   AOS.refresh();
  // }, []);


  return (

    
    <Router>
      
      <Routes>
        <Route exact path="/" element={<Pages />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/Products2" element={<Products2 />} />
        <Route path="/Apple" element={<Apple />} />
        <Route path="/product1/:id" element={<ProductDetail2 />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Samsung" element={<Samsung />} />
        <Route path="/product2/:id" element={<ProductDetail3 />} />

        <Route path="ProductsData" element={<ProductsData/>}/>
        <Route path="/product3/:id" element={<ProductDetail4 />} />

        <Route path="/ProductsDatac" element={<ProductsDatac/>}/>
        <Route path="/product4/:id" element={<ProductDetail5 />} />
      </Routes>
    </Router>
  );
};

export default App;
