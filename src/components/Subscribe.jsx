import React, { useState } from "react";
import {
  IoMdMail as MailIcon,
  IoMdCheckmark as CheckMark,
} from "react-icons/io";
import { MdClose as CloseIcon } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const Subscribe = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [direction, setDirection] = useState(0);

  const handleToSubscribe = () => {
    setDirection(1);
    setStep(2);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setDirection(1);
      setStep(3); // Proceed to step 3 if email is valid
    } else {
      setIsValidEmail(false); // Show validation error if email is invalid
    }
  };

  const handleClose = () => {
    setStep(0);
  };

  const validateEmail = (email) => {
    // Simple regex for email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const sliderVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="space-y-6 max-w-fit fixed bottom-12 right-20">
      <AnimatePresence custom={direction}>
        {step === 1 && (
          <motion.div
            key="step1"
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            variants={sliderVariants}
            className="bg-gradient-to-r from-green-400 to-teal-500 px-2 py-1 w-[416px] relative rounded-lg"
          >
            <div className="flex items-center justify-between max-h-32">
              <MailIcon className="text-8xl p-2 text-gray-200" />
              <div className="w-44">
                <h2 className="text-lg font-bold text-black">
                  Join Newsletter
                </h2>
                <p className="text-sm text-wrap text-black">
                  For updates and exclusive deals, subscribe our newsletter.
                </p>
              </div>
              <input
                type="button"
                onClick={handleToSubscribe}
                className="bg-black text-white text-sm font-semibold px-3 py-2 rounded-lg  w-[100px] text-center cursor-pointer"
                value="Subscribe"
              />
            </div>
            <button onClick={handleClose} className="absolute top-2 right-2">
              <CloseIcon className="text-gray-500 hover:text-gray-600" />
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            variants={sliderVariants}
            className="relative top-0 bg-white rounded-lg px-4 py-2 w-[416px] max-h-32"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-white"
            >
              <CloseIcon className="text-gray-500 hover:text-gray-600" />
            </button>

            <div className="m-3 flex flex-col items-start">
              {/* Title */}
              <h2 className="text-xl font-semibold mb-1">Join Newsletter</h2>

              {/* Form */}
              <form>
                <fieldset className="border border-gray-500 rounded px-1 w-[362px]">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={`flex-grow px-4 py-2 rounded-lg focus:outline-none w-[252px]`}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setIsValidEmail(true); // Reset validation on input change
                    }}
                  />
                  <input
                    type="submit"
                    onClick={handleSubscribe}
                    className="bg-black text-white text-sm font-semibold px-3 py-2 rounded-lg w-[100px] text-center"
                    value="Subscribe"
                  />
                </fieldset>
              </form>
              {!isValidEmail && (
                <p className="text-red-500 text-sm mt-1">
                  Please enter a valid email
                </p>
              )}
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            variants={sliderVariants}
            className="relative bg-white rounded-lg shadow-lg p-6 max-h-36 w-[416px]"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-white"
            >
              <CloseIcon className="text-gray-500 hover:text-gray-600" />
            </button>

            {/* Icon */}
            <div className="flex items-center space-x-4">
              <div className="bg-green-500 rounded-full p-3 bg-opacity-20">
                <div className="bg-green-500 rounded-full p-2 text-white">
                  {/* Checkmark (using a simple unicode character) */}
                  <CheckMark />
                </div>
              </div>

              {/* Text Section */}
              <div>
                <h2 className="text-lg font-semibold">Thanks for Joining!</h2>
                <p className="text-gray-500 text-sm">
                  For updates and exclusive deals, subscribe our newsletter.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Subscribe;
