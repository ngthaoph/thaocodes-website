import React from "react";
import { FiHome } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoToggleSharp } from "react-icons/io5";
import logo from "../assets/logo.svg"; // Ensure you have the correct path

function Header() {
  return (
    <header className="w-full border-b border-gray-300 p-6">
      {/* Adjusted padding and border color */}
      <div className="flex h-9 items-center justify-between">
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
