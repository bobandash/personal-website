import { Header } from "./components/Header";
import Section from "./components/Section";
import BruceCropped from "../../assets/pfp/bruce_cropped.jpg";
import Bruce from "../../assets/pfp/bruce.jpg";

const AboutMe = () => {
  return (
    <Section name={"About Me"} isPrimary={false}>
      <div className="flex flex-col gap-7">
        <Header text={"About Me"} isBlack={true} />
        <div className="md:grid lg:grid-cols-2 lg:gap-7">
          <div>
            <img
              src={BruceCropped}
              alt={"Bruce pfp"}
              className="block lg:hidden xl:block"
            />
            <img
              src={Bruce}
              alt={"Bruce pfp"}
              className="hidden lg:block xl:hidden"
            />
          </div>
          <div className="lg :mt-0 mt-4 flex flex-col   gap-5">
            <p className="text-xl sm:text-2xl">
              Nice to meet you! I’m Bruce Hsu, a UCLA Business Economics
              graduate turned full stack web developer (expertise in
              Javascript/Typescript, with ReactJs for frontend and
              NodeJs/ExpressJs for backend, or modern frameworks like Remix).
            </p>
            <div>
              <h3 className="text-xl font-bold sm:text-2xl">Why The Pivot?</h3>
              <p className="text-xl sm:text-2xl">
                I automated a bunch of operations using VBA, Microsoft Office’s
                Scripting Language, and realized I wanted to delve deeper into
                programming.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold sm:text-2xl">
                How Did I Learn?
              </h3>
              <p className="text-xl sm:text-2xl">
                Self-taught through online courses. And, with the help of
                mentors and friends (shoutout to Chester, Aaron, Jasmine,
                Joonhee, Jhoshua, and more)!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
