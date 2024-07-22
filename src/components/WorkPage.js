import React from "react";
import Work from "./Work";
import { works } from "../utils/workData";

const WorkPage = () => {
  console.log(works);
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    <div className="text-white my-10 w-full ">
      <h1 className="extrabold text-3xl sm:text-5xl my-3 sm:my-8">
        Selected Work
      </h1>

      <div className="w-full grid md:grid-cols-2 gap-2">
        {works.map((work, i) => (
          <Work key={i} work={work} index={i} />
        ))}
      </div>
    </div>
  );
};

export default WorkPage;
