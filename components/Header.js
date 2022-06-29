import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { useStateValue } from "../stateProvider";
import logo from "../svgs/logoj.svg";
const Header = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const Menu = useRef(null);
  const MenuButton = useRef(null);
  const [{ darkmode }, dispatch] = useStateValue();
  const mode = () => {
    dispatch({
      type: "SET_DARKMODE",
      darkmode: !darkmode,
    });
  };
  useEffect(() => {
    if (!menuOpened) {
      document.activeElement.blur();
    } else if (menuOpened && !Menu.current.contains(document.activeElement)) {
      setMenuOpened(false);
    }
    console.log(menuOpened);
  }, [menuOpened]);
  useEffect(() => {
    let timer;
    const aniStart = async () => {
      console.log(router.pathname);
      timer = setTimeout(() => {
        setIsActive(true);

        const tl = gsap.timeline();
        tl.to(".cover-strip", {
          yPercent: 100,
          duration: 0.8,
          ease: "Expo.easeInOut",
          stagger: 0.1,
        });
      }, 100);
    };
    const aniEnd = () => {
      if (timer) {
        clearTimeout(timer);
      }
      const tl = gsap.timeline();
      if (isActive) {
        tl.to(".cover-strip", {
          yPercent: 200,
          duration: 0.8,
          ease: "Expo.easeInOut",
          stagger: -0.1,
        });
        setIsActive(false);
      }

      tl.set(".cover-strip", { yPercent: 0 });
      clearTimeout(timer);
    };

    router.events.on("routeChangeStart", aniStart);
    router.events.on("routeChangeComplete", aniEnd);
    router.events.on("routeChangeError", aniEnd);

    return () => {
      router.events.off("routeChangeStart", aniStart);
      router.events.off("routeChangeComplete", aniEnd);
      router.events.off("routeChangeError", aniEnd);
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [router]);
  return (
    <>
      <div className="flex flex-col overflow-hidden relative z-50">
        <div
          id="cover"
          className="cover-strip h-[110vh] w-3/12 bg-base-100  top-0 left-0 cover fixed"
        ></div>
        <div
          id="cover1"
          className={`cover-strip h-[110vh] w-3/12 bg-base-200 ${
            darkmode && "brightness-105"
          } fixed top-0 left-1/4 cover`}
        ></div>
        <div
          id="cover2"
          className="cover-strip h-[110vh] w-3/12 bg-base-300 fixed top-0 left-2/4 cover"
        ></div>
        <div
          id="cover3"
          className="cover-strip h-[110vh] w-3/12 bg-primary fixed top-0 left-3/4 cover"
        ></div>
      </div>

      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown" ref={Menu}>
            <div
              tabindex="0"
              className="btn btn-ghost lg:hidden"
              ref={MenuButton}
              onBlur={(e) => {
                setMenuOpened(false);
              }}
              onClick={() => setMenuOpened(!menuOpened)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              onBlur={(e) => {
                MenuButton.current.focus();
              }}
              onFocus={(e) => {
                setMenuOpened(true);
              }}
              onClick={(e) => {
                setMenuOpened(false);
              }}
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/skills">Skills</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/contact">Contacts</Link>
              </li>
            </ul>
          </div>
         
          <a
            className="btn btn-ghost normal-case text-xl group text-primary font-poppins"
           
          >
            <img
              src={logo.src}
              width={"60px"}
              height={"50px"}
              layoutId="main-image"
              className="group-hover:animate-bounce"
           
            />
            JAYFOLIO
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/skills">Skills</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contacts</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a>
            <label className="swap swap-rotate inline-flex " onChange={mode}>
              {darkmode ? (
                <input type="checkbox" />
              ) : (
                <input type="checkbox" checked />
              )}

              <svg
                className="swap-on fill-current md:w-10 md:h-10 w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              <svg
                className="swap-off fill-current md:w-10 md:h-10 w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </a>
        </div>
      </div>
    </>
  );
};
export default Header;
