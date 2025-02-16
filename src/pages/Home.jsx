import React from "react";
import facebook from "./../assets/facebook.svg";
import instagram from "./../assets/instagram.svg";
import linkedin from "./../assets/linkedin.svg";

export default function Home() {
  return (
    <>
      <div className="h-full w-full flex items-center justify-center">
        <div className="flex flex-col">
          <h1 className="font-extrabold my-6 text-[60px] text-blue-100">
            Krupali Lalakiya
          </h1>
          <h3 className="font-semibold text-4xl text-slate-700 bg-blue-200 px-5  p-2">
            I'm Frontend Devloper
          </h3>
          <div className="flex mt-6">
            <a
              href="https://www.facebook.com/share/1ArCkF7Q8d/"
              className="bg-blue-200 mx-3 hover:bg-blue-100 rounded-full p-3"
            >
              <img
                src={facebook}
                alt="facebook"
                height="25px"
                width="25px"
                className="mx-4"
              />
            </a>
            <a
              href="https://www.instagram.com/krupali_.kishan_.27?igsh=MWJjNnM5OG96dDhuNQ=="
              className="bg-blue-200 mx-3 hover:bg-blue-100 rounded-full p-3"
            >
              <img
                src={instagram}
                alt="instagram"
                height="25px"
                width="25px"
                className="mx-4"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/krupali-lalakiya-a23294228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="bg-blue-200 mx-3 hover:bg-blue-100 rounded-full p-3"
            >
              <img
                src={linkedin}
                alt="linkedin"
                height="25px"
                width="25px"
                className="mx-4"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
