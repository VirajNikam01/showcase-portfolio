import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Work = ({ work, index }) => {
  const { name, description, images, websiteLink, uuid, status } = work;

  const navigate = useNavigate();

  return (
    <div>
      <Link
        to={"/details/" + uuid}
        className="border-2 inline-block hover:border-red-600 duration-300  rounded-xl mb-1 overflow-hidden"
      >
        <img
          className="rounded-lg overflow-hidden duration-500 "
          src={images[0]}
          alt="img"
        />
        <div className="p-5">
          <h1 className="extrabold text-xl py-3">
            {name}{" "}
            <span
              className={`${
                status === "In Progress" ? "text-orange-500" : "text-green-800"
              } ml-3 text-sm font-extralight`}
            >
              ›{status}
            </span>
          </h1>
          <p className="faint inter">{description.substring(0, 150)} <span className="hover:text-green-600 text-blue-600">read more...</span></p>
        </div>
      </Link>
    </div>
  );
};

export default Work;
