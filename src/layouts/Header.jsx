import React from "react";
import { FiHome } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoToggleSharp } from "react-icons/io5";
import logo from "../assets/logo.svg"; // Ensure you have the correct path

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background bg-white gap-20">
      {/* Adjusted padding and border color */}
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        {/* LEFT */}
        <div className="flex items-center space-x-5">
          <img src={logo} className="w-12" alt="Logo" />
          {/* Using Tailwind for width */}
        </div>
        {/* RIGHT */}
        <div className="flex items-center">
          <ul className="flex space-x-10">
            <li>
              <FiHome />
            </li>
            <li>
              <a href="https://github.com/ngthaoph">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/thaodev">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <IoToggleSharp />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
