import React from "react";
import Project from "./Projects";
import { FaLongArrowAltRight } from "react-icons/fa";

function Next({ handleActive, active }) {
  return (
    <div>
      <h1 className="font-bold text-3xl flex flex-row items-center gap-3">
        <div>See My Works</div>
        <div>
          <FaLongArrowAltRight onClick={handleActive} />
        </div>
      </h1>
      <div className="flex max-md:justify-center">{active && <Project />}</div>
    </div>
  );
}

export default Next;
