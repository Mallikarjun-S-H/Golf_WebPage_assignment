import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { FaRegCalendarAlt as CalIcon } from "react-icons/fa";
import { BsPeople as PeopleIcon } from "react-icons/bs";
import { GoSearch as SearchIcon } from "react-icons/go";

import "react-datepicker/dist/react-datepicker.css";

const SearchBar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [golfers, setGolfers] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const golferToggler = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded max-w-fit space-y-4 md:space-y-0 p-2 md:p-0">
        <div className="flex items-center border-b md:border-b-0 md:border-r border-gray-300 px-4 py-2 md:px-4 w-full md:w-auto">
          <SearchIcon className="text-gray-400 text-lg mr-2" />
          <input
            type="text"
            placeholder="Golf or Location"
            className="outline-none text-gray-500 w-full md:w-auto"
          />
        </div>
        <div
          className="relative flex items-center border-b md:border-b-0 md:border-r py-2.5 border-gray-300 px-4 w-full md:w-auto"
          onClick={golferToggler}
        >
          <PeopleIcon className="text-green-300 text-lg" />
          <span className="mx-2 text-sm">{golfers} Golfers</span>

          {isDropdownOpen && (
            <div className=" absolute flex-col top-3 left-0 z-10 mt-6 w-44 bg-white shadow-lg border rounded-lg">
              <h2 className="m-4 text-left text-sm">How many golfers?</h2>
              <div className="m-2">
                <ul className="flex justify-between px-2items-center">
                  <li
                    className=" h-8 w-8 hover:bg-green-700 hover:text-white rounded-full bg-white border-2 flex justify-center items-center "
                    onClick={() => setGolfers(1)}
                  >
                    1
                  </li>
                  <li
                    className=" h-8 w-8 hover:bg-green-700 hover:text-white rounded-full bg-white border-2 flex justify-center items-center "
                    onClick={() => setGolfers(2)}
                  >
                    2
                  </li>
                  <li
                    className=" h-8 hover:bg-green-700 hover:text-white w-8 rounded-full bg-white border-2 flex justify-center items-center "
                    onClick={() => setGolfers(3)}
                  >
                    3
                  </li>
                  <li
                    className=" h-8 hover:bg-green-700 hover:text-white w-8 rounded-full bg-white border-2 flex justify-center items-center "
                    onClick={() => setGolfers(4)}
                  >
                    4
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center border-b md:border-b-0  border-gray-300 px-4 w-full md:w-auto">
          <CalIcon className="text-green-300 text-sm" />
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="ml-2 outline-none text-sm"
            dateFormat="dd MMM, yyyy"
          />
        </div>
        <div className="flex items-center w-full md:w-auto ">
          <button className="bg-green-500 text-white px-6 py-2 rounded-r w-full md:w-auto">
            Book Your Next Tee Time Today!
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
