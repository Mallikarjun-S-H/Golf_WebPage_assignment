import React, { useState } from "react";
import {
  GiHamburgerMenu as HamMenu,
  GiGymBag as BagIcon,
  GiGolfFlag as GolfFlagIcon,
} from "react-icons/gi";
import { IoIosArrowDown as DArrow } from "react-icons/io";
import {
  PiCarFill as CarIcon,
  PiCalendarDotsFill as CalenderIcon,
} from "react-icons/pi";
import SolutionsMenu from "../shared/SolutionsMenu";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHamMenuOpen, setIsHamMenuOpen] = useState(false);

  const openMenuHandler = () => {
    setIsHamMenuOpen(!isHamMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-transparent lg:mx-32 ">
      <div className="container px-4 flex z-10 items-center justify-between py-4 max-w-full">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className=" nav-bar__logo">
            <img src="./Logo.svg" alt="InteGolf logo" className="h-6" />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 mx-10">
            <ul className="text-xs font-semibold flex space-x-6 text-white ">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Courses</a>
              </li>
              <li className="relative">
                <a href="#" onClick={toggleDropdown}>
                  <span className="flex items-center justify-center">
                    Solution
                    <DArrow className="ml-2" />
                  </span>
                </a>
                {isDropdownOpen && (
                  <ul className="absolute left-0 mt-6 w-84 bg-white shadow-lg border rounded-lg z-10">
                    <li className="p-2 hover:bg-gray-100">
                      <a href="#" className="block text-gray-700">
                        <SolutionsMenu
                          icon={<BagIcon />}
                          text="Integolf Travel"
                          label="Seamless Golf Adventure with All-in-One Booking"
                        />
                      </a>
                    </li>
                    <li className="p-2 hover:bg-gray-100">
                      <a href="#" className="block text-gray-700">
                        <SolutionsMenu
                          icon={<CarIcon />}
                          text="Integolf Tournament"
                          label="Elevate Your Golf Tournament with InteGolf"
                        />
                      </a>
                    </li>
                    <li className="p-2 hover:bg-gray-100">
                      <a href="#" className="block text-gray-700">
                        <SolutionsMenu
                          icon={<CalenderIcon />}
                          text=" Premium Tee Time Booking"
                          label="Discover Affordable Tee Time Booking with Integolf"
                        />
                      </a>
                    </li>
                    <li className="p-2 hover:bg-gray-100">
                      <a href="#" className="block text-gray-700">
                        <SolutionsMenu
                          icon={<GolfFlagIcon />}
                          text="Integolf Tee Sheet"
                          label="Seamless Golf Adventure with All-in-One Bookings"
                        />
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className=" text-xs font-semibold hidden md:flex space-x-2 ">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg">
            Get Your Tee
          </button>
          <button className="bg-teal-500   text-white px-7 py-3 rounded-lg">
            Sign Up
          </button>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white text-2xl focus:outline-none"
            onClick={openMenuHandler}
          >
            <HamMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isHamMenuOpen && (
        <div className=" absolute z-20 w-full md:hidden bg-white shadow-lg">
          <ul className=" flex flex-col space-y-4 px-4 py-2 text-center">
            <li>
              <a href="#" className="block text-gray-700 ">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-700 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-700 ">
                Courses
              </a>
            </li>
            <li className="relative">
              <a
                href="#"
                onClick={toggleDropdown}
                className="block text-gray-700"
              >
                Solutions
              </a>
              {/* Dropdown Menu for Mobile */}
              {isDropdownOpen && (
                <ul className="flex flex-col space-y-3 text-left">
                  <li className="p-2 hover:bg-gray-100">
                    <a href="#" className="block text-gray-700">
                      <SolutionsMenu
                        icon={<BagIcon />}
                        text="Integolf Travel"
                        label="Seamless Golf Adventure with All-in-One Booking"
                      />
                    </a>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <a href="#" className="block text-gray-700">
                      <SolutionsMenu
                        icon={<CarIcon />}
                        text="Integolf Tournament"
                        label="Elevate Your Golf Tournament with InteGolf"
                      />
                    </a>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <a href="#" className="block text-gray-700">
                      <SolutionsMenu
                        icon={<CalenderIcon />}
                        text=" Premium Tee Time Booking"
                        label="Discover Affordable Tee Time Booking with Integolf"
                      />
                    </a>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <a href="#" className="block text-gray-700">
                      <SolutionsMenu
                        icon={<GolfFlagIcon />}
                        text="Integolf Tee Sheet"
                        label="Seamless Golf Adventure with All-in-One Bookings"
                      />
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="#" className="block text-gray-700 ">
                Contact
              </a>
            </li>
            <li>
              <button className="bg-green-600 text-white w-full px-3 py-2 rounded ">
                Get Your Tee
              </button>
            </li>
            <li>
              <button className="bg-teal-600 mb-1 text-white w-full px-3 py-2 rounded">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
