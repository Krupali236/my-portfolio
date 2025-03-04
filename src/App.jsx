import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Navbar from "./navbar/navbar";
import Footer from "./pages/Footer";
import Bg from "./assets/images/bg2.jpg";

export default function App() {
  // Add a fixed delay so you can see the loading state
  const route = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          {/* <div className="container:full">
            <div
              className="grid grid-cols-12 h-screen bg-no-repeat bg-cover bg-center"
              style={{ backgroundImage: `url(${Bg})`}}
            >
              <div className="col-span-2">
                <Navbar />
              </div>
              <div className="col-span-10">
                <Home />
              </div>
            </div>
          </div> */}
          <div className="relative h-screen">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${Bg})`,
                opacity: 0.5, // Adjust opacity (0.1 - 1)
              }}
            ></div>

            {/* Content with Grid */}
            <div className="relative grid grid-cols-12 h-screen">
              <div className="col-span-2 bg-opacity-20">
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
          <div className="container:full">
            <div className="columns-1">
              <div className="grid grid-cols-12">
                <div className="col-span-2 h-96 z-10">
                  <Navbar />
                </div>
                <div className="col-span-10">
                  <Contact />
                </div>
              </div>
              <div className="grid w-full mt-12 ">
                <Footer />
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
          <div className="container:full ">
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
          <div className="container:full">
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
          <div className="container:full">
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
