"use client";
import "@/app/test.css";
import {
  MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useRef } from "react";
import { AnimatedTooltip } from "./_components/aceternity/animatedTooltip";
import { StickyScroll } from "./_components/aceternity/sticky-scroll";

export default function Home() {
  return (
    <div className="homepage">
      <BioScreen />
      <ProjectsScreen />
    </div>
  );
}

const NextIndicator = ({ text }: { text: string }) => {
  return (
    <div className="text-white flex flex-col items-center">
      <h2 className="text-3xl uppercase font-bold hover:font-extrabold">
        {text}
      </h2>
      <svg
        className="animate-bounce mt-2"
        width="30"
        height="30"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  );
};

const Header = () => {
  const languages: {
    id: number;
    name: string;
    image: string;
  }[] = [
    {
      id: 0,
      name: "HTML",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      id: 1,
      name: "Angular",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
    },
    {
      id: 2,
      name: "Javascript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      id: 3,
      name: "Typescript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      id: 4,
      name: "Java",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      id: 5,
      name: "React",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      id: 6,
      name: "Swift",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    },
    {
      id: 7,
      name: ".NET",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-plain.svg",
    },
  ];
  return <AnimatedTooltip items={languages} />;
};

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <div>
      <section className="parallax">
        <div ref={ref}>
          <div
            style={{
              width: "300px",
              height: "300px",
              backgroundColor: "red",
            }}
          ></div>
        </div>
        <motion.h2 style={{ y }}>Test</motion.h2>
      </section>
      <div className="relative">
        <div className="absolute bottom-2 left-0 right-0">
          <NextIndicator text="Projects" />
        </div>
      </div>
    </div>
  );
}

const TestParallax = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <div className="">
        {[1, 2, 3, 4, 5].map((image) => (
          <Image key={image} />
        ))}
        <motion.div className="progress" style={{ scaleX }} />
      </div>
    </>
  );
};

const BioText = () => {
  return (
    <div className="h-max w-full rounded-md flex md:items-center md:justify-center antialiased relative -bottom-96">
      <div className=" p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 from-60% to-neutral-400 bg-opacity-50">
          Software Developer
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          NY born and raised. I love coding, learning about new technologies,
          and sharing my experiences.
        </p>
      </div>
      <div className="absolute -bottom-52 left-0 right-0">
        <NextIndicator text="Projects" />
      </div>
    </div>
  );
};

const ParallaxScreen = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <section className="parallax">{children}</section>
    </div>
  );
};

const BioScreen = () => {
  return (
    <ParallaxScreen>
      <div className="relative top-20">
        <Header />
        <BioText />
      </div>
    </ParallaxScreen>
  );
};

const ProjectsScreen = () => {
  return (
    <ParallaxScreen>
      <StickyScroll
        content={[
          {
            title: "GameReviewz",
            description: `
            GameReviewz was my first introduction to web dev and React programming. 
            I collaborated on it with two and my friends and looking back, it's pretty bad. 
            But I'm proud of the work we did.
            `,
          },
          {
            title: "Topix",
            description: `
              A cool little project I started and never finished. This was my second attempt at React programming. This time utilizing Next.
              Being able to understand the backend and frontend architecture was important to me, and learning NextJs was definitely beneficial.  
              `,
          },
          {
            title: "NotiMe",
            description: `An iPhone app currently under construction. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
          },
          {
            title: "Heir",
            description: `An iPhone app currently under construction. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor 
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
          },
        ]}
      />
    </ParallaxScreen>
  );
};
