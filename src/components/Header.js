import React from "react";
import LOGO from "../Img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-6">
      <div className="flex items-center justify-between sm:justify-start w-full">
        <Link to={"/"}>
          <h1 className="font-bold text-gray-300">
            Viraj Nikam <span className="text-red-200">.</span>
          </h1>
        </Link>
        <ul className="flex semibold items-center gap-4 text-gray-300 sm:gap-8 sm:mx-6 ">
          <Link to={"/about"}>
            <li>About</li>
          </Link>
          <Link to={"/work"}>
            <li>Work</li>
          </Link>
          <Link to={"/tech"}>
            <li>Tech Stack</li>
          </Link>
        </ul>
      </div>

      {/* Icons */}
      <ul className="hidden sm:flex gap-6 text-xl  ">
        <li>
          <a href="https://github.com/VirajNikam01">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/viraj-nikam-34a782232/">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
