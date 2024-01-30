/* eslint-disable react/no-unescaped-entities */
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

function RoleSpans({ text }) {
  const splitText = [...text];
  return (
    <h2 className={`relative overflow-hidden text-center text-white`}>
      {splitText.map((char, index) => (
        <span
          key={index}
          className={`char xs:text-4xl inline-block text-2xl sm:text-5xl md:text-6xl lg:text-7xl ${index % 2 == 0 ? "odd" : "even"}`}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h2>
  );
}

function HeaderSpans({ text }) {
  const splitText = [...text];
  return (
    <>
      {splitText.map((char, index) => (
        <span
          key={index}
          className="line -translate-y-full text-5xl sm:text-7xl md:text-9xl"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </>
  );
}

export default function LandingScreen() {
  const containerRef = useRef(null);
  const [role] = useState("Full Stack Engineer");
  /*   const isFirstRender = useRef(true);
  useEffect(() => {
    function changeRole() {
      setTimeout(() => {
        setRole("Full Stack Engineer");
      }, 0);
      setTimeout(() => {
        setRole("eCommerce Specialist");
      }, 5000);
      setTimeout(() => {
        setRole("Anime Aficionado");
      }, 10000);
      setTimeout(() => {
        setRole("Future Youtuber");
      }, 15000);
    }

    changeRole();
    return () => {
      clearTimeout(changeRole);
    };
  }, []); */

  function nested() {
    const nested =
      gsap.timeline(/* { yoyo: true, repeat: 1, repeatDelay: 2 } */);
    nested
      .fromTo(
        ".char.odd",
        {
          yPercent: -100,
        },
        {
          yPercent: 0,
          duration: 0.5,
          ease: "bounce",
        },
      )
      .fromTo(
        ".char.even",
        {
          yPercent: 100,
        },
        {
          yPercent: 0,
          duration: 0.5,
          ease: "bounce",
        },
      );
    return nested;
  }

  // intialize gsap
  useGSAP(() => {
    const timeline = gsap.timeline();
    timeline.to(".line", {
      y: "0%",
      stagger: 0.05,
      ease: "power2.inOut",
    });
    timeline.add(nested(), "+=1");
  }, []);

  /*   useGSAP(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    nested();
  }, [role]); */

  return (
    <div
      className="relative flex min-h-screen flex-grow font-bold"
      ref={containerRef}
    >
      <div className="mx-auto flex w-11/12 max-w-[1400px] flex-col items-center justify-center gap-4 sm:gap-7 md:gap-8">
        <div className="rounded-md bg-white px-4 py-2 md:px-6 md:py-4 2xl:px-10">
          <h1 className="relative flex flex-wrap overflow-hidden uppercase text-black">
            <HeaderSpans text={"BRUCE HSU"} />
          </h1>
        </div>
        <RoleSpans text={role} />
      </div>
    </div>
  );
}
