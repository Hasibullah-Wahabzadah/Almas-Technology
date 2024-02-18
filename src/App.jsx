import React from 'react'

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import LandingPage from './components/LandingPage/LandingPage';
import Category from './components/Category/Category';
import Category2 from './components/Category/Category2';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner'
import Banner2 from './components/Banner/Banner2'
import Products from './components/Products/Products';
import Products2 from './components/Products/Products2';



const App = () => {
  return (
  <div className='bg-white dark:bg-gray-900 dark:text-white
  duration-200 '>

    <Navbar />
    <LandingPage/>
    <Hero />
    <Category/>
    <Category2/>
    <Services />
    <Banner />
    <Products />
    <Banner2 />
    <Products2 />
  </div>
  );
}

export default App