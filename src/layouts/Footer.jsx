import React from "react";

function Footer() {
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold">Links ↘</h2>
          <ul className="list-none">
            <li>
              <a href="/about">About Me</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Socials ↘</h2>
          <ul className="list-none">
            <li>
              <a href="https://github.com/ngthaoph">Github</a>
            </li>
            <li>
              <a href="">LinkedIn</a>
            </li>
          </ul>
        </div>
      </section>
      <small className="block text-sm  mt-4">
        © 2024 Thao Nguyen. All rights reserved.
      </small>
    </div>
  );
}

export default Footer;
