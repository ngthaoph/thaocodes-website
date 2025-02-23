import Layout from "./layouts/Layout.jsx";
import { React, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext.jsx";

function App() {
  const [active, setActive] = useState("page1");
  const handleActive = (component) => {
    setActive(component);
  };

  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <ThemeProvider>
      <Layout
        active={active}
        setActive={setActive}
        handleActive={handleActive}
        toggle={toggle}
        handleToggle={handleToggle}
      />
    </ThemeProvider>
  );
}

export default App;
