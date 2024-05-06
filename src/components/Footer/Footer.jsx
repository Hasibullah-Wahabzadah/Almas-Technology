import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaSquareWhatsapp,
  FaLocationArrow,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import "./shadow.css";
const Footer = () => {
  return (
    <div className="dark:bg-gray-950 " id="footer">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-5">
          {/* company details */}
          <div className="py-8 px-4 md:col-span-1">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl Yellowtail sm:text-4xl "
            >
              Almas Technology
            </a>
            <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3 sm:text-sm lg:text-[20px] ">
              Welcome to our online store! Here you can enjoy a wide range of
              high-quality mobile and computer products. With our team`s full
              dedication to providing the best services, we make online shopping
              a simple and coveninet experience for you. Stay with us and take
              advantage of special offers and unique discounts.
            </p>
            <p className="text-gray-500 mt-4 text-2xl sm:text-3xl Yellowtail font-semibold">
              Developer Hasibullah Wahabzadah
            </p>
            <a
              href="https://t.me/HWE0040"
              target="_blank"
              className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-xm rounded-full font-semibold"
            >
              Contact with me
            </a>
          </div>

          {/* Footer links */}
          <div className=" container md:col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-[8px] text-black dark:text-white">
            {/* Company Address */}
            <div className="py-9  ">
              <h1 className="text-2xl font-bold mb-3">Address</h1>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-2 font-semibold py-2">
                  <FaLocationArrow className="text-2xl" />
                  <p>Herat, Afganastan</p>
                </div>
                <div className="flex items-center gap-2 font-semibold py-2">
                  <FaMobileAlt className="text-2xl" />
                  <p>+93794454095</p>
                </div>
                <div className="flex items-center gap-2 font-semibold py-2">
                  <FaMobileAlt className="text-2xl" />
                  <p>+93728223784</p>
                </div>
                <div className="flex items-center mt-2  font-semibold py-2">
                  <MdEmail className="text-2xl " />
                  <a href="/" className="w-[1px]  hover:text-primary duration-300">
                    hasibullahwahabzadah@gmail.com
                  </a>
                </div>

                {/* social links */}
                <div className="flex items-center gap-5">
                  <a href="https://www.instagram.com/hasibullah_wahabzadeh/">
                    <FaInstagram className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="https://www.facebook.com/HasibullahWahabzadeh">
                    <FaFacebook className="text-3xl hover:text-primary duration-200" />
                  </a>
                  <a href="https://github.com/Hasibullah-Wahabzadah">
                    <FaGithubSquare className="text-3xl hover:text-primary duration-200" />
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=93794454095">
                    <FaSquareWhatsapp className="text-3xl hover:text-primary duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div
              className="md:pl-9 px-9  py-6 rounded-xl text-black dark:text-white font-semibold">
              <p className=" flex mb-4 text-xl sm:text-3xl ">
                Important Linke
              </p>
              <div className="">
              <div className="flex items-center py-2 text-1xl font-semibold  hover:text-primary duration-300">
                  
                  <a href="/#">Home</a>
                </div>
                <div className="flex items-center py-2 text-1xl font-semibold  hover:text-primary duration-300">
                  
                  <a href="/#shop">Shop</a>
                </div>
                <div className="flex items-center py-2 text-1xl font-semibold  hover:text-primary duration-300">
                  
                  <a href="/#brand">Brands</a>
                </div>
                <div className="flex items-center py-2 text-1xl font-semibold  hover:text-primary duration-300">
                  
                  <a href="/Blogs">Products</a>
                </div>
                <div className="flex items-center mt-2 py-2 text-1xl ">
                  
                  <a  href="/#samsung" className="w-[1px] font-semibold  hover:text-primary duration-300">
                  Samsung
                  </a>
                </div>
                <div className="flex items-center mt-2 py-2 text-1xl font-semibold  hover:text-primary duration-300">
                  
                  <a  href="/#apple" className="w-[1px]">
                  Apple
                  </a>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" text-black dark:text-white pt-3 pb-3  flex justify-center hero-bg-color1">
        <i className="text-xl sm:text-2xl"> <span > &copy; </span></i>
        <p className="text-[16px] sm:text-[22px]">
          2024 Developer Hasibullah Wahabzadah | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
