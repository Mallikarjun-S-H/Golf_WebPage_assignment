import React from "react";
import { StayAndPlayCard } from "../shared/HotDealCard";

const StayAndPlaySection = ({ StayAndPlays }) => {
  return (
    <div className="hot-deal-section flex overflow-x-auto mb-4 py-4 align-middle">
      <div className="relative flex top-0 left-0">
        {StayAndPlays.map((StayAndPlay, index) => (
          <div
            key={index}
            className="flex-shrink-0 transition-all duration-300 ml-4"
          >
            <StayAndPlayCard
              event={StayAndPlay.event}
              days={StayAndPlay.days}
              people={StayAndPlay.people}
              imageUrl={StayAndPlay.imageUrl}
              cost={StayAndPlay.cost}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StayAndPlaySection;
