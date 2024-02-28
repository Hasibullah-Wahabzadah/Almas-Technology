import React from "react";
import phone from "../../assets/Banner/phone-i.png";
// import Button from "../Shared/Button";

const BannerData = [
  {
    id: 1,
    discount: "10% OFF",
    title: "iphone 12 pro max",
    date: "20 Jan to 28 Jan",
    image: phone,
    title2: "iphone",
    title3: "One Year Warranty",
    title4:
      "iphone 12 pro max, Ram 6 ,internal storage 256 GB and A14 Bionic chip Battery 3687",
  },
];

const Banner2 = () => {
  return (
    <div className="min-h-[360px] flex py-14">
      <div className="container"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-delay="200"
      >
        {BannerData.map((data) => (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-center text-white rounded-3xl bg-brandGreen ">
            {/* first col */}
            <div className="p-7 sm:p-8 ">
              <p className="text-xl mb-1"
                
                >{data.discount}</p>
              <h1 className="uppercase text-3xl lg:text-5xl font-bold mb-1" 
                data-aos-delay="700">
               
                {data.title}
              </h1>
              <p className="text-xl"  
              >{data.date}</p>
            </div>

            {/* second col */}
            <div className="h-full flex items-start" data-aos="zoom-out"
              data-aos-delay="600">
              <img
                src={data.image}
                alt=""
                className="scale-125 w-[180px]  md:w-[250px] mx-auto drop-shadow-[-18px_12px_20px_rgba(0,0,0,.6)]  hover:scale-105 duration-300"
              />
            </div>

            {/* third col */}
            <div className="flex flex-col justify-center gap-2 p-5 sm:p-8" >
              <p  className="font-bold text-5xl sm:text-5xl" >{data.title2}</p>
              <p className=" text-2xl sm:text-3xl md:text-2xl font-bold" >
                {data.title3}
              </p>
              <p className="text-sm tracking-wide leading-4 font-bold">{data.title4}</p>
              {/* <div>
                <Button
                  text="Shop Now"
                  bgColor="bg-white"
                  textColor="text-brandGreen"
                />
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner2;
