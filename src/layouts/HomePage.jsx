import React from "react";
import AboutMe from "./AboutMe";
import Next from "./Next";
import Contact from "./Contact";

function HomePage({ handleActive, active }) {
  return (
    <div className="flex flex-col gap-20">
      <AboutMe />
      <Next handleActive={handleActive} active={active} />
      <Contact />
    </div>
  );
}

export default HomePage;
