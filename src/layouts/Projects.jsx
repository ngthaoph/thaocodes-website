import React, { useState, useEffect } from "react";
import ProjectTemplate from "../common/ProjectTemplate";
import ansteylane from "../assets/ansteylane.png";

function Projects() {
  const [selectProject, setSelectProject] = useState(null);
  const [selectColor, setSelectColor] = useState({
    color: "black",
    bgColor: "#c4e456",
  });

  const colors = [
    {
      color: "#60f0c4",
      bgColor: "black",
    },
    {
      color: "#fdc126",
      bgColor: "#333333",
    },
    {
      color: "#333333", // Dark gray text color
      bgColor: "#F5A623", // Yellow background
    },
    {
      color: "#333333", // Dark gray text color
      bgColor: "#FFD700", // Gold background
    },
    {
      color: "black", // White text color
      bgColor: "#8E44AD", // Purple background
    },
    {
      color: "black", // White text color
      bgColor: "#E74C3C", // Red background
    },
    {
      color: "#FFFFFF", // White text color
      bgColor: "#34495E", // Dark blue background
    },
    {
      color: "black", // White text color
      bgColor: "#F39C12", // Orange background
    },
    {
      color: "#333333", // Dark gray text color
      bgColor: "#1ABC9C", // Teal background
    },
    {
      color: "black", // White text color
      bgColor: "#9B59B6", // Violet background
    },
    {
      color: "#333333", // White text color
      bgColor: "#BDC3C7", // Light gray background
    },
    {
      color: "#333333", // Dark gray text color
      bgColor: "#3498DB", // Blue background
    },
  ];
  const projects = [
    {
      id: 1,
      name: "Anstey Lane Roastery",
      type: "FULL STACK",

      link: "https://anstey-lane-1.onrender.com/",
      image: ansteylane,
      description: "user authentication, React, Firebase Vanilla Extracts.",
    },
    {
      id: 2,
      name: "TO DO LIST",
      type: "FRONTEND",

      link: "https://anstey-lane-1.onrender.com/",
      image: ansteylane,
      description: "React, Firebase for backend, and Tailwind CSS for styling.",
    },
    {
      id: 3,
      name: "FORM SUBMISSION",
      type: "FULLSTACK",

      link: "https://anstey-lane-1.onrender.com/",
      image: ansteylane,
      description: "React, Firebase for backend, and Tailwind CSS for styling.",
    },
    {
      id: 4,
      name: "SEARCH ENGINE",
      type: "FRONTEND",

      link: "https://anstey-lane-1.onrender.com/",
      image: ansteylane,
      description: "React, Firebase for backend, and Tailwind CSS for styling.",
    },
  ];

  const handleSelectProject = (id) => {
    //find the active project
    const selectedProject = projects.find((project) => project.id === id);
    const index = selectedProject.id;
    console.log(index);
    console.log(selectedProject);

    //once we identify active project, generate random no from 0-2 then apply the color to the active project

    const generateIndex = () => {
      const length = colors.length;
      return Math.floor(Math.random() * length);
    };
    setSelectProject(selectedProject);
    setSelectColor(colors[generateIndex()]);
  };
  console.log(selectProject);
  return (
    <div className="flex flex-row max-w-70 justify-start items-center p-5 gap-5 max-md:flex-col md:items-center max-sm:flex-col">
      {projects.map((project) => {
        return (
          <ProjectTemplate
            key={project.id}
            name={project.name}
            ßß
            type={project.type}
            link={project.link}
            description={project.description}
            color={
              selectProject?.id === project.id
                ? selectColor.color
                : project.color
            }
            bgColor={
              selectProject?.id === project.id
                ? selectColor.bgColor
                : project.color
            }
            onClick={() => handleSelectProject(project.id)}
          />
        );
      })}
    </div>
  );
}

export default Projects;
