// Import Frontend assets
import HTML from "../../assets/technologies/frontend/html.png";
import CSS from "../../assets/technologies/frontend/CSS.png";
import Javascript from "../../assets/technologies/frontend/javascript.png";
import React from "../../assets/technologies/frontend/react.png";
import Remix from "../../assets/technologies/frontend/remix.png";
import TypeScript from "../../assets/technologies/frontend/typescript.svg";
import Tailwind from "../../assets/technologies/frontend/tailwind.svg";

// Import backend assets
import Express from "../../assets/technologies/backend/express.png";
import GraphQL from "../../assets/technologies/backend/graphql.png";
import MongoDb from "../../assets/technologies/backend/mongodb.png";
import Node from "../../assets/technologies/backend/node.png";
import Pug from "../../assets/technologies/backend/pug.png";
import SQL from "../../assets/technologies/backend/SQL.png";

// Import misc assets
import CPlusPlus from "../../assets/technologies/misc/cplusplus.png";
import Figma from "../../assets/technologies/misc/figma.png";
import Git from "../../assets/technologies/misc/git.svg";
import GSAP from "../../assets/technologies/misc/gsap.png";
import Python from "../../assets/technologies/misc/python.png";
import VBA from "../../assets/technologies/misc/vba.png";
import Webpack from "../../assets/technologies/misc/webpack.png";
import AWS from "../../assets/technologies/misc/aws.png";

// Import interests
import Anime from "../../assets/interests/anime.png";
import Chinese from "../../assets/interests/chinese.png";
import Ecommerce from "../../assets/interests/ecommerce.png";
import Valorant from "../../assets/interests/valorant.png";
import Youtube from "../../assets/interests/youtube.png";
import Section from "./components/Section";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { SectionHeader } from "./components/SectionHeader";
/* eslint-disable react/no-unescaped-entities */
const ToolKit = () => {
  const container = useRef(null);
  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
      },
    });
    t1.fromTo(
      ".container",
      {
        opacity: 0.5,
        scale: 1.2,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.0,
      },
    );
  }, []);

  return (
    <Section name={"Technologies"} isPrimary={false} id={"toolkit"}>
      <SectionHeader text={"Toolkit"} isBlack={true} />
      <div
        className="flex flex-col items-center gap-7 lg:mb-3 lg:mt-4 lg:flex-row lg:justify-around 2xl:mx-auto 2xl:w-[1200px] 2xl:justify-between"
        ref={container}
      >
        <Frontend />
        <Backend />
        <OtherTechnology />
      </div>
      <Interests />
    </Section>
  );
};

function SkillsContainer({ header, children }) {
  return (
    <div className="xs:w-4/5 container flex w-full flex-col sm:w-[300px] lg:flex-col-reverse">
      <h2 className="mb-1 mt-2 text-center text-4xl font-bold uppercase text-black sm:text-3xl md:mt-0 md:text-4xl lg:mt-3">
        {header}
      </h2>
      <div className="box-shadow flex flex-col gap-3 rounded-lg bg-gray-100 p-5 text-black md:gap-4 2xl:gap-6 2xl:px-10">
        {children}
      </div>
    </div>
  );
}

function Frontend() {
  return (
    <SkillsContainer header={"Frontend"}>
      <div className="grid grid-cols-2 items-center justify-center text-4xl 2xl:text-5xl">
        <IndividualIcon img={HTML} text={"HTML"} />
        <IndividualIcon img={CSS} text={"CSS"} />
      </div>
      <div className="grid grid-cols-2 items-center justify-center text-4xl 2xl:text-5xl">
        <IndividualIcon img={Javascript} text={"Javascript"} />
        <IndividualIcon img={TypeScript} text={"Typescript"} />
      </div>
      <div className="grid grid-cols-2 items-center justify-center text-4xl 2xl:text-5xl">
        <IndividualIcon img={React} text={"React"} />
        <IndividualIcon img={Remix} text={"Remix"} />
      </div>
      <div className="grid grid-cols-1 items-center justify-center text-4xl 2xl:text-5xl">
        <IndividualIcon img={Tailwind} text={"Tailwind"} />
      </div>
    </SkillsContainer>
  );
}

function Backend() {
  return (
    <SkillsContainer header={"Backend"}>
      <div className="grid grid-cols-2 items-center justify-center text-4xl 2xl:text-5xl">
        <IndividualIcon img={Express} text={"Express"} />
        <IndividualIcon img={Node} text={"Node"} />
      </div>
      <div className="grid grid-cols-2 items-center justify-center text-4xl 2xl:text-5xl">
        <IndividualIcon img={Javascript} text={"Javascript"} />
        <IndividualIcon img={TypeScript} text={"Typescript"} />
      </div>
      <div className="grid grid-cols-2 items-center justify-center text-4xl 2xl:text-5xl">
        <IndividualIcon img={MongoDb} text={"MongoDB"} />
        <IndividualIcon img={GraphQL} text={"GraphQL"} />
      </div>
      <div className="grid grid-cols-2 items-center justify-center text-4xl 2xl:text-5xl">
        <IndividualIcon img={SQL} text={"SQL"} />
        <IndividualIcon img={Pug} text={"Pug"} />
      </div>
    </SkillsContainer>
  );
}

function OtherTechnology() {
  return (
    <SkillsContainer header={"Other Tools"}>
      <div className="grid grid-cols-2 items-center justify-center text-4xl 2xl:text-5xl">
        <IndividualIcon img={CPlusPlus} text={"C++"} />
        <IndividualIcon img={Python} text={"Python"} />
      </div>
      <div className="grid grid-cols-2 items-center justify-center text-4xl 2xl:text-5xl">
        <IndividualIcon img={VBA} text={"VBA"} />
        <IndividualIcon img={Figma} text={"Figma"} />
      </div>
      <div className="grid grid-cols-2 items-center justify-center text-4xl 2xl:text-5xl">
        <IndividualIcon img={Git} text={"Git"} />
        <IndividualIcon img={GSAP} text={"GSAP"} />
      </div>
      <div className="grid grid-cols-2 items-center justify-center text-4xl 2xl:text-5xl">
        <IndividualIcon img={AWS} text={"AWS"} />
        <IndividualIcon img={Webpack} text={"Webpack"} />
      </div>
    </SkillsContainer>
  );
}

function InterestsContainer({ header, children }) {
  return (
    <div className="xs:w-4/5 container mx-auto flex w-full flex-col sm:w-[300px] lg:mt-0 lg:w-4/5 lg:max-w-[600px] lg:flex-col-reverse">
      <h2 className="mb-1 mt-2 text-center text-4xl font-bold uppercase text-black sm:text-3xl md:mt-0 md:text-4xl lg:mt-3">
        {header}
      </h2>
      <div className="box-shadow flex flex-col gap-3 rounded-lg bg-gray-100 p-5 text-black lg:flex-row lg:justify-center lg:gap-4 2xl:gap-6 2xl:px-10">
        {children}
      </div>
    </div>
  );
}

function Interests() {
  return (
    <InterestsContainer header={"Interests"}>
      <div className="grid  grid-cols-2 items-center justify-center text-4xl lg:gap-3 2xl:text-5xl">
        <IndividualIcon img={Anime} text={"Anime"} />
        <IndividualIcon img={Chinese} text={"Mandarin"} />
      </div>
      <div className="grid grid-cols-2 items-center justify-center text-4xl lg:gap-3 2xl:text-5xl">
        <IndividualIcon img={Ecommerce} text={"eCommerce"} />
        <IndividualIcon img={Valorant} text={"Valorant"} />
      </div>
      <div className="grid grid-cols-1 items-center justify-center text-4xl 2xl:text-5xl">
        <IndividualIcon img={Youtube} text={"Youtube"} />
      </div>
    </InterestsContainer>
  );
}

function IndividualIcon({ img, text }) {
  return (
    <div className="flex flex-col items-center justify-center transition-all duration-300 hover:scale-110">
      <img src={img} alt={text} className="h-10" />
      <p className="-mt-1 text-xl">{text}</p>
    </div>
  );
}

export default ToolKit;
