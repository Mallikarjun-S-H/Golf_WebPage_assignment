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
      <main className="lg:mx-32 ">
        <div className="relative container flex-col space-y-2 justify-start mt-20 px-4 h-auto">
          <h2 className="font-normal text-white text-left text-sm ">
            Discover Affordable Tee Time Booking with InteGolf:
          </h2>
          <h1 className="font-bold text-white text-left text-3xl">
            A Gateway to Seamless Golfing Experiences
          </h1>
          <SearchBar />
        </div>
        <div>
          <div className="flex mt-2 text-gray-500 justify-start font-semibold text-sm cursor-pointer">
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
      <Footer />
    </div>
  );
};

export default HeroSection;
