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
              className="text-primary font-semibold tracking-widest text-2xl Yellowtail sm:text-4xl"
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
            <p className="text-gray-500 mt-4 text-2xl sm:text-3xl Yellowtail">
              Developer Hasibullah Wahabzadah
            </p>
            <a
              href="https://t.me/HWE0040"
              target="_blank"
              className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-xm rounded-full"
            >
              Contact with me
            </a>
          </div>

          {/* Footer links */}
          <div className="md:col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-[8px] text-black dark:text-white">
            {/* Company Address */}
            <div className="py-9  ">
              <h1 className="text-2xl font-bold mb-3">Address</h1>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-2">
                  <FaLocationArrow className="text-2xl" />
                  <p>Herat, Afganastan</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaMobileAlt className="text-2xl" />
                  <p>+93794454095</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaMobileAlt className="text-2xl" />
                  <p>+93728223784</p>
                </div>
                <div className="flex items-center mt-2 ">
                  <MdEmail className="text-2xl " />
                  <a href="/" className="w-[1px]">
                    hasibullahwahabzadah@gmail.com
                  </a>
                </div>

                {/* social links */}
                <div className="flex items-center gap-3">
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
              className="md:pl-9 px-9 hero-bg-color py-6 rounded-xl border shadow-animation drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] 
          "
            >
              <p className=" justify-center flex  mb-4 text-xl sm:text-3xl drop-shadow-[-8px_10px_6px_rgba(0,0,0,1.4)]">
                Contact Me
              </p>
              <input
                type="text"
                placeholder="Name"
                className="form-input1 w-full mb-4 rounded-xl shadow-animation"
              />
              <input
                type="email"
                placeholder="Email"
                className="form-input1 w-full mb-4 rounded-xl shadow-animation"
              />
              <input
                type="password"
                placeholder="Password"
                className="form-input1 w-full mb-4 rounded-xl shadow-animation"
              />
              <textarea
                type="Message"
                name="Message"
                placeholder="Message"
                id="#"
                className="form-input1 text-gray-400 w-full rounded-xl shadow-animation"
              />

              <div className="flex justify-center">
                <button className="flex justify-center bg-primary/90 text-white py-1 px-4 text-xm rounded-full shadow-animation">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" text-black dark:text-white pt-3 pb-3 text-2xl sm:text-x flex justify-center hero-bg-color1">
        <i className="text-xl sm:text-2xl"> &copy; </i>

        <p className="text-[16px] sm:text-[22px]">
          2024 Developer Hasibullah Wahabzadah | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
