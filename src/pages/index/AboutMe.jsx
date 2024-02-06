import { SectionHeader } from "./components/Header";
import Section from "./components/Section";
import BruceCropped from "../../assets/pfp/bruce_cropped.jpg";
import Bruce from "../../assets/pfp/bruce.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
const AboutMe = () => {
  // reveal text effect
  const image1 = useRef(null);
  const image2 = useRef(null);
  const textContainer = useRef(null);
  // image effect
  useGSAP(() => {
    const images = [image1.current, image2.current];
    const tl = gsap.timeline({ scrollTrigger: image1.current });
    tl.fromTo(
      images,
      {
        webkitFilter: "blur(" + 2 + "px)",
        translateY: "20px",
      },
      {
        duration: 0.5,
        webkitFilter: "blur(" + 0 + "px)",
        translateY: "0px",
      },
    );
  }, [image1, image2]);

  // text effect
  useGSAP(() => {
    const tl = gsap.timeline({ scrollTrigger: textContainer.current });
    tl.fromTo(
      textContainer.current,
      {
        webkitFilter: "blur(" + 2 + "px)",
        translateY: "20px",
      },
      {
        duration: 0.5,
        webkitFilter: "blur(" + 0 + "px)",
        translateY: "0px",
      },
    );
  }, []);
  return (
    <Section name={"About Me"} isPrimary={false}>
      <div className="flex flex-col gap-3 md:gap-7 2xl:gap-10">
        <SectionHeader text={"About Me"} isBlack={true} />
        <div className="relative md:grid lg:grid-cols-2 lg:gap-7">
          <div className="relative">
            <img
              ref={image1}
              src={BruceCropped}
              alt={"Bruce pfp"}
              className="block lg:hidden xl:block"
            />
            <img
              ref={image2}
              src={Bruce}
              alt={"Bruce pfp"}
              className="hidden lg:block xl:hidden"
            />
          </div>
          <div
            className="relative mt-4 flex flex-col gap-5 lg:mt-0"
            ref={textContainer}
          >
            <p className="text-xl sm:text-2xl">
              Nice to meet you! I’m Bruce Hsu, a UCLA Business Economics alumni
              turned full stack web developer (expertise in
              Javascript/Typescript, with ReactJs for frontend and
              NodeJs/ExpressJs for backend, or modern frameworks like Remix).
            </p>
            <div>
              <h3 className="text-xl font-bold sm:text-2xl">Why Pivot?</h3>
              <p className="text-xl sm:text-2xl">
                I automated a bunch of operations using VBA, Microsoft Office’s
                Scripting Language, and realized I wanted to delve deeper into
                programming.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold sm:text-2xl">
                What&apos;s happening now?
              </h3>
              <p className="text-xl sm:text-2xl">
                I&apos;m currently looking for opportunties to break into SWE.
                While searching, I&apos;m trying to build a Shopify App as my
                next project, improve on system design + DSA, work on BlankMod,
                and start my YouTube channel!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
