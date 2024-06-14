import React from "react";
import FooterLogo from "../../assets/food_logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  faLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-95">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 py-5">
            <div className="py-8 px-4">
              <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                <img src={FooterLogo} alt="" className="max-w-[50px]" />
                FOODIE
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Numquam officia voluptas ducimus sapiente aspernatur, officiis
                harum minima delectus a minus?
              </p>
              <br />
              <div className="flex items-center gap-3 mt-6">
                <FaLocationArrow />
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p>+91 123456789</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;