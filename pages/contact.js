import React from "react";
import Head from "next/head";
import { useState, useRef } from "react";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import em from "../utils/emailKey";
import { useStateValue } from "../stateProvider";
import headIcon from "../svgs/he2.svg";
import ogIcon from "../svgs/logoj.svg";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [{ darkmode }, dispatch] = useStateValue();
  const submit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      const serviceId = em.SERVICE_ID;
      const templateId = em.TEMPLATE_ID;
      const userId = em.USER_ID;
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => {
          console.log(response);
          setName("");
          setEmail("");
          setMessage("");
          setEmailSent(true);
          // AlertDismissible("Sent!");
        })
        .then((error) => {
          console.log(error);
          // AlertDismissible(
          //   "Something went wrong, Refresh page and try again",
          //   true
          // );
        });
    } else {
      // AlertDismissible("Please fill in all fields.", true);
    }
  };
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
      <div className="min-h-screen bg-base-100">
        <div className="md:grid md:grid-cols-2 flex flex-col h-screen">
          <div className="col-span-1  md:h-full h-1/6 md:flex hidden items-center justify-center md:bg-base-200 relative">
            <div className="absolute z-10 text-2xl">
              {" "}
              <h2 className="my-7">Email: Jejeniyi7@gmail.com</h2>
              <h2 className="my-7">Phone: 09130860401</h2>
              <h2 className="my-7">Linkedin: Oluwayanfunmi Jeje</h2>
            </div>
            <div className="md:h-[200px] blur-xl">
              <svg
                width="200"
                height="200"
                viewBox="0 0 1000 1000"
                xmlns="http://www.w3.org/2000/svg"
                className="md:block hidden fill-primary"
              >
                <defs>
                  <filter
                    id="grain"
                    x="-50vw"
                    y="-50vh"
                    width="100vw"
                    height="100vh"
                  >
                    <feFlood flood-color="#ffffff" result="neutral-gray" />

                    <feTurbulence
                      in="neutral-gray"
                      type="fractalNoise"
                      baseFrequency="2.5"
                      numOctaves="100"
                      stitchTiles="stitch"
                      result="noise"
                    />

                    <feColorMatrix
                      in="noise"
                      type="saturate"
                      values="0"
                      result="destaturatedNoise"
                    ></feColorMatrix>

                    <feComponentTransfer
                      in="desaturatedNoise"
                      result="theNoise"
                    >
                      <feFuncA type="table" tableValues="0 0 0.15 0"></feFuncA>
                    </feComponentTransfer>

                    <feBlend
                      in="SourceGraphic"
                      in2="theNoise"
                      mode="soft-light"
                      result="noisy-image"
                    />
                  </filter>

                  <clipPath id="shape">
                    <path
                      fill="currentColor"
                      d="M952.5,647Q905,794,780,885Q655,976,500,976Q345,976,220,885Q95,794,47.5,647Q0,500,47.5,353Q95,206,220,115Q345,24,500,24Q655,24,780,115Q905,206,952.5,353Q1000,500,952.5,647Z"
                    ></path>
                  </clipPath>
                </defs>

                <g filter="url(#grain)" clip-path="url(#shape)">
                  <path d="M952.5,647Q905,794,780,885Q655,976,500,976Q345,976,220,885Q95,794,47.5,647Q0,500,47.5,353Q95,206,220,115Q345,24,500,24Q655,24,780,115Q905,206,952.5,353Q1000,500,952.5,647Z" />
                </g>
              </svg>
              <svg
                width="100"
                height="100"
                viewBox="0 0 1000 1000"
                xmlns="http://www.w3.org/2000/svg"
                className="md:hidden mt-10"
              >
                <defs>
                  <filter
                    id="grain"
                    x="-50vw"
                    y="-50vh"
                    width="100vw"
                    height="100vh"
                  >
                    <feFlood flood-color="#ffffff" result="neutral-gray" />

                    <feTurbulence
                      in="neutral-gray"
                      type="fractalNoise"
                      baseFrequency="2.5"
                      numOctaves="100"
                      stitchTiles="stitch"
                      result="noise"
                    />

                    <feColorMatrix
                      in="noise"
                      type="saturate"
                      values="0"
                      result="destaturatedNoise"
                    ></feColorMatrix>

                    <feComponentTransfer
                      in="desaturatedNoise"
                      result="theNoise"
                    >
                      <feFuncA type="table" tableValues="0 0 0.15 0"></feFuncA>
                    </feComponentTransfer>

                    <feBlend
                      in="SourceGraphic"
                      in2="theNoise"
                      mode="soft-light"
                      result="noisy-image"
                    />
                  </filter>

                  <clipPath id="shape">
                    <path
                      fill="currentColor"
                      d="M952.5,647Q905,794,780,885Q655,976,500,976Q345,976,220,885Q95,794,47.5,647Q0,500,47.5,353Q95,206,220,115Q345,24,500,24Q655,24,780,115Q905,206,952.5,353Q1000,500,952.5,647Z"
                    ></path>
                  </clipPath>
                </defs>

                <g filter="url(#grain)" clip-path="url(#shape)">
                  <path
                    fill="#1E3b8a"
                    d="M952.5,647Q905,794,780,885Q655,976,500,976Q345,976,220,885Q95,794,47.5,647Q0,500,47.5,353Q95,206,220,115Q345,24,500,24Q655,24,780,115Q905,206,952.5,353Q1000,500,952.5,647Z"
                  />
                </g>
              </svg>
            </div>{" "}
          </div>
          <div className="col-span-1  h-full">
            <div className=" my-10">
              {" "}
              <div className="flex w-full items-center justify-center ">
                {" "}
                <h1 className="prose prose-lg text-primary font-bold xs:text-4xl  text-2xl">
                  Get in Touch
                </h1>{" "}
                <hr className="w-24 lg:block hidden mx-5 border-t-4 rounded-md border-secondary" />
              </div>
              <div className="flex w-full items-center justify-center my-10">
                <form className="w-full mx-10 font-poppins" onSubmit={submit}>
                  {" "}
                  <div className="flex w-full items-center justify-center  my-5">
                    {" "}
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="input bg-base-300 focus:outline-none input-bordered border-primary  w-full md:max-w-md"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="flex w-full items-center justify-center  my-5">
                    {" "}
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="input bg-base-300 focus:outline-none input-bordered border-primary  w-full md:max-w-md"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex w-full items-center justify-center">
                    {" "}
                    <textarea
                      cols="100"
                      rows="10"
                      placeholder="Your message"
                      value={message}
                      className=" textarea bg-base-300  w-full h-[200px] border-2 border-primary"
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="flex w-full items-center justify-center  my-5">
                    <button type="submit" className="btn btn-secondary w-full">
                      Send Message
                    </button>
                  </div>
                  <span className={emailSent ? "visible" : "hidden"}>
                    Sent!
                  </span>
                </form>
              </div>
            </div>
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
