import React, { useState } from "react";
import { useTheme } from "./../context/ThemeContext";
import { IoSunnyOutline } from "react-icons/io5";
import { LuSunMoon } from "react-icons/lu";

function Toggle() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div onClick={toggleTheme}>
      {isDarkMode ? <LuSunMoon /> : <IoSunnyOutline />}
    </div>
  );
}

export default Toggle;
