import React from "react";
import Project from "./Project";
import { FaLongArrowAltRight } from "react-icons/fa";

function Next({ handleToggle, active }) {
  return (
    <div>
      <h1 className="font-bold text-3xl flex flex-row items-center">
        See my works
        <FaLongArrowAltRight onClick={handleToggle} />
      </h1>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out transform ${
          active ? "max-h-screen" : "max-h-0"
        }`}
      >
        <Project />
      </div>
    </div>
  );
}

export default Next;
