import React from "react";
import * as styles from "./Header.css";
function Header() {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.leftSection}>Thao Nguyen</div>
        <div className={styles.rightSection}>
          <ul>About</ul>
          <ul>Contact</ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
