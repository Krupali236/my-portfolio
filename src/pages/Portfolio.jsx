const Portfolio = () => {
  const portfolioData = [
    {
      id: 1,
      title: "Template",
      Category: "HTML",
      Description: "Using Html elements",
      image: "",
    },
    {
      id: 2,
      title: "Template",
      Category: "HTML",
      Description: "Using Html elements",
      image: "",
    },
    {
      id: 3,
      title: "Template",
      Category: "HTML",
      Description: "Using Html elements",
      image: "",
    },
    {
      id: 4,
      title: "Template",
      Category: "HTML",
      Description: "Using Html elements",
      image: "",
    },
    {
      id: 5,
      title: "Template",
      Category: "HTML",
      Description: "Using Html elements",
      image: "",
    },
    {
      id: 6,
      title: "Template",
      Category: "HTML",
      Description: "Using Html elements",
      image: "",
    },
  ];
  return (
    <>
      {/* <h1 className="text-center my-3 font-bold  decoration-2 underline underline-offset-8 ">Portfolio</h1> */}
      <h1 className="text-center font-bold text-[40px] py-3  decoration-2 underline underline-offset-8">
        Portfolio
      </h1>
      <p className="text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, illum!
        Mollitia quas incidunt delectus nobis sequi minima quod aspernatur
        perferendis!
      </p>

      <div className="container my-3">
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

        <div className="grid grid-cols-4 my-4">
          <div className="columns-1">
            <div className="border-2">
                <h1 className="text-center">Template</h1>
                <p className="text-center">Desctiption</p>
                <p className="text-center">Category : HTml</p>
            </div>
            {/* {portfolioData.map((ele) => {
              <div>{ele.title} </div>;
              <div>{ele.Category}</div>;

            })} */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Portfolio;
