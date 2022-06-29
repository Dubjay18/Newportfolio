import React, { useRef, useContext } from "react";
import { gsap } from "gsap";

import { useIsomorphicLayoutEffect } from "react-use";
import { TransitionContext } from "./TransitionProvider";

import { randomNumber } from "./util";

const ImplodeExplodeInOut = ({
  children,
  target,
  delay,
  durationIn,
  durationOut,
}) => {
  const { timeline } = useContext(TransitionContext);
  const el = useRef();

  useIsomorphicLayoutEffect(() => {
    const chars = target.split(" ");
    chars.forEach((char) => {
      // intro animation
      gsap.fromTo(
        char,
        {
          x: randomNumber(-2000, 2000),
          y: randomNumber(-1000, 1000),
          z: randomNumber(100, 100),
          opacity: 0,
          rotation: randomNumber(360, 720),
          rotationX: randomNumber(-360, 360),
          rotationY: randomNumber(-360, 360),
          ease: "power4.out",
        },
        {
          x: 0,
          y: 0,
          z: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          opacity: 1,
          duration: 0.2,
          delay: 0.5 + Math.random() * 0.5,
          ease: "power4.out",
        }
      );

      // outro animation
    });

    gsap.set(el.current, {
      opacity: 1,
    });
  }, []);

  return (
    <div style={{ opacity: 0 }} ref={el}>
      {children}
    </div>
  );
};
export default ImplodeExplodeInOut;
