import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Skill from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Navbar from "./navbar/navbar";

export default function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <div className="container">
            <div className="grid grid-cols-12 h-screen">
              <div className="col-span-2">
                <Navbar />
              </div>
              <div className="col-span-10">
                <Home />
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <div className="container">
            <div className="grid grid-cols-12 h-screen">
              <div className="col-span-2">
                <Navbar />
              </div>
              <div className="col-span-10">
                <Contact />
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      path: "/resume",
      element: (
        <>
         <div className="container">
            <div className="grid grid-cols-12 h-screen">
              <div className="col-span-2">
                <Navbar />
              </div>
              <div className="col-span-10">
                <Resume />
              </div>
            </div>
          </div>
          {/* <Navbar /> <Resume /> */}
        </>
      ),
    },
    // {
    //   path: "/skill",
    //   element: (
    //     <>
    //        <div className="container">
    //         <div className="grid grid-cols-12 h-screen">
    //           <div className="col-span-2">
    //             <Navbar />
    //           </div>
    //           <div className="col-span-10">
    //             <Skill />
    //           </div>
    //         </div>
    //       </div>
    //       {/* <Navbar /> <Skill /> */}
    //     </>
    //   ),
    // },
    {
      path: "/portfolio",
      element: (
        <>
           <div className="container">
            <div className="grid grid-cols-12 h-screen">
              <div className="col-span-2">
                <Navbar />
              </div>
              <div className="col-span-10">
                <Portfolio />
              </div>
            </div>
          </div>
          {/* <Portfolio /> */}
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
           <div className="container">
            <div className="grid grid-cols-12 h-screen">
              <div className="col-span-2">
                <Navbar />
              </div>
              <div className="col-span-10">
                <About />
              </div>
            </div>
          </div>
          {/* <About /> */}
        </>
      ),
    },
  ]);
  return <RouterProvider router={route}></RouterProvider>;
}
