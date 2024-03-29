import React from "react";

import Button1 from "../Shared/Button1";

const Category = () => {
  return (
    <div className="py-8 " id="shop">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* first col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p
                  className="mb-[2px] text-gray-400"
                  
                >
                  Enjoy
                </p>
                <p
                  className="text-2xl font-semibold mb-[2px]"
                  
                >
                  With
                </p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2" >
                  Earphone
                </p>
                <Button1
                  text="Browse"
                  bgColor="bg-primary"
                  textColor="text-white"
                />
              </div>
            </div>
            <img
              
              src={"/assets/category/earphone.png"}
              alt=""
              className="w-[300px] ml-12 absolute bottom-0 drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] hover:scale-105 duration-300 "
            />
          </div>
          {/* second col */}
          <div  className="py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p
                  className="mb-[2px] text-white"
                  
                >
                  Enjoy
                </p>
                <p
                  className="text-2xl font-semibold mb-[2px]"
                  
                >
                  With
                </p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Phone
                </p>
                <Button1
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-brandYellow"
                />
              </div>
            </div>
            <img
              
              src={"/assets/category/phone-3-c.png"}
              alt=""
              className="w-[250px] absolute right-[10px] bottom-0  drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] hover:scale-105 duration-300"
            />
          </div>
          {/* third col */}
          <div  className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p
                  className="mb-[2px] text-white"
                  
                >
                  Enjoy
                </p>
                <p
                  className="text-2xl font-semibold mb-[2px]"
                  
                >
                  With
                </p>
                <p className="text-4xl xl:text-6xl font-bold opacity-40 mb-2">
                  Laptop
                </p>
                <Button1
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-primary"
                />
              </div>
            </div>
            <img
              
              src={"/assets/category/laptop-1-2.png"}
              alt=""
              className="w-[300px] absolute top-1/2 -translate-y-1/2 -right-0 drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] hover:scale-105 duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
