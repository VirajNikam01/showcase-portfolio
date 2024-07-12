import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Work = ({ work, index }) => {
  const { name, description, images, websiteLink, uuid } = work;

  const navigate = useNavigate();

  return (
    <Link
      to={"/details/" + uuid}
      className="border inline-block duration-300  rounded-xl mb-10"
    >
      <img
        className="rounded-lg overflow-hidden hover:scale-95 duration-500 sm:p-5"
        src={images[0]}
        alt="img"
      />
      <div className="p-5">
        <h1 className="extrabold text-2xl py-3">{name}</h1>
        <p className="faint inter">{description}</p>
      </div>
    </Link>
  );
};

export default Work;
