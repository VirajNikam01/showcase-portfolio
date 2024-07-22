import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const AboutMe = () => {
  return (
    <div>
      <Header />
      <div className="my-10 ">
        <h1 className=" text-4xl text-center sm:text-left sm:text-6xl extrabold">
          A little bit about me
        </h1>
        <p className="faint text-lg text-center sm:text-left inter mt-3">
          Who I am and what I do.
        </p>
        <div className="my-20">
          <h1 className="faint semibold">WHO I AM</h1>
          <p className="inter text-lg text-[#d0d0d3]">
            Hey there, I'm Viraj Nikam - a creative front-end engineer.
            Currently Working as Game developer at Artoon Solutions. I
            specialize in building modern web-based apps.
          </p>
          <div className="mt-10">
            <h1 className="faint semibold">WHAT I DID</h1>
            <p className="inter text-lg text-[#d0d0d3]">
              I completed my BE degree in Computer Science from Savitribai Phule
              Pune University. My work as a freelance web developer has sparked
              a keen interest in web development.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutMe;
