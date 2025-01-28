import React from "react";

function ProjectTemplate({ name, type, link, image, description }) {
  return (
    <div>
      <h3>
        {name} • <br />
        <span style={{ opacity: "50%" }}>{type}</span>
      </h3>
      <a href={link}>
        <img src={image} style={{ width: "100%" }} />
      </a>
      <p>{description} </p>
    </div>
  );
}

export default ProjectTemplate;
