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
            className="w-56 h-24 object-cover rounded-sm"
          />
          <div className="flex absolute bottom-2 left-2">
            <div className=" bg-green-500 text-white text-[8px] font-semibold px-2 py-1 mr-2 rounded-full flex items-center">
              {rating}
              <StarIcon className="text-white ml-1" />
            </div>
            <div className="bg-yellow-400 text-black text-[10px] font-semibold px-2 py-1 rounded-full">
              {discount}% OFF
            </div>
          </div>
        </div>
        <div className="px-3 py-2 pt">
          <div className="flex justify-between items-center">
            <div className="text-[16px] font-bold">{time}</div>
            <div className="text-[16px] font-bold text-gray-900">${price}</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-gray-500 text-xs font-medium group-hover:hidden">
              {clubName}
            </div>
            <div className="text-gray-500 text-xs hidden group-hover:block">
              Available for: {players} Player
            </div>
            <div className="text-red-500 text-sm line-through">
              ${originalPrice}
            </div>
          </div>
        </div>
        <div className="px-4 bg-white hidden group-hover:block rounded-xl">
          <div>
            <div className="text-base font-semibold">{clubName}</div>
            <div className="text-[10px]  text-gray-500">{location}</div>
          </div>
          <div className="mt-2 flex space-x-1 rounded-xl">
            <div className="text-[10px]  text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
              {length}mi
            </div>
            <div className="text-[10px]  text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
              {holes} Holes
            </div>
            {cart && (
              <div className="text-[10px]  text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
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
            className="w-64 h-28 object-cover rounded-sm"
          />
        </div>
        <div className="px-2 py-2">
          <div className="flex justify-between items-center">
            <div className="text-black font-bold text-sm group-hover:hidden">
              {location}
            </div>
            <div className="text-black font-bold hidden group-hover:block text-sm">
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
            className="w-64 h-28 object-cover rounded-sm"
          />
        </div>
        <div className="p-2">
          <div className="flex justify-between items-center">
            <div className="text-black text-sm font-bold">{event}</div>
          </div>
          <div className="flex space-x-1 rounded-xl font-semibold justify-between items-center">
            <div className="text-[10px] text-gray-500px-2 py-1 rounded-full">
              For {people} peoples | {days} Days
            </div>
            <div className="text-[12px] text-teal-300 px-2 py-1 rounded-full font-bold ">
              ${cost}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HotDealCard, LocationCard, StayAndPlayCard };
