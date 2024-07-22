import React from "react";
import { useParams } from "react-router-dom";
import { works } from "../utils/workData";
import Header from "./Header";
import Footer from "./Footer";

const ProjectDetails = () => {
  const { index } = useParams();
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  const data = works.filter((project) => {
    return project.uuid === Number(index);
  });
  const {
    name,
    description,
    uuid,
    videoLink,
    websiteLink,
    images,
    technologies,
    sourceCode,
  } = data[0];

  return (
    <div>
      <Header />
      <div className="details w-full h-full flex items-center justify-center flex-col gap-10 ">
        {/* <video autoPlay muted loop src={videoLink} className="w-full bg-slate-400 " /> */}
        <h1 className="text-2xl font-semibold titleBefore mt-4">{name}</h1>
        {images.map((image, index) => {
          return (
            <div className="rounded-xl overflow-hidden">
              <img src={image} alt="" />
            </div>
          );
        })}
        <div className="w-full">
          <h1 className="font-semibold text-lg">Technologies Used :-</h1>
          <div className=" flex gap-5 my-2">
            {technologies.map((tech, index) => {
              return <img className="w-10 " src={tech} alt="" />;
            })}
          </div>
        </div>
        <div className="links mt-3 flex gap-5">
          {websiteLink && (
            <a
              className="px-5 py-2 border rounded-xl bg-transparent hover:bg-zinc-900 duration-500"
              href={websiteLink}
            >
              View Live
            </a>
          )}
          {sourceCode && (
            <a
              className="px-5 py-2 border rounded-xl bg-transparent hover:bg-zinc-900 duration-500"
              href={sourceCode}
            >
              View Code
            </a>
          )}
        </div>
        <div className="desc">
          <p className="text-center">{description}</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
