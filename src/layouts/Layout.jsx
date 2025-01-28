import React from "react";
import Header from "./Header";
import Description from "./Description";
import Resume from "./Resume";
import Footer from "./Footer";
import Project from "./Project";

import * as styles from "./Layout.css";

function Layout() {
  return (
    <div className={styles.app}>
      <div
        style={{
          display: "flex",
          flexDirection: "column", // Or 'row' depending on how you want your components to be laid out
          alignItems: "center",
          justifyContent: "center",
          gap: "20px", // Optional: spacing between your components
        }}
      >
        {/**HEADER */}

        <div className={styles.header}>
          <Header />
        </div>
        {/**BODY */}
        <div className={styles.appBody}>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "2rem",

              // maxWidth: "66ch",
            }}
          >
            <Description />

            <Resume />
            <Project />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
