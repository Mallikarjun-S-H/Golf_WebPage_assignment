import React, { useState } from "react";
import { IoMdMail as MailIcon } from "react-icons/io";

const Subscribe = () => {
  const [step, setStep] = useState(1);

  const handleSubscribe = () => {
    setStep(2);
    setTimeout(() => {
      setStep(3);
    }, 1000);
  };

  const handleClose = () => {
    setStep(0);
  };

  return (
    <div className=" relativespace-y-6 w-1/4 ">
      {step === 1 && (
        <div className="bg-gradient-to-r from-green-400 to-teal-500 p-4 rounded-lg shadow-lg  text-white transition-all duration-500 absolute bottom-365 right-36">
          <div className="flex items-center">
            <MailIcon className="text-6xl p-2" />
            <div>
              <h2 className="text-lg font-bold">Join Newsletter</h2>
              <p>For updates and exclusive deals, subscribe our newsletter.</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="absolute bottom-2 right-2 text-white"
          >
            <i className="fas fa-times"></i>
          </button>
          <button
            onClick={handleSubscribe}
            className="bg-black text-white px-4 py-2 rounded-lg absolute bottom-4 right-4"
          >
            Subscribe
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="bg-white p-4 rounded-lg shadow-lg  transition-all duration-500 absolute bottom-365 right-36">
          <h2 className="text-lg font-bold">Join Newsletter</h2>
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-gray-500"
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="flex mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-l-lg p-2 flex-grow"
            />
            <button
              onClick={handleSubscribe}
              className="bg-gray-800 text-white px-4 py-2 rounded-r-lg"
            >
              Subscribe
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="bg-gradient-to-r from-green-400 to-teal-500 p-4 rounded-lg shadow-lg  text-white transition-all duration-500 absolute bottom-365 right-36">
          <div className="flex items-center">
            <MailIcon className="text-6xl p-2" />
            <div>
              <h2 className="text-lg font-bold">Thanks for Joining!</h2>
              <p>For updates and exclusive deals, subscribe our newsletter.</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-white"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      )}
    </div>
  );
};
export default Subscribe;
