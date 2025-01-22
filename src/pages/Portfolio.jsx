const Portfolio = () => {
  const portfolioData = [
    {
      id: 1,
      title: "HTML Register Form",
      category: "HTML",
      description: "Using Html elements",
      image: "src/assets/images/html-form-1.png",
      link: "https://github.com/Krupali236/html-form1/tree/main",
    },
    {
      id: 2,
      title: "HTML Contact Us Form",
      category: "HTML",
      description: "Using Html elements",
      image: "src/assets/images/html-form-2.png",
      link: "https://github.com/Krupali236/html-form2",
    },
    {
      id: 3,
      title: "HTML Login Form",
      category: "HTML",
      description: "Using Html elements",
      image: "src/assets/images/html-form-3.png",
      link: "https://github.com/Krupali236/html-form3",
    },
    {
      id: 4,
      title: "CSS Template",
      category: "CSS",
      description: "Using CSS elements",
      image: "src/assets/images/css-demo-page.png",
      link: "https://github.com/Krupali236/css-demo-page",
    },
    {
      id: 5,
      title: "CSS Sign in page template",
      category: "CSS",
      description: "Using CSS elements",
      image: "src/assets/images/css-signin-page.png",
      link: "https://github.com/Krupali236/css-SignIn",
    },
    {
      id: 6,
      title: "CSS Template",
      category: "CSS",
      description: "Using CSS elements",
      image: "src/assets/images/css-signup-page.png",
      link: "https://github.com/Krupali236/css-page-template",
    },
    {
      id: 7,
      title: "CSS wesite template",
      category: "CSS",
      description: "Using CSS elements",
      image: "src/assets/images/css-template-design.png",
      link: "https://github.com/Krupali236/css-website-template",
    },
    {
      id: 8,
      title: "CSS Modern Chair Layout Template",
      category: "CSS",
      description: "Using CSS elements",
      image: "src/assets/images/css-wesite-template.png",
      link: "https://github.com/Krupali236/css-modern-chair-layout",
    },
    {
      id: 9,
      title: "CSS Template",
      category: "CSS",
      description: "Using CSS elements",
      image: "src/assets/images/css-template.png",
      link: "https://github.com/Krupali236/css-template-eduGrids",
    },
    {
      id: 10,
      title: "CSS Template",
      category: "CSS",
      description: "Using CSS elements",
      image: "src/assets/images/css-template-softypinko.png",
      link: "https://github.com/Krupali236/css-template-shoftypinko",
    },
    {
      id: 11,
      title: "CSS Template",
      category: "CSS",
      description: "Using CSS elements",
      image: "src/assets/images/css-template-inance.png",
      link: "https://github.com/Krupali236/css-template-inance",
    },
    {
      id: 12,
      title: "CSS Template",
      category: "CSS",
      description: "Using CSS elements",
      image: "src/assets/images/css-template-mdrn.png",
      link: "https://github.com/Krupali236/css-template-mdrn",
    },
    {
      id: 13,
      title: "CSS Sign in page template",
      category: "CSS",
      description: "Using CSS elements",
      image: "src/assets/images/css-template-lugx.png",
      link: "https://github.com/Krupali236/css-template-lugx",
    },
    {
      id: 6,
      title: "CSS Template",
      category: "CSS",
      description: "Using CSS elements",
      image: "src/assets/images/css-signup-page.png",
      link: "https://github.com/Krupali236/css-page-template",
    },
    {
      id: 7,
      title: "CSS wesite template",
      category: "CSS",
      description: "Using CSS elements",
      image: "src/assets/images/css-template-design.png",
      link: "https://github.com/Krupali236/css-website-template",
    },
    {
      id: 8,
      title: "CSS Modern Chair Layout Template",
      category: "CSS",
      description: "Using CSS elements",
      image: "src/assets/images/css-wesite-template.png",
      link: "https://github.com/Krupali236/css-modern-chair-layout",
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

      <div className="container mt-10 mb-3 px-4">
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

        <div className="grid grid-cols-3 my-4 gap-4">
          {portfolioData.map((ele, ind) => (
            <div className="columns-1" key={ind}>
              <div className="border-2 rounded-xl h-full">
                <div className="h-72">
                <img
                  src={ele.image}
                  alt={ele.title}
                  className="h-full w-full rounded-t-xl"
                />
                </div>
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
