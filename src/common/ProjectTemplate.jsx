import React from "react";
import * as styles from "./ProjectTemplate.css";

function ProjectTemplate({ name, type, link, image, description }) {
  return (
    <div>
      <h3 className={styles.name}>
        {name} • <br />
        <span className={styles.type}>{type}</span>
      </h3>
      <a href={link}>
        <img src={image} style={{ width: "100%" }} />
      </a>
      <p className={styles.description}>{description} </p>
    </div>
  );
}

export default ProjectTemplate;
