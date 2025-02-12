import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { portfolioData } from "../component/portfolioData";
const Portfolio = () => {
  const navigate = useNavigate();
  const [filteredData, setFilteredData] = useState(portfolioData); // Use filteredData to store the filtered results
  const [activeCategory, setActiveCategory] = useState("All"); // Track the active category

  // Function to shuffle an array
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleClick = (category) => {
    setActiveCategory(category); // Update the active category
    console.log("click");
    console.log(category, "category");
    if (category == "All") {
      setFilteredData(portfolioData); // If 'all' is selected, show all items
    } else {
      portfolioData.filter((ele) => {
        const filtered = portfolioData.filter(
          (ele) => ele.category === category
        );
        // Shuffle the filtered data and set it
        setFilteredData(shuffleArray([...filtered]));
      });
    }
  };
  // Shuffle data on component mount
  useEffect(() => {
    setFilteredData(shuffleArray([...portfolioData])); // Shuffle initial data
  }, []);
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
        {/* Filter Buttons */}
        <div className="flex justify-center my-5 mb-10">
          {["All", "Form", "Template", "Website", "Application"].map((category) => (
            <button
              key={category}
              className={`bg-[#0563bb] text-lg text-white w-36 rounded-full mx-4 hover:bg-slate-700 ${
                activeCategory === category ? "bg-slate-700" : ""
              }`}
              onClick={() => handleClick(category)}
            >
              {category}
            </button>
          ))}
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
          <p className="text-center font-semibold italic my-5">
            Want to work together or see more of my work? Let’s connect!{" "}
          </p>
          <button
            className="bg-[#0563bb] text-white rounded-3xl cursor-pointer"
            onClick={() => navigate("/contact")}
          >
            {" "}
            Contact Me
          </button>
        </div>
      </div>
    </>
  );
};
export default Portfolio;
