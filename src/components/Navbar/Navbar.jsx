import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping, FaBars } from "react-icons/fa6";
import "./Navbars.css";
import DarkMode from "./DarkMode";
import onClickOutside from "react-click-outside";

const MenuLinks = [
  {
    id: 1,
    Link: "Home",
    link: "/#",
  },
  {
    id: 2,
    Link: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    Link: "About",
    link: "/#footer",
  },
  {
    id: 4,
    Link: "Brands",
    link: "/#brand",
  },
];

const DropdownLinks = [
  {
    id: 1,
    Link: "Products",
    link: "/Blogs",
  },
  {
    id: 2,
    Link: "Samsung",
    link: "/#samsung",
  },
  {
    id: 3,
    Link: "Apple",
    link: "/#apple",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [value, setValue] = useState("");
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onSearch = (serachTerm) => {
    console.log("search", serachTerm);
  };

  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const handleClickOutside = () => {
    if (isBurgerOpen) {
      setIsBurgerOpen(false);
    }
  };

  const BurgerMenu = () => (
    <div className="lg:hidden absolute top-[70px] left-0 bg-white dark:bg-gray-950 py-[105px] px-[70px] ">
      <ul className="flex flex-col items-center gap-4 md:flex md:items-center">
        {MenuLinks.map((data, index) => (
          <li key={index}>
            <a
              href={data.link}
              className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
            >
              {data.Link}
            </a>
          </li>
        ))}

        <li className="relative cursor-pointer group">
          <a
            href="#"
            className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
          >
            Quick Links
            <span>
              <FaCaretDown className="group-hover:rotate-180 duration-300" />
            </span>
          </a>

          {/* Dropdown Links */}
          <div className=" -right-12 absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-950 p-2 dark:text-white ">
            <ul className="space-y-2">
              {DropdownLinks.map((data, index) => (
                <li key={index}>
                  <a
                    className="text-gray-500  dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                    href={data.link}
                  >
                    {data.Link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </li>
        {/* Search Bar section */}
        <div className="relative group hidden sm:block">
          <input
            type="text"
            placeholder="Search"
            className="search-bar"
            value={value}
            onChange={onChange}
          />
          <IoMdSearch
            onClick={() => onSearch(value)}
            className="text-xl text-gray-600 group-hover:text-primary
               dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200"
          />
        </div>
      </ul>
    </div>
  );

  const BurgerMenuClickOutside = onClickOutside(BurgerMenu);

  return (
    <div className=" bg-white dark:bg-gray-900 dark:text-white duration-200 z-40  sticky top-0 ">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          <button onClick={toggleBurgerMenu} className="lg:hidden">
            <FaBars className="text-xl text-gray-600 dark:text-gray-400" />
          </button>
          {isBurgerOpen && (
            <BurgerMenuClickOutside handleClickOutside={handleClickOutside} />
          )}
          {/* Logo and Links section */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-4xl  sm:text-1xl Yellowtail"
            >
              Almas Technology
            </a>

            {/* Menu Items */}
            <div className="hidden lg:block ">
              <ul className="flex items-center gap-4 ">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className=" inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    >
                      {" "}
                      {data.Link}
                    </a>
                  </li>
                ))}

                {/* Dropdown  */}
                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>

                  {/* Dropdown Links */}
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white ">
                    <ul className="space-y-2">
                      {DropdownLinks.map((data, index) => (
                        <li key={index}>
                          <a
                            className="text-gray-500  dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                            href={data.link}
                          >
                            {data.Link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Navbar Right section */}
          <div className="flex justify-between items-center gap-1">
            {/* Search Bar section */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="search-bar"
                value={value}
                onChange={onChange}
              />
              <IoMdSearch
                onClick={() => onSearch(value)}
                className="text-xl text-gray-600 group-hover:text-primary
               dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200"
              />
            </div>

            {/* Language section */}
            <div>
              <select
                name="Language"
                id=""
                className="bg-white dark:bg-gray-900  flex items-center
              text-gray-500  dark:hover:text-white duration-200 rounded-md font-semibold"
                value={language}
                onChange={handleLanguageChange}
              >
                <option value="English">En</option>
                <option value="Farse">Fa</option>
              </select>
            </div>

            {/* Dark Mode section */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
