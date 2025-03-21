import React from "react";

import notfound from "../assets/notfound.png";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">I have bad news for you</h1>
          <p className="py-6">
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <Link
            className="btn btn-xs sm:btn-sm md:btn-md
          lg:btn-lg xl:btn-xl"
            to="/"
          >
            Back to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
