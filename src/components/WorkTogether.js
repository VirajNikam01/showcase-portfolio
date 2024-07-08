import React from "react";

const WorkTogether = () => {
  return (
    <div className="text-center my-12 ">
      <h1 className="text-4xl extrabold">Let’s work together</h1>
      <div className="flex flex-col sm:flex-row items-center">
        <p className="my-2 faint inter flex-1 text-xl sm:m-8">
          Want to discuss an opportunity to create something great? I’m ready
          when you are.
        </p>
        <button className="text-center w-full bg-[#171717] faint text-xl semibold py-2 rounded px-8 sm:w-fit ">
          <a href="https://www.linkedin.com/in/viraj-nikam-34a782232/">
            Get in touch
          </a>
        </button>
      </div>
    </div>
  );
};

export default WorkTogether;
