import React from "react";
import HeroSection from "./components/HeroSection";
import bgVideo from "./assets/bg-video/342-136015993_medium.mp4";

const App = () => {
  return (
    <div>
      <div className="relative h-screen contern overflow-y-auto bg-black ">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="fixed top-0 left-0 w-full h-full object-cover px-10"
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black opacity-50 z-0 "></div>
        <div className="absolute inset-0 z-10">
          <HeroSection />
        </div>
      </div>
    </div>
  );
};

export default App;
