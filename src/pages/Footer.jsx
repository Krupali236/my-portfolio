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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
          mollitia.
        </p>
        <ul className="flex justify-center items-center py-5">
          <li className="mx-2 bg-[#b6babe] rounded-full w-10 h-10 cursor-pointer hover:bg-slate-300">
            <a href="#" className=" flex justify-center">
              <img src={facebook} alt="facebook" width="20px" height="20px" />
            </a>
          </li>
          <li className="mx-2 bg-[#b6babe] rounded-full w-10 h-10 flex justify-center cursor-pointer hover:bg-slate-300">
            <img src={instagrem} alt="instagram" width="20px" height="20px" />
          </li>
          <li className="mx-2 bg-[#b6babe] rounded-full w-10 h-10 flex justify-center cursor-pointer hover:bg-slate-300">
            <img src={linkedin} alt="linkedin" width="20px" height="20px" />
          </li>
          <li className="mx-2 bg-[#b6babe] rounded-full w-10 h-10 flex justify-center cursor-pointer hover:bg-slate-300">
            {" "}
            <img src={git} alt="git" width="20px" height="20px" />
          </li>
        </ul>
        <div className="w-9/12 mx-auto border-[1px] border-slate-300 my-2"></div>
        <div className="w-full text-center py-3">
          <p className="my-2">
            Copyright <b> Alex Smith</b> All right Reserved
          </p>
          <p className="my-4">
            Designed by{" "}
            <a href="#" className="text-[#0563bb] font-normal">
              Tailwindcss
            </a>{" "}
            Distributed by{" "}
            <a href="#" className="text-[#0563bb] font-normal">
              Themewagon
            </a>
          </p>
        </div>
      </footer>    
    </>
  );
};

export default Footer;
