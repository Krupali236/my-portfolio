const Portfolio = () => {
  const portfolioData = [
    {
      id: 1,
      title: "HTML Form",
      category: "HTML",
      description: "Using Html elements",
      image: "src/assets/images/html-form-11.png",
      link: "https://github.com/Krupali236/html-form1/tree/main",
    },
    {
      id: 2,
      title: "Template",
      category: "HTML",
      description: "Using Html elements",
      image: "",
    },
    {
      id: 3,
      title: "Template",
      category: "HTML",
      description: "Using Html elements",
      image: "",
    },
    {
      id: 4,
      title: "Template",
      category: "HTML",
      description: "Using Html elements",
      image: "",
    },
    {
      id: 5,
      title: "Template",
      category: "HTML",
      description: "Using Html elements",
      image: "",
    },
    {
      id: 6,
      title: "Template",
      category: "HTML",
      description: "Using Html elements",
      image: "",
    },
  ];
  return (
    <>
      <h1 className="text-center font-bold text-[40px] py-3  decoration-2 underline underline-offset-8">
        Portfolio
      </h1>
      <p className="text-center my-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, illum!
        Mollitia quas incidunt delectus nobis sequi minima quod aspernatur
        perferendis!
      </p>

      <div className="container mt-10 mb-3">
        <div className="flex justify-center my-5">
          <button className="bg-[#0563bb] text-white w-32 rounded-full mx-4 hover:bg-slate-700">
            All
          </button>
          <button className="bg-[#0563bb] text-white w-32 rounded-full mx-4 hover:bg-slate-700">
            HTML
          </button>
          <button className="bg-[#0563bb] text-white w-32 rounded-full mx-4 hover:bg-slate-700">
            CSS
          </button>
          <button className="bg-[#0563bb] text-white w-32 rounded-full mx-4 hover:bg-slate-700">
            Javascript
          </button>
          <button className="bg-[#0563bb] text-white w-32 rounded-full mx-4 hover:bg-slate-700">
            React
          </button>
        </div>

        <div className="grid grid-cols-4 my-4 gap-4">
          {portfolioData.map((ele, ind) => (
            <div className="columns-1" key={ind}>
              <div className="border-2 rounded-xl h-full">
                <img
                  src={ele.image}
                  alt={ele.title}
                  className="h-auto w-full rounded-t-xl"
                />
                <h1 className="text-center text-lg font-bold">{ele.title}</h1>
                <p className="text-center">{ele.description}</p>
                <p className="text-center">{ele.category}</p>
                <p className="text-center">
                  <a className="font-normal text-slate-700" href={ele.link}>
                    Git Link
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Portfolio;
