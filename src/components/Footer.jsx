import React from "react";
import { IoGolfSharp as GlofIcon } from "react-icons/io5";
import { FaCarSide as CartIcon } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white fixed bottom-0 w-full">
      <div className=" flex md:flex-row bg-transparent flex-wrap justify-center md:justify-between items-center p-4  mx-28 space-y-2">
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2 mr-4 px-4 py-3 bg-black/40  backdrop-blur-xl rounded-full">
            <CartIcon />
            <span>Integolf Travel</span>
          </div>
          <div className="flex items-center space-x-2 mr-4 px-4 py-3 bg-black/40  backdrop-blur-xl rounded-full">
            <GlofIcon />
            <span>Integolf Tournament</span>
          </div>
        </div>
        <div className="flex space-x-4 text-sm">
          <a href="#">
            <span>Privacy</span>
          </a>
          <a href="#">
            <span>Terms</span>
          </a>
          <a href="#">
            <span>News</span>
          </a>
          <span>|</span>
          <span>© 2024 Integolf</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
