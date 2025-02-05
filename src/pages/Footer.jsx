import instagrem from "./../assets/instagram.svg";
import facebook from "./../assets/facebook.svg";
import linkedin from "./../assets/linkedin.svg";
import git from "./../assets/git.svg";
const Footer = () => {
  return (
    <>
      <footer className="bg-slate-100 bg-opacity-75">
        <h1 className="text-center text-slate-600 font-semibold my-3">
          Krupali Lalakiya
        </h1>
        <p className="text-center italic py-2">
         Krupali Lalakiya © 2025 . All Rights Reserved.</p>
        <ul className="flex justify-center items-stretch py-5">
          <li className="mx-2 bg-[#b6babe] rounded-full w-10 h-10 cursor-pointer hover:bg-slate-300 flex items-center justify-center">
            <a href="https://www.facebook.com/share/1ArCkF7Q8d/" className="cursor-pointer">
              <img src={facebook} alt="facebook" width="20px" height="20px" />
            </a>
          </li>
          <li className="mx-2 bg-[#b6babe] rounded-full w-10 h-10 cursor-pointer hover:bg-slate-300 flex items-center justify-center">
            <a href="https://www.instagram.com/krupali_.kishan_.27?igsh=MWJjNnM5OG96dDhuNQ==" className="cursor-pointer">
              <img src={instagrem} alt="instagram" width="20px" height="20px" />
            </a>
          </li>
          <li className="mx-2 bg-[#b6babe] rounded-full w-10 h-10  cursor-pointer hover:bg-slate-300 flex items-center justify-center">
            <a href="https://www.linkedin.com/in/krupali-lalakiya-a23294228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="cursor-pointer">
              <img src={linkedin} alt="linkedin" width="20px" height="20px" />
            </a>
          </li>
          <li className="mx-2 bg-[#b6babe] rounded-full w-10 h-10 cursor-pointer hover:bg-slate-300 flex items-center justify-center">
            {" "}
            <a href="https://github.com/Krupali236" className="cursor-pointer">
              <img src={git} alt="git" width="20px" height="20px" />
            </a>
          </li>
        </ul>
        <div className="w-9/12 mx-auto border-[1px] border-slate-300 my-2"></div>
        <div className="w-full text-center py-3">
          <p className="my-2 italic">
          Developed with React.js 
          </p>
          <p className="my-4">
          Designed & Built by Krupali Lalakiya | © 2025
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
