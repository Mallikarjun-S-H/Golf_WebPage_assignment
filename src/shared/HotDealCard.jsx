import React from "react";
import { IoStar as StarIcon } from "react-icons/io5";

const HotDealCard = ({
  imageUrl,
  rating,
  discount,
  time,
  price,
  originalPrice,
  clubName,
  location,
  length,
  holes,
  cart,
  players,
}) => {
  return (
    <div className="hot-deal-card bg-white rounded-lg shadow-lg transition-all duration-300 relative">
      <div className="group">
        <div className="relative">
          <img
            src={imageUrl}
            alt="A golfer swinging a golf club on a green golf course"
            className="w-64 h-28 object-cover  rounded"
          />
          <div className="flex absolute bottom-2 left-2">
            <div className=" bg-green-500 text-white text-xs font-semibold px-2 py-1 mr-2 rounded-full flex items-center">
              {rating}
              <StarIcon className="text-yellow-400 ml-1" />
            </div>
            <div className="bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-full">
              {discount}% OFF
            </div>
          </div>
        </div>
        <div className="p-4 pt">
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold">{time}</div>
            <div className="text-lg font-bold text-gray-900">${price}</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-gray-500 group-hover:hidden">{clubName}</div>
            <div className="text-gray-500 hidden group-hover:block">
              Available for: {players} Player
            </div>
            <div className="text-red-500 line-through">${originalPrice}</div>
          </div>
        </div>
        <div className="p-4 pt-0 bg-white hidden group-hover:block mb-2 rounded-xl">
          <div className="mt-2">
            <div className="text-base font-semibold">{clubName}</div>
            <div className="text-sm text-gray-500">{location}</div>
          </div>
          <div className="mt-2 flex space-x-1 rounded-xl">
            <div className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
              {length}mi
            </div>
            <div className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
              {holes} Holes
            </div>
            {cart && (
              <div className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                Includes Cart
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const LocationCard = ({ location, city, imageUrl }) => {
  return (
    <div className="hot-deal-card bg-white rounded-lg shadow-lg transition-all duration-300 relative">
      <div className="group">
        <div className="relative">
          <img
            src={imageUrl}
            alt="A golfer swinging a golf club on a green golf course"
            className="w-64 h-28 object-cover rounded"
          />
        </div>
        <div className="p-4 pt">
          <div className="flex justify-between items-center">
            <div className="text-black font-bold text-lg  group-hover:hidden">
              {location}
            </div>
            <div className="text-black font-semibold hidden group-hover:block">
              {city}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StayAndPlayCard = ({ cost, days, people, event, imageUrl }) => {
  return (
    <div className="hot-deal-card bg-white rounded-lg shadow-lg transition-all duration-300 relative">
      <div className="group">
        <div className="relative">
          <img
            src={imageUrl}
            alt="A golfer swinging a golf club on a green golf course"
            className="w-64 h-28 object-cover rounded"
          />
        </div>
        <div className="p-4 pt">
          <div className="flex justify-between items-center">
            <div className="text-black text-xl font-bold">{event}</div>
          </div>
          <div className="mt-2 flex space-x-1 rounded-xl font-semibold justify-between items-center">
            <div className="text-sm text-gray-500px-2 py-1 rounded-full">
              For {people} peoples | {days} Days
            </div>
            <div className="text-xl text-teal-300 px-2 py-1 rounded-full font-bold ">
              ${cost}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HotDealCard, LocationCard, StayAndPlayCard };
