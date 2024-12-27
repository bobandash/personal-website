// TO-DO: learn canvas to do this in a less hacky way
/* eslint-disable react/no-unescaped-entities */

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function SeparateIntoSpans({ text }) {
  const splitText = [...text];
  const container = useRef(null);
  useGSAP(
    () => {
      const timeline = gsap.timeline({
        scrollTrigger: container.current,
      });
      timeline.fromTo(
        ".letter",
        {
          translateY: "100%",
        },
        {
          translateY: "0%",
          duration: 1,
          stagger: {
            amount: 0.25,
            from: "center",
          },
          ease: "power2.inOut",
          grid: "auto",
        },
      );
    },
    { scope: container },
  );
  return (
    <div
      className="relative flex justify-center overflow-hidden"
      ref={container}
    >
      {splitText.map((char, index) => (
        <span
          key={index}
          className="letter font-big -translate-y-full text-center text-4xl font-bold uppercase text-white sm:text-6xl lg:text-7xl"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}

const GetInTouch = () => {
  return (
    <section
      className="bg-primary relative flex h-screen items-center"
      id="contact"
    >
      <div className="mx-auto flex w-10/12 max-w-[800px] flex-col items-center justify-center gap-5 sm:gap-10">
        <div className="flex flex-col gap-1">
          <SeparateIntoSpans text={"Let's Build The"} />
          <SeparateIntoSpans text={"Future Together"} />
        </div>
        <Icons />
      </div>
      <Copyright />
    </section>
  );
};

const Icons = () => {
  const container = useRef(null);
  useGSAP(
    () => {
      const timeline = gsap.timeline({
        scrollTrigger: container.current,
      });
      timeline.fromTo(
        ".pushable",
        {
          opacity: 0,
          scale: 1.25,
        },
        {
          opacity: 1,
          scale: 1,
          delay: 1.5,
          duration: 1,
          stagger: 0.25,
        },
      );
    },
    { scope: container },
  );

  return (
    <>
      <div
        ref={container}
        className="flex flex-row justify-center gap-5 md:gap-10"
      >
        <a
          href="mailto:brucehsu1126@gmail.com"
          className="pushable"
          target="_blank"
          rel="noreferrer"
        >
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front">
            <i className="ri-mail-line block text-2xl text-black sm:text-3xl md:text-5xl"></i>
          </span>
        </a>
        <a
          href="https://www.github.com/bobandash"
          className="pushable"
          target="_blank"
          rel="noreferrer"
        >
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front">
            <i className="ri-github-fill block text-2xl text-black sm:text-3xl md:text-5xl"></i>
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/brucehsu1126"
          className="pushable"
          target="_blank"
          rel="noreferrer"
        >
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front">
            <i className="ri-linkedin-box-fill block text-2xl text-black sm:text-3xl md:text-5xl"></i>
          </span>
        </a>
        <a
          href="https://www.youtube.com/@bruceysoo"
          className="pushable sm:inline"
          target="_blank"
          rel="noreferrer"
        >
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front">
            <i className="ri-youtube-fill block text-2xl text-black sm:text-3xl md:text-5xl"></i>
          </span>
        </a>
      </div>
    </>
  );
};

const Copyright = () => {
  return (
    <div className="bg-secondary absolute bottom-0 w-full py-3">
      <p className="flex flex-row items-center justify-center gap-1 text-3xl font-bold uppercase text-black">
        <i className="ri-copyright-line"></i>
        2024 Bruce Hsu
      </p>
    </div>
  );
};

export default GetInTouch;
