import React from "react";
import { useParams } from "react-router-dom";
import { works } from "../utils/workData";
import Header from './Header'
import Footer from "./Footer";

const ProjectDetails = () => {
  const { index } = useParams();

  const data = works.filter((project) => {
    return project.uuid === Number(index);
  });
  const {name, description, uuid, videoLink, websiteLink,image} = data[0]

  console.log(data);

  return <div>
    <Header/>
    <div className="details w-full h-full flex items-center justify-center flex-col gap-10 ">
    <video autoPlay muted loop src={videoLink} className="w-full bg-slate-400 " />
    <div className="links">
      <a className="px-5 py-2 border rounded-xl bg-transparent hover:bg-teal-700 duration-500" href={websiteLink}>View Live</a>
    </div>
    <div className="desc">
      <p className="text-center">{description}</p>
    </div>
    </div>

    <Footer/>
  </div>;
};

export default ProjectDetails;
