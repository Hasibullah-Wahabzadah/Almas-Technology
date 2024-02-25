import React from "react";
import Slider from "react-slick";
import Image2 from "../../assets/hero/phone-2.png";
import Image1 from "../../assets/hero/headphone.png";
import Image3 from "../../assets/hero/macbook.png";
// import Button from "../Shared/Button";
const HeroData = [
  {
    id: 2,
    img: Image2,
    subtitle: "Best",
    title: "Branded",
    title2: "iPhone",
  },
  {
    id: 1,
    img: Image3,
    subtitle: "Best",
    title: "Branded",
    title2: "Laptops",
  },
  {
    id: 1,
    img: Image1,
    subtitle: "Best",
    title: "Branded",
    title2: "Headphone",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000, // Set autoplay speed to 2 seconds
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className="container pt-5">
      <div
        className="overflow-hidden rounded-3xl min-h-[550px]
      sm:min-h[650px] hero-bg-color flex justify-center items-center"
      >
        <div className="container pb-8 sm:pb-0">
          {/* Hero section */}
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text content section */}
                  <div
                    className="flex flex-col justify-center gap-4 pt:12 sm:pt-0 text-center
                    sm:text-left order-2 sm:order-1 relative z-10"
                  >
                    <h1 
                    className="text-4xl sm:text-2xl lg:text-3xl font-bold">
                      {data.subtitle}
                    </h1>
                    <h1 
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    >{data.title}</h1>
                    <h1
                    className="text-5xl uppercase text-white dark:text-white/5
                    sm:text-[70px] md:text-[80px] xl:text-[150px] font-bold"
                    >
                      {data.title2}
                    </h1>
                    {/* <div>
                      <Button 
                      text="Shop Now"
                      bgColor="bg-primary"
                      textColor="text-white"
                      />
                    </div> */}
                  </div>
                  {/* img section */}
                  <div className="order-1 sm:order-2">
                    <div>
                      <img
                        src={data.img}
                        alt=""
                        className="w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] 
                      sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] 
                      relative z-40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
