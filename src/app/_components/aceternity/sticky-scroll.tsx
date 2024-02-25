"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";

export const StickyScroll = ({
  content,
}: {
  content: {
    title: string;
    description: string;
  }[];
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    cardsBreakpoints.forEach((breakpoint, index) => {
      if (latest > breakpoint - 0.2 && latest <= breakpoint) {
        setActiveCard(() => index);
      }
    });
  });

  const backgroundColors = [
    "linear-gradient(to bottom right, black, var(--red))",
    "#0f1729",
    "linear-gradient(to bottom right, black, yellow)",
    "linear-gradient(to bottom right, black, yellow)",
  ];
  const linearGradients = [
    "url(gamereviewz.png)",
    "url(topix.png)",
    "url(construction.png",
    "url(construction.png",
  ];
  return (
    <motion.div
      animate={{
        background: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-full overflow-y-auto sm:flex justify-center relative sm:space-x-10 rounded-md p-2 sm:p-10 mt-20"
      ref={ref}
    >
      <div className="top-0 left-0 capitalize font-bold text-3xl sticky text-white">
        Projects
      </div>
      <div className="relative sm:flex sm:items-start px-4">
        <div className="">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20 grow-0">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        animate={{
          background: linearGradients[activeCard % linearGradients.length],
          backgroundSize: "contain",
        }}
        className="hidden lg:block h-60 w-96 rounded-md bg-white sticky top-40 overflow-hidden"
      ></motion.div>
      {/* <div className="h-40" /> */}
    </motion.div>
  );
};
