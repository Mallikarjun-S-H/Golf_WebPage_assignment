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
      <div className="flex md:flex-row items-center shadow-md rounded-lg max-full mt-4 space-y-2 md:space-y-0  min-h-12 h-auto">
        <div className="flex md:flex-row items-center p-1.5 rounded-lg md:rounded-l-lg bg-white w-3/5 space-y-2 md:space-y-0 md:space-x-4 h-auto">
          <div className="flex items-center flex-grow p-2 border-r-2 w-full ">
            <SearchIcon className="text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Golf or Location"
              className=" outline-none ml-2 w-full text-lg"
            />
          </div>
          <div
            className=" relative flex items-center p-2 h-10 border-r-2 w-full"
            onClick={golferToggler}
          >
            <PeopleIcon className="text-green-300 text-lg" />
            <span className=" m-2 font-semibold text-lg">
              {golfers} Golfers
            </span>

            {isDropdownOpen && (
              <div className=" absolute flex-col top-3 left-0 z-10 mt-6 w-84 bg-white shadow-lg border rounded-lg">
                <h2 className="m-4 text-left">How many golfers?</h2>
                <div className="m-4">
                  <ul className="flex justify-betweenp-4 items-center">
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

          <div className="flex items-center mx-2 relative h-10 w-full ">
            <CalIcon className="text-green-300 text-lg" />
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="ml-2 outline-none font-semibold text-lg"
              dateFormat="dd MMM, yyyy"
            />
          </div>
        </div>
        <div>
          <button className="bg-green-500 text-white rounded-lg  md:rounded-r-lg w-full py-4 px-4 font-semibold text-lg h-55">
            Book Your Next Tee Time Today
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
