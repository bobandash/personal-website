import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export function SectionHeader({ text, isBlack, isMobile, isDesktop }) {
  const container = useRef();
  const header = useRef();
  useGSAP(() => {
    gsap.fromTo(
      header.current,
      {
        opacity: 0,
        translateY: "50%",
        webkitFilter: "blur(" + 12 + "px)",
      },
      {
        scrollTrigger: container.current,
        opacity: 1,
        translateY: "0%",
        duration: 0.5,
        webkitFilter: "blur(" + 0 + "px)",
      },
    );
  }, [container]);

  return (
    <div ref={container} className="overflow-hidden">
      <h1
        ref={header}
        className={`text-center text-4xl font-bold uppercase sm:text-5xl md:text-7xl lg:text-7xl ${isBlack ? "text-black" : "text-white"} ${isMobile && "lg:hidden"} ${isDesktop && "hidden lg:block"}`}
      >
        {text}
      </h1>
      <hr
        className={`border-b-4  ${isBlack ? "border-black" : "border-white"}`}
      />
    </div>
  );
}
