import Layout from "./layouts/Layout.jsx";
import { React, useState } from "react";

import { Routes, Route } from "react-router";
//Import pages
import NotFound from "./pages/NotFound";
import AboutMe from "././layouts/AboutMe.jsx";
import Contact from "./layouts/Contact";

import Resume from "././layouts/Resume";

import Project from "././layouts/Project";

function App() {
  const [active, setActive] = useState("page1");
  const handleActive = (component) => {
    setActive(component);
  };

  return (
    <Routes>
      <Route
        index
        element={
          <Layout
            active={active}
            setActive={setActive}
            handleActive={handleActive}
          />
        }
      />

      <Route path="/about" element={<AboutMe />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    // <div>
    //   <Layout />
    // </div>
  );
}

export default App;
