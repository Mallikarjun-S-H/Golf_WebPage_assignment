import React from "react";
import { LocationCard } from "../shared/HotDealCard";

const GolfCitySection = ({ golfCity }) => {
  return (
    <div className="hot-deal-section flex overflow-x-auto mb-4 py-4 align-middle">
      <div className="relative flex top-0 left-0">
        {golfCity.map((GolfCity, index) => (
          <div
            key={index}
            className="flex-shrink-0 transition-all duration-300 ml-4"
          >
            <LocationCard
              city={GolfCity.city}
              location={GolfCity.location}
              imageUrl={GolfCity.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GolfCitySection;
