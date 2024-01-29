import { Header } from "./components/Header";

import Waldo from "../../assets/projects/waldo.png";
import WeatherApp from "../../assets/projects/weather_app.png";
import CVApplication from "../../assets/projects/resume.png";
import MemoryGame from "../../assets/projects/memory_game.png";
import KirbyBackend from "../../assets/projects/kirby_backend.png";
import KirbyShoppingCart from "../../assets/projects/kirby_shopping_cart.png";
import Blog from "../../assets/projects/blog.png";
import LinkOut from "../../assets/projects/linkout.png";
import BlankMod from "../../assets/projects/blankmod.png";
import { useGSAP } from "@gsap/react";
import { v4 as uuid } from "uuid";
import { useRef } from "react";
import { useBackgroundColor } from "../../context/BackgroundColorContext";
import { ScrollTrigger } from "gsap/all";

// TO-DO: store data into json file and aws s3, cdn, or database with actual dates
// Just doing a hacky solution for now in order to submit my application

const projectData = [
  {
    key: uuid(),
    title: "Weather App",
    image: WeatherApp,
    description:
      "Calls the WeatherAPI to fetch the weather from any location. I learned about API calls, promises, and DOM manipulation.",
    technologies: "Javascript",
    createdAt: "Feburary 2023",
    github: "https://github.com/bobandash/weather-app",
    liveDemo: "https://bobandash.github.io/weather-app/",
  },
  {
    key: uuid(),
    title: "Resume App",
    image: CVApplication,
    description:
      "First exposure to react and common hooks. If you type in inputs into the form, then it shows up on the resume builder on the right.",
    technologies: "ReactJS, CSS",
    createdAt: "August 2023",
    github: "https://github.com/bobandash/cv-application",
    liveDemo: "https://bruce-creates-cv-application.netlify.app/",
  },
  {
    key: uuid(),
    title: "Memory Game",
    image: MemoryGame,
    description:
      "A Pokemon themed game where users select cards that are not duplicates every round. Each difficulty has a number of cards needed to win the game.",
    technologies: "ReactJS, CSS",
    createdAt: "August 2023",
    github: "https://github.com/bobandash/pokemon-memory-game",
    liveDemo: "https://pokemon-memory-game-finished.netlify.app/",
  },
  {
    key: uuid(),
    title: "Inventory App",
    image: KirbyBackend,
    description:
      "The backend of the Kirby Store. Admin users are allowed to perform basic CRUD operations with products.",
    technologies: "Express, Node, MongoDB, Pug",
    createdAt: "November 2023",
    github: "https://github.com/bobandash/kirby-shopping-cart",
    liveDemo: "https://shopkirby.onrender.com/admin",
  },
  {
    key: uuid(),
    title: "Kirby Store",
    image: KirbyShoppingCart,
    description:
      "A Kirby Themed E-Commerce Site that allows users to view product pages and add products to their cart. It calls the inventory application's data.",
    technologies: "React, CSS",
    createdAt: "November 2023",
    github: "https://github.com/bobandash/kirby-shopping-cart",
    liveDemo: "https://shopkirby.netlify.app/",
  },
  {
    key: uuid(),
    title: "Where's Waldo",
    image: Waldo,
    description:
      "A web implementation of the classic picture book game Where's Waldo. Consist of three different modes (Pokemon, Waldo, and Super Smash).",
    technologies: "MERN Stack, Typescript, CSS",
    createdAt: "November 2023",
    github: "https://github.com/bobandash/wheres-waldo",
    liveDemo: "https://whereiswaldos.netlify.app/",
  },
  {
    key: uuid(),
    title: "Friend's Blog",
    image: Blog,
    description:
      "A full stack blog  for my friend serving in the Peace Corps in Kosovo. Consists of an admin site (where the admin can create/update/delete posts and comments) and a user site for users to read posts.",
    technologies: "MERN Stack, Typescript, AWS S3, CSS",
    createdAt: "December 2023",
    github: "https://github.com/bobandash/joonhee-blog",
    liveDemo: "https://www.joonhee.xyz",
  },
  {
    key: uuid(),
    title: "Linkout",
    image: LinkOut,
    description:
      "A full stack chat application where users can join/create communities, update their profile, communicate real-time with other users and communities.",
    technologies: "MERN Stack, Typescript, AWS S3, TailwindCSS, Socket.io, JWT",
    createdAt: "December 2023",
    github: "https://github.com/bobandash/linkout",
    liveDemo: "https://linkingout.netlify.app/",
  },
  {
    key: uuid(),
    title: "BlankMod",
    image: BlankMod,
    description:
      "A custom storefront built using Hydrogen, Shopify's Headless Framework. Queries product data through GraphQL to be able to set up campaigns with deadlines and funding goals.",
    technologies: "Remix, GraphQL, TailwindCSS, GSAP",
    createdAt: "January 2023",
    liveDemo: "https://blankmod.com/",
  },
];

export default function Projects() {
  const containerRef = useRef(null);
  const { setPrimaryBackground, setSecondaryBackground } = useBackgroundColor();
  useGSAP(() => {
    if (containerRef.current) {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "225 bottom",
        end: "bottom center",
        onEnter: () => {
          setSecondaryBackground();
        },
        onEnterBack: () => {
          setSecondaryBackground();
        },
        onLeave: () => {
          setPrimaryBackground();
        },
        onLeaveBack: () => {
          setPrimaryBackground();
        },
      });
    }
  }, [containerRef]);
  const reversed = [...projectData].reverse();

  return (
    <div className="py-6 sm:py-8 md:py-10" ref={containerRef}>
      <div className="mx-auto flex w-10/12 max-w-[1400px] flex-col gap-2 sm:gap-4 lg:gap-6">
        <Header text={"Projects"} isBlack={true} />
        <div className="flex flex-col gap-7 sm:grid sm:grid-cols-2 sm:gap-4 md:gap-5 xl:grid-cols-3 xl:gap-9">
          {reversed.map((project, index) => (
            <Project index={index} project={project} key={project.key} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Project = ({ project }) => {
  const {
    title,
    description,
    technologies,
    createdAt,
    github,
    liveDemo,
    image,
  } = project;

  /*   const projectRef = useRef(null);
  useGSAP(() => {
    if (projectRef.current) {
      ScrollTrigger.create({
        trigger: projectRef.current,
        start: "center center",
        onEnter: () => {
          setSecondaryBackground();
        },
      });
    }
  }, [projectRef]); */

  return (
    <div
      className="project flex flex-col overflow-hidden rounded-xl"
      /*      ref={index === 0 ? projectRef : null} */
    >
      <img
        src={image}
        alt="Kirby Shopping Cart"
        className="border-b-2 border-black"
      />
      <div className="flex flex-grow bg-white ">
        <div className="mx-auto flex flex-grow flex-col flex-wrap justify-between px-3 py-3 text-left 2xl:px-6">
          <h1 className="text-center text-4xl uppercase text-black">{title}</h1>
          <div className="flex flex-col gap-1">
            <h1 className="text-center text-lg leading-5 lg:text-xl lg:leading-6">
              {description}
            </h1>
            <p className="text-center text-lg leading-5 lg:text-xl lg:leading-6">
              Technologies: {technologies}
            </p>
            <p className="text-center text-lg uppercase text-red-600 lg:text-xl">
              {createdAt}
            </p>
          </div>

          <div className="flex flex-col justify-center gap-2 pt-2 text-center sm:flex-row">
            {github && liveDemo ? (
              <>
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border-2 border-black bg-red-700 px-2 py-1 text-xl uppercase text-white transition-all hover:bg-black hover:text-white md:px-4"
                >
                  View Code
                </a>
              </>
            ) : (
              <>
                <p className="cursor-not-allowed rounded-lg border-2 bg-black px-2 py-1 text-2xl uppercase text-white md:px-4">
                  Private
                </p>
              </>
            )}
            {liveDemo && (
              <a
                href={liveDemo}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border-2 border-black px-2 py-1 text-xl uppercase transition-all hover:bg-black hover:text-white md:px-4"
              >
                Live Preview
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
