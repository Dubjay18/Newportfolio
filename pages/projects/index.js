import React from "react";
import Head from "next/head";
import { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import { useStateValue } from "../../stateProvider";
import headIcon from "../../svgs/he2.svg";
import ogIcon from "../../svgs/logoj.svg";
import Image from "next/image";
import projectData from "../../components/data";
import ProjectItem from "../../components/ProjectItem";
import { gsap } from "gsap";
function Projects() {
  const [{ darkmode }, dispatch] = useStateValue();
  useEffect(() => {
    gsap.fromTo(
      ".cd",
      {
        autoAlpha: 0,
        y: 100,
        x: -100,
        rotate: -10,
        ScrollTrigger: {
          trigger: ".cd",
        },
      },
      {
        duration: 0.8,
        delay: 0.6,
        autoAlpha: 1,
        y: 0,
        x: 0,
        rotate: 0,
        ScrollTrigger: {
          trigger: ".cd",
        },
      }
    );
  }, []);
  return (
    <div
      data-theme={darkmode ? "forest" : "lemonade"}
      className={" overflow-hidden bg-base-100"}
    >
      <Head>
        <title>Dev-Jay</title>
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
          <div className="flex w-full  items-center justify-center px-4 py-4 my-10">
            {" "}
            <h1 className="prose prose-lg text-primary font-bold md:text-6xl xs:text-4xl text-2xl">
              What I&apos;ve Built
            </h1>{" "}
            <hr className="w-24 mx-5 md:block hidden border-t-4 rounded-md border-secondary" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 mx-10 my-10">
            {projectData.map((project, i) => {
              return (
                <div className="cd" key={i}>
                  <ProjectItem
                    title={project.name}
                    backgroundImg={project.image.src}
                    tech={project.tech}
                    projectUrl={`/projects/${i}`}
                  />
                </div>
              );
            })}
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
