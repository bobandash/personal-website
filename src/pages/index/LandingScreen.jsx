/* eslint-disable react/no-unescaped-entities */
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function SeparateIntoSpans({ text }) {
  const splitText = [...text];
  return (
    <>
      {splitText.map((char, index) => (
        <span
          key={index}
          className="line xs:text-4xl text-3xl sm:text-7xl md:text-6xl lg:text-7xl"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </>
  );
}

export default function LandingScreen() {
  const containerRef = useRef(null);

  return (
    <div
      className="relative flex min-h-screen flex-grow font-bold"
      ref={containerRef}
    >
      <div className="mx-auto flex w-11/12 max-w-[1400px] flex-col items-center justify-center gap-4 sm:gap-7 md:gap-8 2xl:gap-12">
        <div className="rounded-md bg-white px-4 py-2 md:px-6 md:py-4 2xl:px-10">
          <h1 className="relative flex flex-wrap overflow-hidden">
            <SeparateIntoSpans text={"Hi, I'm Bruce Hsu"} />
          </h1>
        </div>
        <div>
          <h2 className="text-6xl text-white">A Full Stack Web Dev</h2>
        </div>
      </div>
    </div>
  );
}
