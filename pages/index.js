import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import Head from "next/head";
import { useState, useRef } from "react";
import { toast } from "react-toastify";
import { useStateValue } from "../stateProvider";
import headIcon from "../svgs/he2.svg";
import ogIcon from "../svgs/logoj.svg";
import { SocialIcon } from "react-social-icons";
import FadeInOut from "./../components/FadeInOut";
import AnimateInOut from "../components/AnimateInOut";
import ImplodeExplodeInOut from "../components/ImplodeExplodeInOut";
export default function Home() {
  const [{ darkmode }, dispatch] = useStateValue();

  async function AlertDismissible(words, error) {
    if (!error) {
      toast.success(words, {
        position: "top-right",
        autoClose: 1400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error(words, {
        position: "top-right",
        autoClose: 1400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
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

      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <FadeInOut x={-20} delay={20}>
              <h2 className="text-5xl font-bold">
                Hi, I'm <span className="text-primary">Yanfunmi</span>
              </h2>
            </FadeInOut>
            <h2 className="text-5xl font-bold">A Full-Stack Web developer</h2>

            <p className="py-6" id="subhead">
              I'm a software engineer(Frontend heavy) specilized in building top
              notch full-stack web applications. I'm currently learning
              blockchain development and building more projects.
            </p>

            <ul
              tabIndex="0"
              className=" w-full mt-3 p-2 flex  rounded-box justify-evenly font-poppins"
            >
              <li>
                <SocialIcon
                  url="https://github.com/Dubjay18/"
                  fgColor="green"
                  bgColor="transparent"
                  className="hover:scale-125 transition-all rounded-box shadow-md duration-500 w-5"
                />
              </li>
              <li>
                <SocialIcon
                  url="https://www.linkedin.com/in/oluwayanfunmi-jeje-a023b2210/"
                  fgColor="green"
                  bgColor="transparent"
                  className="hover:scale-125 transition-all duration-500 rounded-box shadow-md "
                />
              </li>
              <li>
                <SocialIcon
                  url="https://twitter.com/@YanfunmiJ"
                  fgColor="green"
                  bgColor="transparent"
                  className="hover:scale-125 transition-all duration-500 rounded-box shadow-md "
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  await waitload(2);
  return {
    props: { dummy: "dummy" }, // will be passed to the page component as props
  };
}

function waitload(sec) {
  return new Promise((resolve) => setTimeout(resolve, sec * 500));
}
