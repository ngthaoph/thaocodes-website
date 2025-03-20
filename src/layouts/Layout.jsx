import React, { useState } from "react";
import { useTheme } from "./../context/ThemeContext";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import About from "./AboutMe";

import Contact from "./Contact";

import Next from "./Next";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import HomePage from "./HomePage";
function Layout({ handleActive, active }) {
  const { toggleTheme, isDarkMode } = useTheme();
  return (
    <div
      className={clsx("relative flex min-h-screen min-w-screen flex-col", {
        "bg-theme-light text-theme-dark": !isDarkMode,
        "bg-theme-dark text-theme-light": isDarkMode,
      })}
    >
      <Header />

      {/* APP BODY */}
      <div className="flex-1 overflow-y-auto m-10 p-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
