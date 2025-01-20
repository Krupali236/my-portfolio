// import React from "react";
import home from "./../assets/home.svg";
import user from "./../assets/user.svg";
import document from "./../assets/document.svg";
import portfolio from "./../assets/portfolio.svg";
import contact from "./../assets/contact.svg";

import { useNavigate } from "react-router-dom";
// import Navbar from "../navbar/navbar";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>     
      <div className="h-full absolute flex justify-center items-center ms-6">
        <div className=" flex flex-col">
          <div
            className="bg-[#0563bb] rounded-full my-3 h-16 w-16 flex items-center justify-start transition-all duration-700 ease-in-out delay-150 
                                     cursor-pointer   hover:w-40 hover:delay-150 overflow-hidden"
          >
            <img
              src={home}
              alt="home"
              height="30px"
              width="30px"
              className="m-4 transition-all duration-700 ease-in-out cursor-pointer"
            />
            <span className="text-white opacity-100 ml-3 transition-opacity duration-700 ease-in-out font-medium text-xl">
              Home
            </span>
          </div>

          <div
            className="bg-[#0563bb] rounded-full my-3 h-16 w-16 flex items-center justify-start transition-all duration-700 ease-in-out delay-150 
                                        hover:w-40 hover:delay-150 overflow-hidden"
            //   onClick={navigate("/about")}
          >
            <img
              src={user}
              alt="about"
              height="30px"
              width="30px"
              className="m-4 transition-all duration-700 ease-in-out"
            />
            <span className="text-white opacity-100 ml-3 transition-opacity duration-700 ease-in-out font-medium text-xl">
              About
            </span>
          </div>
          <div
            className="bg-[#0563bb] rounded-full my-3 h-16 w-16 flex items-center justify-start transition-all duration-700 ease-in-out delay-150 
                                        hover:w-40 hover:delay-150 overflow-hidden"
          >
            <img
              src={document}
              alt="resume"
              height="30px"
              width="30px"
              className="m-4 transition-all duration-700 ease-in-out"
            />
            <span className="text-white opacity-100 ml-3 transition-opacity duration-700 ease-in-out font-medium text-xl">
              Resume
            </span>
          </div>
          <div
            className="bg-[#0563bb] rounded-full my-3 h-16 w-16 flex items-center justify-start transition-all duration-700 ease-in-out delay-150 
                                        hover:w-40 hover:delay-150 overflow-hidden"
          >
            <img
              src={portfolio}
              alt="portfolio"
              height="30px"
              width="30px"
              className="m-4 transition-all duration-700 ease-in-out"
            />
            <span className="text-white opacity-100 ml-3 transition-opacity duration-700 ease-in-out font-medium text-xl">
              Portfolio
            </span>
          </div>
          <div
            className="bg-[#0563bb] rounded-full my-3 h-16 w-16 flex items-center justify-start transition-all duration-700 ease-in-out delay-150 
                                        hover:w-40 hover:delay-150 overflow-hidden"
          >
            <img
              src={contact}
              alt="contact"
              height="30px"
              width="30px"
              className="m-4 transition-all duration-700 ease-in-out"
            />
            <span className="text-white opacity-100 ml-3 transition-opacity duration-700 ease-in-out font-medium text-xl">
              Contact
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
