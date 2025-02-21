import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import About from "./AboutMe";
import Project from "./Project";
import Contact from "./Contact";
import Resume from "./Resume";

function Layout({ currentPage, showPage }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* HEADER */}

      <Header />

      {/* APP BODY */}
      <div className="flex-1 overflow-y-auto m-10">
        <div className="flex flex-col gap-20">
          {/* <Outlet />  */}

          <About />
          <Resume />
          <Project />
          <Contact />

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
