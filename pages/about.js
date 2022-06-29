import React from "react";
import Head from "next/head";
import { useState, useRef } from "react";
import { toast } from "react-toastify";
import { useStateValue } from "../stateProvider";
import headIcon from "../svgs/he2.svg";
import ogIcon from "../svgs/logoj.svg";
import Personal from "../images/ab.jpg";
import Tilt from "react-tilt";
function About() {
  const [{ darkmode }, dispatch] = useStateValue();
  const [currentTab, setCurrentTab] = useState(1);
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
      <div
        className="flex  items-center justify-around min-h-[92vh] font-poppins"
        id="about"
      >
        <div className="w-full ">
          <div className="flex w-full  items-center justify-center px-4">
            {" "}
            <h1 className="prose prose-lg text-primary font-bold md:text-6xl xs:text-4xl text-2xl">
              Who Am I
            </h1>{" "}
            <hr className="w-24 md:block hidden mx-5 border-t-4 rounded-md border-secondary" />
          </div>
          <div className="flex flex-col-reverse md:grid grid-cols-7  my-8 md:pt-10 sec2__right">
            <p className="col-span-7 md:col-span-4 md:mx-16 lg:mx-28  md:my-0 my-10 forest:text-white lemonade:text-accent md:px-0 px-5 font-poppins">
              <span>
                {" "}
                Hello! My name is Yanfunmi, I am passionate about tech and i
                like building web apps. My interest in web development started
                back in 2021. I'm a good problem solver, a chess player and a
                hard working person.
              </span>
              <br />
              <span>
                I'm currently a Computer science student at Obafemi Awolowo
                University, ile-ife.
              </span>

              <br />
              <br />
              <span>
                {" "}
                Here are a few technologies I’ve been working with recently:
              </span>
              <div className="exp">
                <ul>
                  <span className="flex flex-wrap justify-between items-center  w-4/5 py-3">
                    <li>React Js</li>
                    <li>Firebase</li>
                  </span>
                  <span className="flex flex-wrap justify-between items-center w-4/5 py-3">
                    <li>Tailwind CSS</li>
                    <li>Next js</li>
                  </span>
                  <span className="flex flex-wrap justify-between items-center w-4/5 py-3">
                    <li>Node js</li>
                    <li>Mongo DB</li>
                  </span>
                </ul>
              </div>
            </p>
            <div className="col-span-7 md:col-span-3 flex flex-col items-center justify-start">
              <Tilt className="w-fit border-2 border-primary bg-primary h-fit rounded-lg">
                <img
                  animate={{ translateX: -4, translateY: -4 }}
                  src={Personal.src}
                  width={"200px"}
                  height={"600px"}
                  className="border-2 border-primary rounded-lg hover:opacity-100 opacity-70 transition-all duration-300"
                />
              </Tilt>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-20">
        <div className="flex w-full items-center justify-center mx-5">
          {" "}
          <h1 className="prose prose-lg text-primary font-bold md:text-6xl  xs:text-4xl text-2xl">
            Experience
          </h1>{" "}
          <hr className="w-24 mx-5 border-t-4 rounded-md border-secondary" />
        </div>

        <div className="flex w-full justify-center">
          <div className="tabs mt-20 mb-10 font-poppins">
            <a
              className={`tab tab-lg hover:bg-base-300 transition-all duration-500 forest:text-white lemonade:text-accent tab-bordered ${
                currentTab === 1
                  ? "tab-active text-lime-400 border-lime-400"
                  : ""
              }`}
              onClick={() => setCurrentTab(1)}
            >
              HNG
            </a>
            <a
              className={`tab tab-lg hover:bg-base-300 transition-all duration-500 forest:text-white lemonade:text-accent tab-bordered ${
                currentTab === 2
                  ? "tab-active text-lime-400 border-lime-400"
                  : ""
              }`}
              onClick={() => setCurrentTab(2)}
            >
              KodeCamp
            </a>
            <a
              className={`tab tab-lg hover:bg-base-300 transition-all duration-500 forest:text-white lemonade:text-accent tab-bordered ${
                currentTab === 3
                  ? "tab-active text-lime-400 border-lime-400"
                  : ""
              }`}
              onClick={() => setCurrentTab(3)}
            >
              ALX
            </a>
          </div>
        </div>
        {currentTab === 1 && (
          <div className="flex w-full justify-center">
            <div className="mx-10 md:mx-28 lg:mx-80">
              <h2 className="font-poppins md:text-2xl text-secondary  font-medium">
                Frontend Developer{" "}
                <span className="text-lime-400 underline decoration-dashed">
                  @HNGi8
                </span>
              </h2>
              <p className="my-5 font-poppins">Internship</p>
              <p className="my-5 font-poppins">August 2021 - Oct 2021</p>
              <div className="exp w-fit  forest:text-white lemonade:text-accent  font-poppins">
                <ul>
                  <li className="">
                    Worked with a large team of developers to build the company
                    files plugin of a "Slack-like" app called Zuri-chat.
                  </li>
                  <li>
                    Worked with a variety of tools Javascript React js, Next js,
                    SPA, Node js.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {currentTab === 2 && (
          <div className="flex w-full justify-center">
            <div className="mx-10 md:mx-28 lg:mx-80">
              <h2 className="font-poppins md:text-2xl text-secondary  font-medium">
                React Js Developer{" "}
                <span className="text-lime-400 underline decoration-dashed">
                  @KodeCamp
                </span>
              </h2>
              <p className="my-5 font-poppins">Internship(Remote)</p>
              <p className="my-5 font-poppins">August 2021 - Dec 2021</p>
              <p className="my-5 font-poppins">Mar 2022 - Present</p>
              <div className="exp w-fit  forest:text-white lemonade:text-accent  font-poppins">
                <ul>
                  <li className="">
                    Worked with developers to build a learning managment system
                    for kodecamp
                  </li>
                  <li>
                    Built a variety of web apps with Apis, Javascript, Html,
                    React js, Firebase.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {currentTab === 3 && (
          <div className="flex w-full justify-center">
            <div className="mx-10 md:mx-28 lg:mx-80">
              <h2 className="font-poppins md:text-2xl text-secondary  font-medium">
                Software Engineer{" "}
                <span className="text-lime-400 underline decoration-dashed">
                  @alx_africa
                </span>
              </h2>
              <p className="my-2 font-poppins">Internship</p>
              <p className="my-2 font-poppins">Feb 2022 - Present</p>
              <div className="exp w-fit  forest:text-white lemonade:text-accent  font-poppins">
                <ul>
                  <li className="">
                    Learnt how to write C programs, Bash scripts, Python
                    programs.
                  </li>
                  <li>
                    Worked with other developers on Software engineering
                    projects
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default About;
export async function getServerSideProps(context) {
  await waitload(2);
  return {
    props: { dummy: "dummy" }, // will be passed to the page component as props
  };
}

function waitload(sec) {
  return new Promise((resolve) => setTimeout(resolve, sec * 500));
}
