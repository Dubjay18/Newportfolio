import React from "react";
import Head from "next/head";
import { useState, useRef } from "react";
import { toast } from "react-toastify";
import { useStateValue } from "../stateProvider";
import headIcon from "../svgs/he2.svg";
import ogIcon from "../svgs/logoj.svg";
function Projects() {
  const [{ darkmode }, dispatch] = useStateValue();
  return (
    <div
      data-theme={darkmode ? "forest" : "lemonade"}
      className={" overflow-hidden bg-base-100"}
    >
      <Head>
        <title>Skills and tech</title>
        <link rel="icon" href={headIcon.src} sizes="16x16 32x32" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
        <meta property="og:title" content="Jay's portfolio" />
        <meta property="og:description" content="Devjay the full-stack dev" />

        <meta property="og:image" content={ogIcon} />
      </Head>
      <div className="flex  items-center justify-around min-h-[92vh] font-poppins">
        <div>
          {" "}
          <div className="flex w-full  items-center justify-center px-4">
            {" "}
            <h1 className="prose prose-lg text-primary font-bold md:text-6xl xs:text-4xl text-2xl">
              What I can use
            </h1>{" "}
            <hr className="w-24 md:block hidden mx-5 border-t-4 rounded-md border-secondary" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mx-10 my-8 md:pt-10">
            <div className="p-8 flex items-center bg-base-200 rounded-md shadow-md">
              {" "}
              <img
                height={40}
                width={40}
                src="https://img.icons8.com/office/40/000000/react.png"
              />
              <h2 className="mx-2">React js</h2>
            </div>
            <div className="p-8 flex items-center bg-base-200 rounded-md shadow-md">
              <img
                height={40}
                width={40}
                src="https://img.icons8.com/fluency/48/000000/node-js.png"
              />
              <h2 className="mx-2">Node js</h2>
            </div>
            <div className="p-8 flex items-center bg-base-200 rounded-md shadow-md">
              <img
                height={40}
                width={40}
                src="https://img.icons8.com/color/48/000000/nextjs.png"
                alt=""
              />
              <h2 className="mx-2">Next js</h2>
            </div>
            <div className="p-8 flex items-center bg-base-200 rounded-md shadow-md">
              <img
                height={40}
                width={40}
                src="https://img.icons8.com/color/48/000000/git.png"
              />
              <h2 className="mx-2">Git</h2>
            </div>
            <div className="p-8 flex items-center bg-base-200 rounded-md shadow-md">
              <img
                height={40}
                width={40}
                src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
              />
              <h2 className="mx-2">Github</h2>
            </div>
            <div className="p-8 flex items-center bg-base-200 rounded-md shadow-md">
              <img
                height={40}
                width={40}
                src="https://img.icons8.com/color/48/000000/bootstrap.png"
              />
              <h2 className="mx-2">Bootstrap</h2>
            </div>
            <div className="p-8 flex items-center bg-base-200 rounded-md shadow-md">
              <img height={40} width={40} src="/tailwind-css.svg" alt="" />
              <h2 className="mx-2">Tailwind CSS</h2>
            </div>
            <div className="p-8 flex items-center bg-base-200 rounded-md shadow-md">
              <img
                height={40}
                width={40}
                src="https://img.icons8.com/color/48/000000/firebase.png"
                alt=""
              />
              <h2 className="mx-2">Firebase</h2>
            </div>
            <div className="p-8 flex items-center bg-base-200 rounded-md shadow-md">
              <img
                height={40}
                width={40}
                src=" https://img.icons8.com/color/48/000000/postgreesql.png"
                alt=""
              />
              <h2 className="mx-2">Postgresql</h2>
            </div>
            <div className="p-8 flex items-center bg-base-200 rounded-md shadow-md">
              <img
                height={40}
                width={40}
                src="https://img.icons8.com/color/48/000000/mongodb.png"
                alt=""
              />
              <h2 className="mx-2">Mongodb</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
export async function getServerSideProps(context) {
  await waitload(2);
  return {
    props: { dummy: "dummy" }, // will be passed to the page component as props
  };
}

function waitload(sec) {
  return new Promise((resolve) => setTimeout(resolve, sec * 500));
}
