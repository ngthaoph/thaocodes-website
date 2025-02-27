import React from "react";

import Toggle from "./../features/Toggle";
import { useTheme } from "./../context/ThemeContext";
import { FiHome } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GoGitBranch } from "react-icons/go";
import { IoToggleSharp } from "react-icons/io5";

import logo from "../assets/logo.svg";
import Link from "../common/Link";

function Header() {
  const { toggleTheme, isDarkMode } = useTheme();
  const list = [
    {
      icon: <FiHome />,
      name: "Home",
      url: "/",
    },
    {
      icon: <GoGitBranch />,
      name: "Github",
      url: "https://github.com/ngthaoph",
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/thaodev",
    },

    ,
  ];
  return (
    <header
      className={`sticky top-0 z-40 w-full h-full border-b p-1`}
      // className={`sticky top-0 z-40 w-full border-b ${
      //   isDarkMode ? "bg-white" : "bg-gray-900 text-gray-300"
      // }  p-2`}
    >
      {/* Adjusted padding and border color */}
      <div className="flex flex-row justify-between m-3">
        {/* <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0"></div> */}
        {/* LEFT */}
        <div className="flex items-center space-x-5">
          <img src={logo} className="w-12" alt="Logo" />
          {/* Using Tailwind for width */}
        </div>
        {/* RIGHT */}
        <div className="flex">
          <ul className="flex space-x-5 items-center">
            {list.map((item) => (
              <Link
                key={item.name}
                icon={item.icon}
                name={item.name}
                url={item.url}
              />
            ))}

            <Toggle />
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
