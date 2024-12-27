import { SectionHeader } from "./components/SectionHeader";
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
    <Section name={"About Me"} isPrimary={false} id={"about"}>
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
            <div>
              <h3 className="text-xl font-bold sm:text-2xl">Introduction</h3>
              <p className="text-xl sm:text-2xl">
                Nice to meet you! I’m Bruce Hsu, a UCLA Business Economics
                alumni turned full-stack web developer.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold sm:text-2xl">Why Pivot?</h3>
              <p className="text-xl sm:text-2xl">
                After graduation, I taught myself VBA and automated numerous
                repetitive tasks in Excel for work. My coworkers were thrilled
                when their tasks that originally took days became minutes, and I
                was excited to keep learning. However, I realized that if I
                learned how to code at scale - the amount I would be able to do
                would go far beyond simple automation. So, I buckled up and
                learned web development.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold sm:text-2xl">
                What&apos;s happening now?
              </h3>
              <p className="text-xl sm:text-2xl">
                I&apos;m currently looking for opportunities to break into SWE.
                While searching, I&apos;m experimenting with new libraries,
                frameworks, and learning infrastructure. In 2025, I&apos;m
                looking forward to attending more meetups and hackathons, and
                document my journey on YouTube!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
