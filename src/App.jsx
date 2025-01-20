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
          {" "}
          <Navbar /> <Home />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          {" "}
          <Navbar /> <Contact />
        </>
      ),
    },
    {
      path: "/resume",
      element: (
        <>
          <Navbar /> <Resume />
        </>
      ),
    },
    {
      path: "/skill",
      element: (
        <>
          <Navbar /> <Skill />
        </>
      ),
    },
    {
      path: "/portfolio",
      element: (
        <>
          <Portfolio />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <About />
        </>
      ),
    },
  ]);
  return <RouterProvider router={route}></RouterProvider>;
}
