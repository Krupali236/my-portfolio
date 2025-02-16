import bg from "./../assets/images/profile1.jpg";
import chevronRight from "./../assets/chevronRight.svg";
import Skill from "./Skills";
const About = () => {
  return (
    <>
      <div className="grid">
        <h1 className="text-center font-bold text-[40px] py-3 decoration-2 underline underline-offset-8 mb-5">
          About
        </h1>
        <p className="text-center text-slate-700  mb-12 text-xl italic">
          Hi, I'm Krupali Lalakiya, a passionate Frontend Developer skilled in
          React.js. I love building dynamic, user-friendly web applications that
          deliver great user experiences. My focus is on writing clean,
          efficient code and continuously learning new technologies to enhance
          my development skills.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-7 my-5">
        <div className="col-span-4">
          <img src={bg} alt="bg" className="h-full w-full my-5" />
        </div>
        <div className="col-span-8">
          <h3 className="font-bold text-4xl my-3">Frontend Developer</h3>
          <p className="text-2xl my-3 font-semibold italic">Krupali Lalakiya</p>
          <div className="grid">
            <div className="columns-1 my-3">
              <div className="flex my-5">
                <img
                  src={chevronRight}
                  alt="chevronRight"
                  width="20px"
                  height="20px"
                />
                <p className="font-bold text-xl ps-2">
                  Birthday :
                  <span className="font-normal ps-4">23 June 2001</span>{" "}
                </p>
              </div>
              <div className="flex my-5">
                <img
                  src={chevronRight}
                  alt="chevronRight"
                  width="20px"
                  height="20px"
                />
                <p className="font-bold text-xl ps-2">
                  Phone :<span className="font-normal ps-4">93277 77951</span>{" "}
                </p>
              </div>
              <div className="flex my-5">
                <img
                  src={chevronRight}
                  alt="chevronRight"
                  width="20px"
                  height="20px"
                />
                <p className="font-bold text-xl ps-2">
                  City :<span className="font-normal ps-4"> Rajkot </span>{" "}
                </p>
              </div>
              <div className="flex my-5">
                <img
                  src={chevronRight}
                  alt="chevronRight"
                  width="20px"
                  height="20px"
                />
                <p className="font-bold text-xl ps-2">
                  Age :<span className="font-normal ps-4">23</span>{" "}
                </p>
              </div>
              <div className="flex my-5">
                <img
                  src={chevronRight}
                  alt="chevronRight"
                  width="20px"
                  height="20px"
                />
                <p className="font-bold text-xl ps-2">
                  Degree :<span className="font-normal ps-4">MCA</span>{" "}
                </p>
              </div>
              <div className="flex my-5">
                  <img
                    src={chevronRight}
                    alt="chevronRight"
                    width="20px"
                    height="20px"
                  />
                  <p className="font-bold text-xl ps-2">
                    Email :
                    <span className="font-normal ps-4">
                      krupali.lalakiya236@gmail.com
                    </span>
                  </p>
                </div>
            </div>
            {/* <div className="columns-1 my-3">
                <div className="flex my-5">
                  <img
                    src={chevronRight}
                    alt="chevronRight"
                    width="20px"
                    height="20px"
                  />
                  <p className="font-bold text-xl ps-2">
                    Age :<span className="font-normal ps-4">23</span>{" "}
                  </p>
                </div>
                <div className="flex my-5">
                  <img
                    src={chevronRight}
                    alt="chevronRight"
                    width="20px"
                    height="20px"
                  />
                  <p className="font-bold text-xl ps-2">
                    Degree :<span className="font-normal ps-4">MCA</span>{" "}
                  </p>
                </div>
                <div className="flex my-5">
                  <img
                    src={chevronRight}
                    alt="chevronRight"
                    width="20px"
                    height="20px"
                  />
                  <p className="font-bold text-xl ps-2">
                    Email :
                    <span className="font-normal ps-4">
                      krupali.lalakiya236@gmail.com
                    </span>{" "}
                  </p>
                </div>
              </div> */}
          </div>
          <div className="grid">
            <p className="text-lg font-semibold">
              Feel free to check out my projects and get in touch! Let’s build
              something amazing together.
            </p>
          </div>
        </div>
      </div>
      <Skill />
    </>
  );
};
export default About;
