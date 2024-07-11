import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Work = ({ work, index }) => {
  const { name, description, images, websiteLink, uuid } = work;

  const navigate = useNavigate();

  return (
    <Link
      to={"/details/" + uuid}
      className="border border-gray-500 overflow-hidden hover:scale-105 active:scale-100 duration-300 cursor-pointer rounded-xl mb-10"
    >
      <img className="rounded-lg sm:p-5" src={images[0]} alt="img" />
      <div className="p-5">
        <h1 className="extrabold text-2xl py-3">{name}</h1>
        <p className="faint inter">{description}</p>
      </div>
    </Link>
  );
};

export default Work;
