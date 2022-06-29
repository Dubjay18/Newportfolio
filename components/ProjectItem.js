import Link from "next/link";
import React from "react";

function ProjectItem({ title, backgroundImg, tech, projectUrl }) {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-md shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-primary to-secondary transition-all duration-500">
      <img
        className="rounded-xl group-hover:opacity-10 transition-all duration-500"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{tech}</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg btn btn-accent font-bold ">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
}

export default ProjectItem;
