import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import About from "./AboutMe";

import Contact from "./Contact";
import Resume from "./Resume";
import Next from "./Next";

function Layout({ currentPage, showPage }) {
  const [active, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!active);
  };
  return (
    <div className="relative flex min-h-screen min-w-screen flex-col">
      {/* HEADER */}

      <Header />

      {/* APP BODY */}
      <div className="flex-1 overflow-y-auto m-10 p-5">
        <div className="flex flex-col gap-20">
          <About />
          <Next handleToggle={handleToggle} active={active}></Next>

          <Contact />

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
