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
  const [currentPage, setCurrentPage] = useState("page1");
  const showPage = (page) => {
    setCurrentPage(page);
  };
  console.log(currentPage);
  return (
    // <Routes>
    //   <Route
    //     index
    //     element={
    //       <Layout
    //         currentPage={currentPage}
    //         setCurrentPage={setCurrentPage}
    //         showPage={showPage}
    //       />
    //     }
    //   />

    //   <Route path="/about" element={<AboutMe />} />
    //   <Route path="/projects" element={<Project />} />
    //   <Route path="/contact" element={<Contact />} />
    //   <Route path="*" element={<NotFound />} />
    // </Routes>
    <div>
      <Layout />
    </div>
  );
}

export default App;
