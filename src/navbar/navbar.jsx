import React from "react";
import home from "./../assets/home.svg";
import user from "./../assets/user.svg";
import document from "./../assets/document.svg";
import portfolio from "./../assets/portfolio.svg";
import contact from "./../assets/contact.svg";
import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>

      <div className="navigation flex items-center">
        <ul className="flex flex-col ms-6">
          <NavLink to="/">
            <li
              className="bg-slate-300 hover:bg-blue-300 rounded-full my-3 h-16 w-16 flex items-center justify-start transition-all duration-700 ease-in-out delay-150
                                   hover:w-40 hover:delay-150 overflow-hidden cursor-pointer"
            >
              <img
                src={home}
                alt="home"
                height="30px"
                width="30px"
                className="m-4 hover:m-2 transition-all duration-700 ease-in-out"
              />
              <span className="text-[#0563bb] opacity-100 ml-3 transition-opacity duration-700 ease-in-out font-medium text-xl">
                Home
              </span>
            </li>
          </NavLink>
          <NavLink to="/about">
            <li
              className="bg-slate-300 hover:bg-blue-300  rounded-full my-3 h-16 w-16 flex items-center justify-start transition-all duration-700 ease-in-out delay-150 
                                          hover:w-40 hover:delay-150 overflow-hidden cursor-pointer"
            >
              <img
                src={user}
                alt="about"
                height="30px"
                width="30px"
                className="m-4 hover:m-2 n-all duration-700 ease-in-out"
              />
              <span className="text-[#0563bb] opacity-100 ml-3 transition-opacity duration-700 ease-in-out font-medium text-xl">
                About
              </span>
            </li>
          </NavLink>
          <NavLink to="/resume">
            <li
              className="bg-slate-300 hover:bg-blue-300  rounded-full my-3 h-16 w-16 flex items-center justify-start transition-all duration-700 ease-in-out delay-150 
                                        hover:w-40 hover:delay-150 overflow-hidden"
            >
              <img
                src={document}
                alt="resume"
                height="30px"
                width="30px"
                className="m-4 hover:m-2 n-all duration-700 ease-in-out"
              />
              <span className="text-[#0563bb] opacity-100 ml-3 transition-opacity duration-700 ease-in-out font-medium text-xl">
                Resume
              </span>
            </li>
          </NavLink>
          <NavLink to="/portfolio">
            <li
              className="bg-slate-300 hover:bg-blue-300  rounded-full my-3 h-16 w-16 flex items-center justify-start transition-all duration-700 ease-in-out delay-150 
                                        hover:w-40 hover:delay-150 overflow-hidden"
            >
              <img
                src={portfolio}
                alt="portfolio"
                height="30px"
                width="30px"
                className="m-4 hover:m-2 n-all duration-700 ease-in-out"
              />
              <span className="text-[#0563bb] opacity-100 ml-3 transition-opacity duration-700 ease-in-out font-medium text-xl">
                Portfolio
              </span>
            </li>
          </NavLink>
          <NavLink to="/contact">
            <li
              className="bg-slate-300 hover:bg-blue-300  rounded-full my-3 h-16 w-16 flex items-center justify-start transition-all duration-700 ease-in-out delay-150 
                                        hover:w-40 hover:delay-150 overflow-hidden"
            >
              <img
                src={contact}
                alt="contact"
                height="30px"
                width="30px"
                className="m-4 hover:m-2 n-all duration-700 ease-in-out"
              />
              <span className="text-[#0563bb] opacity-100 ml-3 transition-opacity duration-700 ease-in-out font-medium text-xl">
                Contact
              </span>
            </li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
