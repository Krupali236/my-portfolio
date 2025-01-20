import React from "react";
import home from "./../assets/home.svg";
import user from "./../assets/user.svg";
import document from "./../assets/document.svg";
import portfolio from "./../assets/portfolio.svg";
import contact from "./../assets/contact.svg";
import facebook from "./../assets/facebook.svg";
import instagram from "./../assets/instagram.svg";
import linkedin from "./../assets/linkedin.svg";
import Navbar from "../navbar/navbar";

export default function Home() {
  return (
    <>
      <div className="h-full w-full absolute flex items-center justify-center">
        <div className="flex flex-col">
          <h1 className="font-extrabold my-6 text-[60px] text-gray-700">
            Krupali Lalakiya
          </h1>
          <h3 className="font-semibold text-4xl text-gray-600">
            I'm Frontend Devloper
          </h3>
          <div className="flex mt-6">
            <img
              src={facebook}
              alt="facebook"
              height="25px"
              width="25px"
              className="mx-4"
            />
            <img
              src={instagram}
              alt="instagram"
              height="25px"
              width="25px"
              className="mx-4"
            />
            <img
              src={linkedin}
              alt="linkedin"
              height="25px"
              width="25px"
              className="mx-4"
            />
          </div>
        </div>
      </div>

      {/* <div className="bg-white h-full w-full absolute bg-opacity-55"></div> */}
      {/* <div className="grid h-full w-full">
      <div className="col-start-2 flex flex-col justify-center align-middle items-start ms-10 px-5">
        <h1 className="font-extrabold my-6 text-[60px] text-gray-700">
          Krupali Lalakiya
        </h1>
        <h3 className="font-semibold text-4xl text-gray-600">
          I'm Frontend Devloper
        </h3>
        <div className="flex mt-6">
          <img
            src={facebook}
            alt="facebook"
            height="25px"
            width="25px"
            className="mx-4"
          />
          <img
            src={instagram}
            alt="instagram"
            height="25px"
            width="25px"
            className="mx-4"
          />
          <img
            src={linkedin}
            alt="linkedin"
            height="25px"
            width="25px"
            className="mx-4"
          />
        </div>
      </div>
      </div> */}
      {/* <div className="bg-white h-full w-full absolute bg-opacity-55"></div>
      <div className="container:full relative">
        <div className="grid grid-cols-12 h-screen">
          <div className="col-span-2 flex flex-col justify-center ps-5">
            <div
              className="bg-[#0563bb] rounded-full my-3 h-16 w-16 flex items-center justify-start transition-all duration-700 ease-in-out delay-150 
                                   hover:w-40 hover:delay-150 overflow-hidden"
            >
              <img
                src={home}
                alt="home"
                height="30px"
                width="30px"
                className="m-4 transition-all duration-700 ease-in-out"
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
          <div className="col-span-10 flex flex-col justify-center align-middle items-start ms-10 px-5">
            <h1 className="font-extrabold my-6 text-[60px] text-gray-700">
              Krupali Lalakiya
            </h1>
            <h3 className="font-semibold text-4xl text-gray-600">
              I'm Frontend Devloper
            </h3>
            <div className="flex mt-6">
              <img
                src={facebook}
                alt="facebook"
                height="25px"
                width="25px"
                className="mx-4"
              />
              <img
                src={instagram}
                alt="instagram"
                height="25px"
                width="25px"
                className="mx-4"
              />
              <img
                src={linkedin}
                alt="linkedin"
                height="25px"
                width="25px"
                className="mx-4"
              />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
