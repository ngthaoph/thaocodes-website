import Layout from "./layouts/Layout.jsx";
import { React, useState } from "react";

import { Routes, Route } from "react-router";
import NotFound from "./pages/NotFound.jsx";

function App() {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive(!active);
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Layout handleActive={handleActive} active={active} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
