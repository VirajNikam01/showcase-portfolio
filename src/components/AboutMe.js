import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const AboutMe = () => {
  return (
    <div>
      <Header />
      <div className="my-10 ">
        <h1 className=" text-4xl text-center sm:text-left sm:text-6xl extrabold">A little bit about me</h1>
        <p className="faint text-lg text-center sm:text-left inter mt-3">Who I am and what I do.</p>
        <div className="my-20">
          <h1 className="faint semibold">WHO I AM</h1>
          <p className="inter text-lg text-[#71717A]">
            Hey there, I'm Viraj Nikam - a creative front-end engineer and UI/UX
            designer based in Pune, Maharashtra, India. I specialize in
            designing and building modern web-based apps.
          </p>
          <div className="mt-10">
            <h1 className="faint semibold">WHAT I DID</h1>
            <p className="inter text-lg text-[#71717A]">
              I have recently completed my BE degree in computer science field
              from savitribai phule pune university. Worked as an web developer
              intern at ProError Software Solutions, Narhe Pune.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutMe;
