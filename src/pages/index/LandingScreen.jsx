import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

// TO-DO: refactor gsap code into different files
export default function LandingScreen() {
  const textOne = useRef(null);
  const textTwo = useRef(null);
  const textThree = useRef(null);
  const textFour = useRef(null);
  const arrowContainer = useRef(null);
  const arrowIcon = useRef(null);
  useGSAP(() => {
    const t1 = gsap.timeline({ repeat: -1 });
    const arrowIcons = [arrowIcon.current];
    t1.fromTo(
      textOne.current,
      {
        opacity: 0,
        webkitFilter: "blur(" + 12 + "px)",
        ease: "power2.inOut",
      },
      {
        opacity: 1,
        webkitFilter: "blur(" + 0 + "px)",
        duration: 2,
      },
    )
      .to(
        arrowIcons,
        {
          color: "#FFFFFF",
          duration: 0.1,
        },
        "<",
      )
      .to(textOne.current, {
        opacity: 0,
        webkitFilter: "blur(" + 12 + "px)",
        duration: 2,
        delay: 2,
        ease: "power2.inOut",
      })
      .fromTo(
        textTwo.current,
        {
          opacity: 0,
          webkitFilter: "blur(" + 12 + "px)",
        },
        {
          opacity: 1,
          webkitFilter: "blur(" + 0 + "px)",
          duration: 2,
        },
        "-=1.25",
      )
      .to(
        arrowIcons,
        {
          color: "#F0DB4F",
          duration: 2,
        },
        "<",
      )
      .to(textTwo.current, {
        opacity: 0,
        webkitFilter: "blur(" + 12 + "px)",
        duration: 2,
        delay: 2,
        ease: "power2.inOut",
      })
      .fromTo(
        textThree.current,
        {
          opacity: 0,
          webkitFilter: "blur(" + 12 + "px)",
        },
        {
          opacity: 1,
          webkitFilter: "blur(" + 0 + "px)",
          duration: 2,
        },
        "-=1.25",
      )
      .to(
        arrowIcons,
        {
          color: "#5E8E3E",
          duration: 2,
        },
        "<",
      )
      .to(textThree.current, {
        opacity: 0,
        webkitFilter: "blur(" + 12 + "px)",
        duration: 2,
        delay: 2,
        ease: "power2.inOut",
      })
      .fromTo(
        textFour.current,
        {
          opacity: 0,
          webkitFilter: "blur(" + 12 + "px)",
        },
        {
          opacity: 1,
          webkitFilter: "blur(" + 0 + "px)",
          duration: 2,
        },
        "-=1.25",
      )
      .to(
        arrowIcons,
        {
          color: "#FF0000",
          duration: 2,
        },
        "<",
      )
      .to(textFour.current, {
        opacity: 0,
        webkitFilter: "blur(" + 12 + "px)",
        duration: 2,
        delay: 2,
        ease: "power2.inOut",
      });
  }, [textOne, textTwo, textThree, textFour]);

  // bottom arrow
  useGSAP(() => {
    const t2 = gsap.timeline({ repeat: -1 });
    t2.fromTo(
      arrowContainer.current,
      {
        bottom: "40px",
      },
      {
        bottom: "15px",
        duration: 1,
      },
    ).to(arrowContainer.current, {
      bottom: "40px",
      duration: 1,
    });
  }, [arrowContainer]);

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
      <section className="bg-primary h-screen">
        <div className="relative mx-auto h-screen w-10/12 max-w-[1400px]">
          <div className="morph h-screen">
            <h1
              ref={textOne}
              className="role font-big absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-4xl font-bold text-white sm:text-7xl lg:text-8xl"
            >
              BRUCE HSU
            </h1>
            <h1
              ref={textTwo}
              className="role font-big absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-3xl font-bold text-[#F0DB4F]  opacity-0 sm:text-6xl md:text-7xl lg:text-8xl"
            >
              WEB DEVELOPER
            </h1>
            <h1
              ref={textThree}
              className="role font-big absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-3xl font-bold text-[#5E8E3E] opacity-0 sm:text-6xl md:text-7xl lg:text-8xl"
            >
              eCOMMERCE EXPERT
            </h1>
            <h1
              ref={textFour}
              className="role font-big absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-3xl font-bold text-[#FF0000] opacity-0 sm:text-6xl md:text-7xl lg:text-8xl"
            >
              ASPIRING YOUTUBER
            </h1>
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
        </div>
      </section>
    </>
  );
}
