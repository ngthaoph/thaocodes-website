import React from "react";
import ProjectTemplate from "./../common/ProjectTemplate";
import ansteylane from "../assets/ansteylane.png";

function Project() {
  return (
    <div>
      <div>
        <h2 style={{ fontSize: "1rem", fontWeight: "400" }}>
          Selected <br /> Works ↘
        </h2>
      </div>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}
      >
        <ProjectTemplate
          name="Anstey Lane Roastery"
          type="FULL STACK DEVELOPMENT"
          link="https://anstey-lane-1.onrender.com/"
          image={ansteylane}
          description="React & Firebase store"
        />
        <ProjectTemplate
          name="Anstey Lane Roastery"
          type="FULL STACK DEVELOPMENT"
          link="https://anstey-lane-1.onrender.com/"
          image={ansteylane}
          description="React & Firebase store"
        />
        <ProjectTemplate
          name="Anstey Lane Roastery"
          type="FULL STACK DEVELOPMENT"
          link="https://anstey-lane-1.onrender.com/"
          image={ansteylane}
          description="React & Firebase store"
        />
        <ProjectTemplate
          name="Anstey Lane Roastery"
          type="FULL STACK DEVELOPMENT"
          link="https://anstey-lane-1.onrender.com/"
          image={ansteylane}
          description="React & Firebase store"
        />
      </div>
    </div>
  );
}

export default Project;
