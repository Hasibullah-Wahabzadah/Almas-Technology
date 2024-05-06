import React from "react";

import "./shadow.css";
const Contact = () => {
  return (
    <div>
      <div className="dark:bg-gray-950 " id="footer">
        {/* Contact Form */}
        <div className="grid-cols-2 pt-4 pb-5 grid contact mr-auto items-center justify-center">
          
          <div className="container md:pl-9 px-9 py-6 rounded-xl">
            <p className="text-white  justify-center flex font-semibold  mb-4 text-xl sm:text-3xl drop-shadow-[-8px_10px_6px_rgba(0,0,0,1.4)]">
              Contact Me
            </p>
            <form action="">
              <input
                type="text"
                placeholder="Name"
                className="form-input1 w-full h-11 mb-4 rounded-xl shadow-animation"
              />
              <input
                type="email"
                placeholder="Email"
                className="form-input1 w-full h-11 mb-4 rounded-xl shadow-animation"
              />
              <input
                type="password"
                placeholder="Password"
                className="form-input1 w-full h-11 mb-4 rounded-xl shadow-animation"
              />
              <textarea
                type="Message"
                name="Message"
                placeholder="Message"
                id="#"
                className="form-input1 text-gray-400 h-[200px] w-full rounded-xl shadow-animation"
              />

              <div className="flex justify-center">
                <button className="flex justify-center bg-primary/90 text-white py-2 px-9 text-xl rounded-full shadow-animation font-semibold">
                  Send
                </button>
              </div>
            </form>
          </div>
          {/* <div className=" w-[190px] h-[190px] sm:w-[350px] sm:h-[350px] lg:ml-[270px] lg:mt-[100px] drop-shadow-[-8px_10px_6px_rgba(0,0,0,1.4)]">
            <img src="/assets/Hasib.png" alt="" />
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
