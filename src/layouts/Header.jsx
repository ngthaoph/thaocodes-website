import React, { useState, useEffect } from "react";

import Toggle from "./../features/Toggle";
import { useTheme } from "./../context/ThemeContext";
import { FiHome } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GoGitBranch } from "react-icons/go";
import { IoToggleSharp } from "react-icons/io5";
import { SiReaddotcv } from "react-icons/si";

import logo from "../assets/logo.svg";
import Link from "../common/Link";
import resume from "../assets/resume.pdf";

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
    {
      icon: <SiReaddotcv />,
      name: "Resume",
      url: resume,
    },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`sticky top-0 z-40 w-full h-full border-b p-1 ${
        isScrolled ? "opacity-25" : ""
      } `}
    >
      {/* Adjusted padding and border color */}
      <div className="flex flex-row justify-between m-3">
        {/* LEFT */}
        <div className="flex items-center space-x-5">
          <img src={logo} className="w-12" alt="Logo" />
        </div>
        {/* RIGHT */}
        <div className="flex">
          <ul className="flex space-x-5 items-center">
            {list.map((item) => (
              <Link
                key={item.name}
                icon={item.icon}
                // name={item.name}
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
