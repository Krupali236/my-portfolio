const Resume = () => {
  return (
    <>
      <h1 className="text-center font-bold text-[40px] py-3 decoration-2 underline underline-offset-8">
        Resume
      </h1>
      <p className="text-center text-xl my-3 italic">
        A professional resume page highlighting my educational background, work
        experience, and technical skills. The page is designed for easy
        navigation with clear sections and downloadable options for convenience
      </p>
      <div className="grid grid-cols-2 w-full">
        <div className="column-1">
          <h1 className="text-2xl font-semibold text-slate-700 my-4">Sumary</h1>
          <h3 className="text-xl font-medium text-slate-500">
            <span className="px-3 mx-2 border-[3px] rounded-full border-blue-600"></span>
            Krupali Lalakiya
          </h3>
          <p className="mx-5 border-s-2 border-blue-600 px-5 py-3 text-md">
            Aspiring Frontend Developer with a strong foundation in HTML, CSS,
            JavaScript, and modern frameworks like React.js. Passionate about
            crafting responsive, user-friendly web interfaces and continuously
            learning new technologies to enhance user experience. A
            detail-oriented and creative problem solver eager to contribute
            innovative solutions in a dynamic development environment. Looking
            for an opportunity to apply my skills and grow as a frontend
            developer.
          </p>
          <ul className="mx-5 border-s-2 border-blue-600 px-10 list-disc">
            <li className="py-1">Rajkot , Gujarat , India</li>
            <li className="py-1">93277 77951</li>
            <li className="py-1">krupali.lalakiya236@gmail.com</li>
          </ul>

          <h1 className="text-2xl font-semibold text-slate-700 my-3">
            Professional Experience
          </h1>
          <h3 className="text-xl font-medium text-slate-500">
            <span className="px-3 mx-2 border-[3px] rounded-full border-blue-600"></span>
            Course : FrontEnd Developer
          </h3>
          <p className="mx-5 border-s-2 border-blue-600 px-5 py-3 text-md">
            <p className="py-1 italic">Creative Insight IT Academy </p>
            Learned React.js fundamentals, including components, props, state,
            and hooks. Developed hands-on projects, including dynamic web
            applications with React. Implemented React Router for navigation and
            state management using Context API/Redux. Gained experience in API
            integration, authentication, and performance optimization.
          </p>
          <ul className="mx-5 border-s-2 border-blue-600 px-10 list-disc">
            <li className="py-1 pb-8">
              Frontend: React.js, JavaScript (ES6+), HTML5, CSS3,
              Bootstrap/Tailwind
            </li>
          </ul>
          <h3 className="text-xl font-medium text-slate-500">
            <span className="px-3 mx-2 border-[3px] rounded-full border-blue-600"></span>
            Frontend Trainee
          </h3>

          <p className="mx-5 border-s-2 border-blue-600 px-5 py-3 text-md">
            <p className="py-1 italic">LightCloudCRMSolutionLLP</p>
            Developed a responsive and visually appealing e-commerce website
            frontend using Salesforce Lightning Design System (SLDS) for a
            consistent UI/UX and Salesforce LWR (Lightning Web Runtime) for
            optimized performance. The project focuses on seamless navigation,
            product catalog display, and an interactive user experience.
          </p>
          <ul className="mx-5 border-s-2 border-blue-600 px-10 list-disc pb-4">
            <li className="py-1">
              Frontend: SLDS (Salesforce Lightning Design System), LWR
              (Lightning Web Runtime), LWC (Lightning Web Components)
            </li>
          </ul>
        </div>
        <div className="column-1">
          <h1 className="text-2xl font-semibold text-slate-700 my-4">
            Education
          </h1>
          <h3 className="text-xl font-medium text-slate-500">
            <span className="px-3 mx-2 border-[3px] rounded-full border-blue-600"></span>
            Master of Computer Applications
          </h3>
          <p className="mx-5 border-s-2 border-blue-600 px-5 py-3 text-md italic text-slate-600">
            2018-2021
          </p>
          <p className="mx-5 border-s-2 border-blue-600 px-5  pb-7 text-md font-medium text-slate-600">
            B.H.Gardi College of Engineering and Management
          </p>

          <h3 className="text-xl font-medium text-slate-500">
            <span className="px-3 mx-2 border-[3px] rounded-full border-blue-600"></span>
            Bachlore of Computer Applications
          </h3>
          <p className="mx-5 border-s-2 border-blue-600 px-5 py-3 text-md italic text-slate-600">
            2018-2021
          </p>
          <p className="mx-5 border-s-2 border-blue-600 px-5 pb-7 text-md font-medium text-slate-600">
            R. P. Bhalodiya College
          </p>     

          <h3 className="text-xl font-medium text-slate-500">
            <span className="px-3 mx-2 border-[3px] rounded-full border-blue-600"></span>
            Graphic Designing
          </h3>
          <p className="mx-5 border-s-2 border-blue-600 px-5 py-3 text-md italic text-slate-600">
            2018-2021
          </p>
          <p className="mx-5 border-s-2 border-blue-600 px-5 pb-2 text-md italic">
            SharvamFx
          </p>
          <p className="mx-5 border-s-2 border-blue-600 px-5 py-3 text-md">
            Completed a Graphic Design course focused on visual communication,
            design principles, and creating compelling digital graphics. Gained
            expertise in tools like Adobe Photoshop, Illustrator, and Canva,
            along with a strong foundation in typography, color theory, and
            branding.
          </p>
        </div>
      </div>
    </>
  );
};
export default Resume;
