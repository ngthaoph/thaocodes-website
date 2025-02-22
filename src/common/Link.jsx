import React from "react";

function Link({ icon, name, url }) {
  return (
    <li className="flex">
      <a className="flex p-2 items-center" href={url}>
        <div>{icon}</div>
        <div>{name}</div>
      </a>
    </li>
  );
}

export default Link;
