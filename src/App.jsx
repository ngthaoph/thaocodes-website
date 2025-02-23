import Layout from "./layouts/Layout.jsx";
import { React, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext.jsx";

function App() {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive(!active);
  };

  return (
    <ThemeProvider>
      <Layout active={active} handleActive={handleActive} />
    </ThemeProvider>
  );
}

export default App;
