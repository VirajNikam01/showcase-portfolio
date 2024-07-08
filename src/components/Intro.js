import React from "react";

const Intro = () => {
  return (
    <div className="lg:h-96 flex flex-col justify-center py-3">
      <div className="">
        <h1 className="text-4xl sm:text-7xl bold extrabold">
          <span className="faint">I'm</span> Viraj Nikam
        </h1>
        <p className="semibold text-lg sm:text-xl faint my-4">
          A front-end engineer and UI/UX designer. I specialize in designing and
          building modern web-based apps.
        </p>
        <button className="text-center w-full bg-[#171717] faint text-xl semibold py-2 rounded px-8 sm:w-fit ">
          <a href="https://www.linkedin.com/in/viraj-nikam-34a782232/">Get in touch</a>
        </button>
      </div>
    </div>
  );
};

export default Intro;
