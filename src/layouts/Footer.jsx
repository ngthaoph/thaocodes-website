import React from "react";

function Footer() {
  return (
    <div>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          columnGap: "15px",
        }}
      >
        <div>
          <h2>Links ↘</h2>
          <ul>
            <li>
              <a href="/about">About Me</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Socials ↘</h2>
          <ul>
            <li>
              <a href="https://github.com/ngthaoph">Github</a>
            </li>
            <li>
              <a href="">LinkedIn</a>
            </li>
          </ul>
        </div>
      </section>
      <small style={{ opacity: ".5", fontSize: "1rem" }}>
        © 2024 Thao Nguyen. All rights reserved.
      </small>
    </div>
  );
}

export default Footer;
