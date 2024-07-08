import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { tech } from "../utils/techData";
import TechCard from "./TechCard";

const TechStack = () => {
  return (
    <div>
        <Header />
      <div className="">
        <div className="mt-10">
          <h1 className="extrabold text-4xl sm:text-6xl">My Tech Stack</h1>
          <p className="inter faint mt-2 sm:text-xl">
            Exploring the Tools That Power My Work
          </p>
        </div>
        <div className="mt-16">
          <h1 className="faint text-xl inter">Design & Development</h1>
          <div className="flex flex-wrap items-center justify-evenly gap-3 my-5">
            {tech.map((tech, i) => (
              <TechCard key={i} tech={tech} />
            ))}
          </div>
        </div>
      </div>
        <Footer />
    </div>
  );
};

export default TechStack;
