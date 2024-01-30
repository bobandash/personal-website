import { Header } from "./components/Header";

import Waldo from "../../assets/projects/waldo.png";
import MemoryGame from "../../assets/projects/memory_game.png";
import KirbyShoppingCart from "../../assets/projects/kirby_shopping_cart.png";
import Blog from "../../assets/projects/blog.png";
import LinkOut from "../../assets/projects/linkout.png";
import BlankMod from "../../assets/projects/blankmod.png";
import { v4 as uuid } from "uuid";
import { useRef } from "react";

const projectData = [
  {
    key: uuid(),
    title: "Memory Game",
    image: MemoryGame,
    description:
      "A Pokemon themed game where users select cards that are not duplicates each round. Each difficulty has a number of cards needed to win the game.",
    technologies: "ReactJS, CSS",
    createdAt: "August 2023",
    github: "https://github.com/bobandash/pokemon-memory-game",
    liveDemo: "https://pokemon-memory-game-finished.netlify.app/",
  },
  {
    key: uuid(),
    title: "Kirby Store",
    image: KirbyShoppingCart,
    description:
      "A Kirby Themed E-Commerce Site that allows users to view product pages and add products to their cart. Store administrators can perform CRUD operations on products on the admin site.",
    technologies: "MERN Stack, Pug, CSS",
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
      "A full stack blog  for my friend serving in the Peace Corps in Kosovo. Consists of an admin site (where the admin can perform CRUD operations with posts and comments) and a user site for users to read posts.",
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
      "A real-time chat application where users can join/create communities, update their profile, message other users and communities.",
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
  const reversed = [...projectData].reverse();

  return (
    <div className="py-6 sm:py-8 md:py-10" ref={containerRef}>
      <div className="mx-auto flex w-10/12 max-w-[1400px] flex-col gap-2 sm:gap-4 lg:gap-6">
        <Header text={"Featured Projects"} isDesktop={true} />
        <Header text={"Projects"} isMobile={true} />
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

  return (
    <div className="project flex flex-col overflow-hidden rounded-xl">
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
                <p className="cursor-not-allowed rounded-lg border-2 border-black bg-red-700 px-2 py-1 text-xl uppercase text-white hover:text-white md:px-4">
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
