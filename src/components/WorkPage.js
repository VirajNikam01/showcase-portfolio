import React from "react";
import Work from "./Work";
import { works } from "../utils/workData";

const WorkPage = () => {
    console.log(works);
  return (
    <div className="text-white my-10">
      <h1 className="extrabold text-3xl sm:text-5xl my-3 sm:my-8">Selected Work</h1>
      {works.map((work, i)=>(
        <Work key={i} work={work} index={i}/>
      ))}
    </div>
  );
};

export default WorkPage;
