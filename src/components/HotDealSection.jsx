import React from "react";
import { HotDealCard } from "../shared/HotDealCard";

const HotDealSection = ({ hotDeals }) => {
  return (
    <div className="hot-deal-section flex overflow-x-auto mb-4 p-8 align-middle">
      <div className="relative flex top-0 left-0">
        {hotDeals.map((hotDeal, index) => (
          <div
            key={index}
            className="flex-shrink-0 transition-all duration-300 ml-4"
          >
            <HotDealCard
              rating={hotDeal.rating}
              discount={hotDeal.discount}
              imageUrl={hotDeal.image}
              time={hotDeal.time}
              clubName={hotDeal.clubName}
              originalPrice={hotDeal.price}
              price={hotDeal.discountedPrice}
              location={hotDeal.location}
              length={hotDeal.length}
              holes={hotDeal.holes}
              cart={hotDeal.cart}
              players={hotDeal.player}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotDealSection;
