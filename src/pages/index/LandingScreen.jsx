/* eslint-disable react/no-unescaped-entities */
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
/* import { useBackgroundColor } from "../../context/BackgroundColorContext";
import { ScrollTrigger } from "gsap/all"; */
import { useRef } from "react";

function SeparateIntoSpans({ text }) {
  const splitText = [...text];
  return (
    <>
      {splitText.map((char, index) => (
        <span
          key={index}
          className="line xs:text-4xl translate-y-full text-3xl uppercase sm:text-7xl md:text-6xl lg:text-8xl"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </>
  );
}

export default function LandingScreen() {
  useGSAP(() => {
    const timeline = gsap.timeline();
    timeline
      .to(".line", {
        translateY: "0%",
        stagger: 0.05,
        ease: "power2.inOut",
      })
      .to(".line-2", {
        opacity: 1,
        translateY: "0%",
        pointerEvents: "auto",
        delay: 0.5,
        duration: 1,
      })
      .to(".line-3", {
        opacity: 1,
        translateY: "0%",
        delay: 0.5,
        pointerEvents: "auto",
        duration: 1,
      })
      .to(".arrow", {
        opacity: 1,
        translateY: "0%",
        repeat: -1,
        duration: 1.1,
      });
  }, []);

  /*   const { setPrimaryBackground } = useBackgroundColor();
   */
  const containerRef = useRef(null);
  /*   useGSAP(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top center",
      leave: "bottom top",
      onEnterBack: () => {
        setPrimaryBackground();
      },
      onEnter: () => {
        setPrimaryBackground();
      },
    });
  }, [containerRef]); */

  return (
    <div
      className="relative flex min-h-screen flex-grow font-bold"
      ref={containerRef}
    >
      <div className="mx-auto flex w-11/12 max-w-[1400px] flex-col items-center justify-center gap-4 sm:gap-7 md:gap-8 2xl:gap-12">
        <div className=" rounded-md bg-white px-4 py-2 md:px-6 md:py-4 2xl:px-10">
          <h1 className="relative flex flex-wrap overflow-hidden">
            <SeparateIntoSpans text={"Hi, I'm Bruce Hsu"} />
          </h1>
        </div>
        <h2 className="line-2 xs:text-2xl pointer-events-none translate-y-1/2 text-center text-xl uppercase text-white opacity-0 sm:text-5xl 2xl:text-6xl">
          In 2023, I decided to learn <br />
          how to code
        </h2>
        <h2 className="line-3 xs:text-2xl pointer-events-none translate-y-1/2 pb-20 text-center text-xl uppercase text-white opacity-0 sm:text-5xl 2xl:text-6xl">
          Here was the result<span className="text-white">.</span>
        </h2>
      </div>
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 overflow-hidden">
        <i className="arrow ri-arrow-down-line block -translate-y-full text-7xl text-white 2xl:text-8xl"></i>
      </div>
    </div>
  );
}
