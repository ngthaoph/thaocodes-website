import React from "react";
import { GoArrowDownRight } from "react-icons/go";

function ProjectTemplate({
  name,
  type,
  link,
  description,
  color,
  bgColor,
  onClick,
}) {
  return (
    <div
      className="w-[200px] h-[200px] p-5 border-2 border-black cursor-grab rounded-[6px] z-10  overflow-hidden"
      style={{
        backgroundColor: bgColor,
        color: color,
      }}
      onClick={onClick}
    >
      <h3 className="font-bold text-base uppercase m-0">
        <div>
          {name}
          <br />
        </div>
        <span className="font-normal text-base uppercase m-0">{type}</span>
      </h3>

      <p className="text-base opacity-50 m-0">{description} </p>
      <a href={link}>
        <GoArrowDownRight />
      </a>
    </div>
  );
}

export default ProjectTemplate;
