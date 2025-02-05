const Skill = () => {
  return (
    <>
      <div className="grid">
        <h1 className="text-center font-bold text-[40px] py-3 decoration-2 underline underline-offset-8">
          Skills
        </h1>
        <p className="text-xl italic text-center my-2">
          A dedicated skills page showcasing my proficiency in various frontend
          technologies, including HTML, CSS, JavaScript, React.js, and more.
        </p>
      </div>
      <div className="grid grid-cols-2 mt-3">
        <div className="columns-1 my-3">
          <h1 className="font-semibold text-sm">HTML</h1>
          <div className="flex items-center">
            <div className="h-2 w-96 bg-slate-400">
              <div className="h-2 w-96 bg-blue-900"></div>
            </div>
            <span className="ms-5 items-center">100% </span>
          </div>
        </div>
        <div className="columns-1 my-3">
          <h1 className="font-semibold text-sm">CSS</h1>
          <div className="flex items-center">
            <div className="h-2 w-96 bg-slate-500">
              <div className="h-2 w-80 bg-blue-900"></div>
            </div>
            <span className="ms-5 items-center">95% </span>
          </div>
        </div>
        <div className="columns-1 my-3">
          <h1 className="font-semibold text-sm">Javascript</h1>
          <div className="flex items-center">
            <div className="h-2 w-96 bg-slate-500">
              <div className="h-2 w-72 bg-blue-900"></div>
            </div>
            <span className="ms-5 items-center">75% </span>
          </div>
        </div>
        <div className="columns-1 my-3">
          <h1 className="font-semibold text-sm">ReactJS</h1>
          <div className="flex items-center">
            <div className="h-2 w-96 bg-slate-500">
              <div className="h-2 w-64 bg-blue-900"></div>
            </div>
            <span className="ms-5 items-center">70% </span>
          </div>
        </div>
        {/* <div className="columns-1 my-3">
          <h1 className="font-semibold text-sm">Photoshop</h1>
          <div className="flex items-center">
            <div className="h-2 w-96 bg-slate-500">
              <div className="h-2 w-64 bg-blue-900"></div>
            </div>
            <span className="ms-5 items-center">70% </span>
          </div>
        </div>
        <div className="columns-1 my-3">
          <h1 className="font-semibold text-sm">Coral draw</h1>
          <div className="flex items-center">
            <div className="h-2 w-96 bg-slate-500">
              <div className="h-2 w-72 bg-blue-900"></div>
            </div>
            <span className="ms-5 items-center">75% </span>
          </div>
        </div> */}
      </div>
    </>
  );
};
export default Skill;
