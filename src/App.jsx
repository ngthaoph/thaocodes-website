import Layout from "./layouts/Layout.jsx";
import { React, useState } from "react";

import { Routes, Route } from "react-router";
import NotFound from "./pages/NotFound.jsx";
import HomePage from "./layouts/HomePage";

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
        >
          <Route
            path="/"
            exact
            element={<HomePage handleActive={handleActive} active={active} />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
