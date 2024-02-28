import React from "react";
import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";

const ServiceData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl md:text-5xl text-primary" data-aos="flip-right" />,
    title: "Free Shipping",
    description: "Free Shipping On All Order",
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" data-aos="flip-right"/>,
    title: "Safe Money ",
    description: "30 Days Money Back",
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl md:text-5xl text-primary" data-aos="flip-right" />,
    title: "Secure Payment",
    description: "All Payment Secure",
  },
  {
    id: 4,
    icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" data-aos="flip-right" />,
    title: "Online Supoort 24/7",
    description: "Technical Support 24/7",
  },
];

const Services = () => {
  return (
    <div id="services">
      <div className="container my-14 md:my-20 px-[60px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          {ServiceData.map((data) => (
            <div className="flex flex-col items-start sm:flex-row gap-4">
              {data.icon}
              <div >
                <h1 className="lg:text-xl font-bold"  data-aos="flip-right" data-aos-delay="400">{data.title}</h1>
                <h1 className="text-gray-400 text-sm"  data-aos="flip-right" data-aos-delay="500">{data.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
