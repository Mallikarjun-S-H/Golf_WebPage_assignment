import React, { useState } from "react";
import NavBar from "./NavBar";
import SearchBar from "../shared/SearchBar";
import HotDealSection from "./HotDealSection";
import GolfCitySection from "./GolfCitySection";
import {
  GolfCitySample,
  hotDealsSample,
  StayAndPlaysample,
} from "../sampleData/sampleData";

import Footer from "./Footer";
import StayAndPlaySection from "./StayAndPlaySection";
import Subscribe from "./Subscribe";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("hotDeal");

  const hotDealHandler = () => {
    setActiveTab("hotDeal");
  };

  const byLocationHandler = () => {
    setActiveTab("byLocation");
  };

  const stayPlayHandler = () => {
    setActiveTab("stayPlay");
  };
  return (
    <div>
      <NavBar />
      <main>
        <div className="mx-28 container flex-col space-y-2 justify-start mt-48 ">
          <h2 className="font-normal text-white text-left text-xl pb-4">
            Discover Affordable Tee Time Booking with InteGolf:
          </h2>
          <h1 className="font-bold text-white text-left text-5xl pb-4">
            A Gateway to Seamless Golfing Experiences
          </h1>
          <SearchBar className="w-full" />
        </div>
        <div className="mx-24">
          <div className="flex mt-8 text-gray-500 justify-start font-semibold text-lg cursor-pointer">
            <div
              className={`pl-6 ${
                activeTab === "hotDeal" ? "text-white" : "text-gray-500"
              }`}
              onClick={hotDealHandler}
            >
              Hot Deal
            </div>
            <div
              className={`pl-6 ${
                activeTab === "byLocation" ? "text-white" : "text-gray-500"
              }`}
              onClick={byLocationHandler}
            >
              Explore by Locations
            </div>
            <div
              className={`pl-6 ${
                activeTab === "stayPlay" ? "text-white" : "text-gray-500"
              }`}
              onClick={stayPlayHandler}
            >
              Stay & Play
            </div>
          </div>
          {activeTab === "hotDeal" && (
            <HotDealSection hotDeals={hotDealsSample} />
          )}
          {activeTab === "byLocation" && (
            <GolfCitySection golfCity={GolfCitySample} />
          )}
          {activeTab === "stayPlay" && (
            <StayAndPlaySection StayAndPlays={StayAndPlaysample} />
          )}
        </div>
      </main>
      <Subscribe className="w-40" />
      <Footer />
    </div>
  );
};

export default HeroSection;
