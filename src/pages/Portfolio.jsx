import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {portfolioData} from "../component/portfolioData";
const Portfolio = () => {
  const navigate = useNavigate();
 
  const [filteredData, setFilteredData] = useState(portfolioData); // Use filteredData to store the filtered results
  const [activeCategory, setActiveCategory] = useState("all"); // Track the active category
  const handleClick = (category) => {
    setActiveCategory(category); // Update the active category
    console.log("click");
    console.log(category, "category");
    if (category == "all") {
      setFilteredData(portfolioData); // If 'all' is selected, show all items
    } else {
      portfolioData.filter((ele) => {
        const filtered = portfolioData.filter(
          (ele) => ele.category === category
        );
        setFilteredData(filtered); // Update the state with the filtered items based on category
      });
    }
  };
  return (
    <>
      <h1 className="text-center font-bold text-[40px] py-3  decoration-2 underline underline-offset-8">
        Portfolio
      </h1>
      <p className="text-center my-4 italic text-xl">
        Here are some of the projects I've worked on, showcasing my skills in
        React.js, frontend development, and UI/UX design. Click on any project
        to learn more!
      </p>

      <div className="container mt-10 mb-3 px-4">
        <div className="flex justify-center my-5 mb-10">
          <button
            className={`bg-[#0563bb] text-white w-32 rounded-full mx-4 hover:bg-slate-700 ${
              activeCategory === "all" ? "bg-slate-700" : ""
            }`}
            onClick={() => handleClick("all")}
          >
            All
          </button>
          <button
            className={`bg-[#0563bb] text-white w-32 rounded-full mx-4 hover:bg-slate-700 ${
              activeCategory === "Form" ? "bg-slate-700" : ""
            }`}
            onClick={() => handleClick("Form")}
          >
            Form
          </button>
          <button
            className={`bg-[#0563bb] text-white w-32 rounded-full mx-4 hover:bg-slate-700 ${
              activeCategory === "Website" ? "bg-slate-700" : ""
            }`}
            onClick={() => handleClick("Website")}
          >
            Website
          </button>
          <button
            className={`bg-[#0563bb] text-white w-32 rounded-full mx-4 hover:bg-slate-700 ${
              activeCategory === "Application" ? "bg-slate-700" : ""
            }`}
            onClick={() => handleClick("Application")}
          >
            Application
          </button>
          {/* <button
            className={`bg-[#0563bb] text-white w-32 rounded-full mx-4 hover:bg-slate-700 ${
              activeCategory === "React" ? "bg-slate-700" : ""
            }`}
            onClick={() => handleClick("React")}
          >
            React
          </button> */}
        </div>

        <div className="grid grid-cols-3 my-4 gap-10">
          {filteredData.map((ele, ind) => (
            <div className="columns-1 h-full" key={ind}>
              <div className="border-[1px] rounded-xl h-full">
                <div className="h-80">
                  <img
                    src={ele.image}
                    alt={ele.title}
                    className="h-full w-full rounded-t-xl"
                  />
                </div>
                <h1 className=" ps-3 my-3 text-lg font-bold">{ele.title}</h1>
                <p className=" ps-3 my-3">{ele.description}</p>
                <p className=" ps-3 my-3">
                  {" "}
                  <span className="font-semibold">Technologies : </span>{" "}
                  {ele.technology}
                </p>
                <p className=" ps-3 my-3">
                  <a className="font-semibold text-slate-700" href={ele.link}>
                    🐙 GitHub
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center flex-col">
        <p className="text-center font-semibold italic my-5">Want to work together or see more of my work? Let’s connect! </p>
        <button className="bg-[#0563bb] text-white rounded-3xl cursor-pointer" onClick={()=>navigate("/contact")}> Contact Me</button>
        </div>
      </div>
    </>
  );
};
export default Portfolio;
