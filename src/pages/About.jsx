import bg from "./../assets/images/bg.jpg";
import chevronRight from "./../assets/chevronRight.svg";
import Skill from "./Skills";
const About = () => {
  return (
    <>
      <div className="grid">
        <h1 className="text-center font-bold text-[40px] py-6">About</h1>
        <p className="text-center text-xl my-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
          distinctio officiis asperiores ad minus cumque vero veritatis quaerat
          illum autem, neque a alias temporibus quisquam! Hic rem repellat fugit
          maiores.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-7 my-5">
        <div className="col-span-3">
          <img src={bg} alt="bg" className="h-full w-full my-5" />
        </div>
        <div className="col-span-9">
          <h3 className="font-bold text-4xl my-3">Frontend Devloper</h3>
          <p className="text-2xl my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, id?
          </p>
          <div className="grid grid-cols-2">
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
                  Website :
                  <span className="font-normal ps-4">www.example.com</span>{" "}
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
            </div>
            <div className="columns-1 my-3">
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
              <div className="flex my-5">
                <img
                  src={chevronRight}
                  alt="chevronRight"
                  width="20px"
                  height="20px"
                />
                <p className="font-bold text-xl ps-2">
                  Freelance :
                  <span className="font-normal ps-4">Not available</span>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="grid">
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              rerum modi officiis tempora, quaerat odit unde voluptatum illum
              consequuntur laudantium eos ipsa assumenda, tempore perferendis?
              Accusamus reprehenderit eveniet tempora facere.
            </p>
          </div>
        </div>
      </div>
      <Skill />
      {/* <div className="container:full relative">
        <div className="grid grid-cols-12 h-screen">
        
          <div className="col-span-10 flex flex-col justify-center align-middle items-start ms-10 px-5">
            <div className="container mx-auto">
              <div className="grid my-5">
                <h1 className="text-center font-bold text-[40px] py-6">
                  About
                </h1>
                <p className="text-center text-xl">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Facilis distinctio officiis asperiores ad minus cumque vero
                  veritatis quaerat illum autem, neque a alias temporibus
                  quisquam! Hic rem repellat fugit maiores.
                </p>
              </div>
              <div className="grid grid-cols-12 gap-7">
                <div className="col-span-3">
                  <img src={bg} alt="bg" className="h-96 w-full" />
                </div>
                <div className="col-span-9">
                  <h3 className="font-bold text-4xl my-3">Frontend Devloper</h3>
                  <p className="text-2xl my-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore, id?
                  </p>
                  <div className="grid grid-cols-2">
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
                          Website :
                          <span className="font-normal ps-4">
                            www.example.com
                          </span>{" "}
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
                          Phone :
                          <span className="font-normal ps-4">93277 77951</span>{" "}
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
                          City :
                          <span className="font-normal ps-4"> Rajkot </span>{" "}
                        </p>
                      </div>
                    </div>
                    <div className="columns-1 my-3">
                      <div className="flex my-5">
                        <img
                          src={chevronRight}
                          alt="chevronRight"
                          width="20px"
                          height="20px"
                        />
                        <p className="font-bold text-xl ps-2">
                          Age :<span className="font-normal ps-4">30</span>{" "}
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
                      <div className="flex my-5">
                        <img
                          src={chevronRight}
                          alt="chevronRight"
                          width="20px"
                          height="20px"
                        />
                        <p className="font-bold text-xl ps-2">
                          Freelance :
                          <span className="font-normal ps-4">
                            Not available
                          </span>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid">
                    <p className="text-xl">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dicta rerum modi officiis tempora, quaerat odit unde
                      voluptatum illum consequuntur laudantium eos ipsa
                      assumenda, tempore perferendis? Accusamus reprehenderit
                      eveniet tempora facere.
                    </p>
                  </div>
                </div>
              </div>
              <Skill />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default About;
