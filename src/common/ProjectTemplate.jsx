import React from "react";

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
      className="w-[280px] h-[280px] p-5 border-2 border-black cursor-grab rounded-[6px] z-10 "
      style={{
        backgroundColor: bgColor,
        color: color,
      }}
      onClick={onClick}
    >
      <h3 className="font-bold text-base uppercase m-0">
        <a href={link}>
          {name} • <br />
        </a>
        <span className="font-normal text-base uppercase m-0 opacity-50">
          {type}
        </span>
      </h3>

      <p className="text-base opacity-50 m-0">{description} </p>
    </div>
  );
}

export default ProjectTemplate;
