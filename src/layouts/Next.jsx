import React from "react";
import Project from "./Projects";
import { FaLongArrowAltRight } from "react-icons/fa";

function Next({ handleToggle, active }) {
  return (
    <div>
      <h1 className="font-bold text-3xl flex flex-row items-center">
        See my works
        <FaLongArrowAltRight onClick={handleToggle} />
      </h1>
      <div>{active && <Project />}</div>
    </div>
  );
}

export default Next;
