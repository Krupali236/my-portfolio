import React from "react";
import home from "./../assets/home.svg";
import user from "./../assets/user.svg";
import document from "./../assets/document.svg";
import portfolio from "./../assets/portfolio.svg";
import contact from "./../assets/contact.svg";
import facebook from "./../assets/facebook.svg";
import instagram from "./../assets/instagram.svg";
import linkedin from "./../assets/linkedin.svg";

export default function Home() {
  return (
    <>
      <div className="h-full w-full flex items-center justify-center">
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
    </>
  );
}
