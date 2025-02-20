import React from "react";
import { TbError404 } from "react-icons/tb";

function NotFound() {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",

        margin: "15rem",
      }}
    >
      <TbError404 />
    </div>
  );
}

export default NotFound;
