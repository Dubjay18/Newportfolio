import Image from "next/image";
import { useRouter } from "next/router";
import projectData from "../../components/data";
import Head from "next/head";
import Link from "next/link";
import { useStateValue } from "../../stateProvider";
import headIcon from "../../svgs/he2.svg";
import ogIcon from "../../svgs/logoj.svg";
const project = () => {
  const [{ darkmode }, dispatch] = useStateValue();
  const router = useRouter();
  let { id } = router.query;
  if (!id) {
    return (
      <div className="h-[92vh] w-full flex justify-center items-center">
        Loading...
      </div>
    );
  }
  return (
    <div className="w-full min-h-[92vh]">
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
      <div className="w-screen h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] bg-base-100/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={projectData[id]?.image?.src}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">{projectData[id]?.name}</h2>
          <h3>{projectData[id]?.topTech}</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="text-primary">Project</p>
          <h2>Overview</h2>
          <p>{projectData[id]?.desp}</p>
          <a
            href={projectData[id]?.githubLink}
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8  btn btn-primary">
              Code
            </button>
          </a>
          <a href={projectData[id]?.liveLink} target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4 btn btn-primary">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-md shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              {projectData[id]?.technologies?.map((tech, i) => {
                return (
                  <p
                    key={i}
                    className={`${
                      darkmode ? "text-accent" : "text-secondary"
                    } py-2 flex items-center`}
                  >
                    {tech}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default project;
export async function getServerSideProps(context) {
  await waitload(2);
  return {
    props: { dummy: "dummy" }, // will be passed to the page component as props
  };
}

function waitload(sec) {
  return new Promise((resolve) => setTimeout(resolve, sec * 500));
}
