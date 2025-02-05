import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Portfolio = () => {
  const navigate = useNavigate();
  const portfolioData = [
    {
      id: 1,
      title: "HTML Registration Form",
      category: "HTML",
      description:
        "Designed a responsive and user-friendly HTML form with structured input fields, validation, and a modern UI. ",
      image: "src/assets/images/html-form-1.png",
      link: "https://github.com/Krupali236/html-form1/tree/main",
    },
    {
      id: 2,
      title: "HTML Contact Us Form",
      category: "HTML",
      description:
        "Designed a responsive and user-friendly HTML form with structured input fields, validation, and a modern UI using gradient.",
      image: "src/assets/images/html-form-2.png",
      link: "https://github.com/Krupali236/html-form2",
    },
    {
      id: 3,
      title: "HTML Login Form",
      category: "HTML",
      description:
        "Designed a responsive and user-friendly HTML form with structured input fields, validation, and a modern UI. Styled using CSS/Tailwind for better accessibility and enhanced user experience.",
      image: "src/assets/images/html-form-3.png",
      link: "https://github.com/Krupali236/html-form3",
    },
    {
      id: 4,
      title: "CSS Login Template",
      category: "CSS",
      description: "Created visually appealing and responsive CSS form designs and templates with clean layouts, custom styling, and smooth user interactions. ",
      image: "src/assets/images/css-demo-page.png",
      link: "https://github.com/Krupali236/css-demo-page",
    },
    {
      id: 5,
      title: "CSS Sign in page template",
      category: "CSS",
      description: " Built interactive and accessible CSS layouts tailored for various web applications, ensuring pixel-perfect design, smooth transitions, and optimized performance.",
      image: "src/assets/images/css-signin-page.png",
      link: "https://github.com/Krupali236/css-SignIn",
    },
    {
      id: 6,
      title: "CSS Template",
      category: "CSS",
      description: "Styled using CSS for better accessibility and enhanced user experience.",
      image: "src/assets/images/css-signup-page.png",
      link: "https://github.com/Krupali236/css-page-template",
    },
    {
      id: 7,
      title: "CSS wesite template",
      category: "CSS",
      description: "Developed dynamic and visually appealing CSS layouts that enhance user experience with intuitive navigation, smooth animations, and optimized performance.",
      image: "src/assets/images/css-template-design.png",
      link: "https://github.com/Krupali236/css-website-template",
    },
    {
      id: 8,
      title: "CSS Modern Chair Layout Template",
      category: "CSS",
      description: "Created scalable and reusable CSS layout templates using modern techniques like CSS Grid, Flexbox, and media queries to ensure cross-browser compatibility and responsiveness.",
      image: "src/assets/images/css-wesite-template.png",
      link: "https://github.com/Krupali236/css-modern-chair-layout",
    },
    {
      id: 9,
      title: "CSS Template",
      category: "CSS",
      description: "Built interactive and accessible CSS layouts tailored for various web applications, ensuring pixel-perfect design, smooth transitions, and optimized performance.",
      image: "src/assets/images/css-template.png",
      link: "https://github.com/Krupali236/css-template-eduGrids",
    },
    {
      id: 10,
      title: "CSS Template",
      category: "CSS",
      description: "Developed elegant and fully responsive CSS form templates with custom styling, smooth animations, and intuitive layouts.",
      image: "src/assets/images/css-template-softypinko.png",
      link: "https://github.com/Krupali236/css-template-shoftypinko",
    },
    {
      id: 11,
      title: "CSS Template",
      category: "CSS",
      description: "Built interactive and accessible CSS layouts tailored for various web applications, ensuring pixel-perfect design, smooth transitions, and optimized performance.",
      image: "src/assets/images/css-template-inance.png",
      link: "https://github.com/Krupali236/css-template-inance",
    },
    {
      id: 12,
      title: "CSS Template",
      category: "CSS",
      description: "Created scalable and reusable CSS layout templates using modern techniques like CSS Grid, Flexbox, and media queries to ensure cross-browser compatibility and responsiveness.",
      image: "src/assets/images/css-template-mdrn.png",
      link: "https://github.com/Krupali236/css-template-mdrn",
    },
    {
      id: 13,
      title: "CSS Sign in page template",
      category: "CSS",
      description: "Engineered well-structured and responsive web layouts with CSS, focusing on usability, accessibility, and seamless user interaction across all screen sizes.",
      image: "src/assets/images/css-template-lugx.png",
      link: "https://github.com/Krupali236/css-template-lugx",
    },
    {
      id: 14,
      title: "Calculator",
      category: "Javascript",
      description: "Developed a fully functional JavaScript calculator with a clean UI, real-time calculations, and error handling. Designed for responsiveness and smooth user interaction using HTML, CSS, and vanilla JavaScript.",
      image: "src/assets/images/js-calculator.png",
      link: "https://github.com/Krupali236/calculator",
    },
    {
      id: 15,
      title: "Javascript Template",
      category: "Javascript",
      description: "Created a dynamic JavaScript template with a built-in filtering system, allowing users to search and sort data effortlessly. Designed for a smooth, interactive experience with using vanilla JavaScript.",
      image: "src/assets/images/js-babyoutlet-template.png",
      link: "https://github.com/Krupali236/js-babyoutlet-template",
    },
    {
      id: 16,
      title: "Random Quote",
      category: "Javascript",
      description: "Built a JavaScript-powered random quote generator that displays a new inspirational quote each time a button is clicked. Integrated smooth transitions and an intuitive user interface for an engaging experience.",
      image: "src/assets/images/js-random-quote.png",
      link: "https://github.com/Krupali236/js-random-quote",
    },
    {
      id: 17,
      title: "Todo List",
      category: "React",
      description: "Developed a simple and interactive JavaScript Todo app that allows users to add, edit, and delete tasks. Features include task status toggling, local storage for persistence, and a clean, user-friendly interface.",
      image: "src/assets/images/react-todo.png",
      link: "https://github.com/Krupali236/react-todolist",
    },
  ];
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
              activeCategory === "HTML" ? "bg-slate-700" : ""
            }`}
            onClick={() => handleClick("HTML")}
          >
            HTML
          </button>
          <button
            className={`bg-[#0563bb] text-white w-32 rounded-full mx-4 hover:bg-slate-700 ${
              activeCategory === "CSS" ? "bg-slate-700" : ""
            }`}
            onClick={() => handleClick("CSS")}
          >
            CSS
          </button>
          <button
            className={`bg-[#0563bb] text-white w-32 rounded-full mx-4 hover:bg-slate-700 ${
              activeCategory === "Javascript" ? "bg-slate-700" : ""
            }`}
            onClick={() => handleClick("Javascript")}
          >
            Javascript
          </button>
          <button
            className={`bg-[#0563bb] text-white w-32 rounded-full mx-4 hover:bg-slate-700 ${
              activeCategory === "React" ? "bg-slate-700" : ""
            }`}
            onClick={() => handleClick("React")}
          >
            React
          </button>
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
                  {ele.category}
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
