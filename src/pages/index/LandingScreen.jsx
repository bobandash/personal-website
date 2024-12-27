import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { debounce } from "lodash";
import { ScrollTrigger } from "gsap/all";

// TO-DO: refactor gsap code into different files
export default function LandingScreen() {
  const arrowContainer = useRef(null);
  const arrowIcon = useRef(null);
  const roleOne = useRef(null);
  const roleTwo = useRef(null);
  const roleThree = useRef(null);

  useEffect(() => {
    const onResize = debounce(() => {
      ScrollTrigger.refresh();
    }, 1500);

    window.addEventListener("resize", onResize);
    onResize();

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useGSAP(() => {
    if (!arrowContainer.current) return;
    const t1 = gsap.timeline({ repeat: -1 });
    t1.fromTo(
      arrowContainer.current,
      { bottom: "40px" },
      { bottom: "5px", duration: 1.25 },
    ).to(arrowContainer.current, {
      bottom: "40px",
      duration: 1,
    });
  }, [arrowContainer]);

  useGSAP(() => {
    if (!roleOne.current || !roleTwo.current || !roleThree.current) return;
    const elements = [roleOne.current, roleTwo.current, roleThree.current];
    const t2 = gsap.timeline({ repeat: -1 });
    elements.forEach((element) => {
      t2.fromTo(
        element,
        { y: "100%", x: "-50%", opacity: 0 },
        { y: "0%", x: "-50%", opacity: 1, duration: 1, ease: "power2.out" },
      ).to(
        element,
        {
          x: "-50%",
          y: "-100%",
          opacity: 0,
          duration: 1.5,
          ease: "power2.in",
        },
        "+=0.5",
      );
    });
  }, [roleOne, roleTwo, roleThree]);

  return (
    <>
      <svg id="filters" className="hidden">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
									0 1 0 0 0
									0 0 1 0 0
									0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
      <section className="bg-primary h-screen" id="home">
        <div className="relative mx-auto h-screen w-10/12 max-w-[1400px]">
          <div className="flex h-screen flex-col items-center justify-center gap-4">
            <h1 className="font-big whitespace-nowrap text-7xl font-bold text-white sm:text-8xl md:text-9xl">
              Bruce Hsu
            </h1>
            <div className="relative h-8 w-full overflow-hidden sm:h-9 md:h-12">
              <div className="absolute left-1/2 translate-y-full" ref={roleOne}>
                <h2 className="whitespace-nowrap text-2xl font-bold text-yellow-300 sm:text-3xl md:text-5xl">
                  Full-Stack Web Developer
                </h2>
              </div>
              <div className="absolute left-1/2 translate-y-full" ref={roleTwo}>
                <h2 className="whitespace-nowrap text-2xl font-bold text-green-600 sm:text-3xl md:text-5xl">
                  E-Commerce Specialist
                </h2>
              </div>
              <div
                className="absolute left-1/2 translate-y-full"
                ref={roleThree}
              >
                <h2 className="whitespace-nowrap text-2xl font-bold text-red-600 sm:text-3xl md:text-5xl">
                  Aspiring Storyteller
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={arrowContainer}
          className="absolute bottom-5 left-1/2 -translate-x-1/2"
        >
          <i
            ref={arrowIcon}
            className="ri-arrow-down-s-line text-7xl text-white"
          ></i>
        </div>
      </section>
    </>
  );
}
