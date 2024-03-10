import React from "react";
import phone from "/assets/Banner/phone-c.png";
// import Button from "../Shared/Button";

const BannerData = [
  {
    id: 1,
    discount: "30% OFF",
    title: "Galaxy A30s",
    date: "10 Jan to 28 Jan",
    image: phone,
    title2: "Android",
    title3: "One Year Warranty",
    title4:
      "Samsung Galaxy A30s,internal storage 128GB, 8GB Ram, Finger Screen, Two SIM",
  },
];

const Banner = () => {
  return (
    <div className="min-h-[360px] flex py-5">
      <div
        className="container"
        
      >
        {BannerData.map((data) => (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-center text-white rounded-3xl bg-primary ">
            {/* first col */}
            <div className="p-7 sm:p-8 ">
              <p
                
              >
                {data.discount}
              </p>
              <h1
                className="uppercase text-3xl lg:text-5xl font-bold mb-1"
                
              >
                {data.title}
              </h1>
              <p className="text-xl"
              
             
              >{data.date}</p>
            </div>

            {/* second col */}
            <div
              className="h-full flex items-start"
              
            >
              <img
                src={data.image}
                alt=""
                className="scale-125 w-[180px]  md:w-[250px] mx-auto drop-shadow-[-18px_12px_20px_rgba(0,0,0,.6)]  hover:scale-105 duration-300"
              />
            </div>

            {/* third col */}
            <div className="flex flex-col justify-center gap-2 p-5 sm:p-8">
              <p className="font-bold text-5xl sm:text-4xl" >{data.title2}</p>
              <p className=" text-2xl sm:text-3xl md:text-2xl font-bold" >
                {data.title3}
              </p>
              <p className="text-sm tracking-wide leading-4 font-bold" >
                {data.title4}
              </p>
              {/* <div>
                <Button
                  text="Shop Now"
                  bgColor="bg-white"
                  textColor="text-primary"
                />
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
