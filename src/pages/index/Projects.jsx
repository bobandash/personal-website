import { v4 as uuid } from "uuid";
import Section from "./components/Section";
import blog1 from "../../assets/projects/blog1.png";
import blog2 from "../../assets/projects/blog2.png";
import linkout1 from "../../assets/projects/linkout1.png";
import linkout2 from "../../assets/projects/linkout2.png";
import blankmod1 from "../../assets/projects/blankmod1.png";
import blankmod2 from "../../assets/projects/blankmod2.png";
import kirby1 from "../../assets/projects/kirby1.png";
import kirby2 from "../../assets/projects/kirby2.png";

const projectData = [
  {
    key: uuid(),
    title: "Kirby Shop",
    about: "Full-Stack Themed eCommerce Site.",
    image1: kirby1,
    image2: kirby2,
    description:
      "Users can view product pages and add products to their cart. Store administrators can perform CRUD operations on products on the admin site.",
    technologies: "MERN, Pug, CSS",
    createdAt: "November 2023",
    github: "https://github.com/bobandash/kirby-shopping-cart",
    liveDemo: "https://shopkirby.netlify.app/",
  },
  {
    key: uuid(),
    title: "Joonhee's Blog",
    image1: blog1,
    image2: blog2,
    about: "Full-stack blog for my friend serving in the Peace Corps.",
    description:
      "Consists of an admin site (where the admin can perform CRUD operations with posts and comments) and a user site for users to read and comment on posts.",
    technologies: "MERN, Typescript, AWS S3, CSS",
    createdAt: "December 2023",
    github: "https://github.com/bobandash/joonhee-blog",
    liveDemo: "https://www.joonhee.xyz",
  },

  {
    key: uuid(),
    title: "Linkout",
    about: "Real-time chat application for users to meet their community.",
    image1: linkout1,
    image2: linkout2,
    description:
      "Users are able to join, create, and message in communities, direct message other users, customize their profile, and more.",
    technologies: "MERN, Typescript, AWS S3, TailwindCSS, Socket.io, JWT",
    createdAt: "December 2023",
    github: "https://github.com/bobandash/linkout",
    liveDemo: "https://linkingout.netlify.app/",
  },
  {
    key: uuid(),
    title: "BlankMod",
    image1: blankmod1,
    image2: blankmod2,
    about: "eCommerce store that manufactures and sells merch for IPs",
    description:
      "With Hydrogen, Shopify's Headless Framework, BlankMod queries data through GraphQL to be able to set up campaigns with deadlines and funding goals.",
    technologies: "Remix, GraphQL, TailwindCSS, GSAP",
    createdAt: "January 2023",
    liveDemo: "https://blankmod.com/",
  },
];

export default function Projects() {
  const reversed = [...projectData].reverse();

  return (
    <section>
      {reversed.map((project, index) => {
        const isPrimary = index % 2 === 0;

        {
          return (
            <ProjectSection
              project={project}
              key={project.key}
              isPrimary={isPrimary}
            />
          );
        }
      })}
    </section>
  );
}

const ProjectSection = ({ project, isPrimary }) => {
  const {
    title,
    about,
    description,
    technologies,
    github,
    liveDemo,
    image1,
    image2,
  } = project;

  const textIsBlack = !isPrimary;

  return (
    <Section isPrimary={isPrimary}>
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-7 lg:grid lg:grid-cols-2 lg:gap-16">
        <Images image1={image1} image2={image2} title={title} />
        <div className="flex flex-col gap-2 md:justify-center md:gap-3 lg:gap-5">
          <Header text={title} isBlack={textIsBlack} />
          <About isBlack={textIsBlack} text={about} />
          <Description isBlack={textIsBlack} text={description} />
          <Technologies isBlack={textIsBlack} text={technologies} />
          <ExternalLinks github={github} liveDemo={liveDemo} />
        </div>
      </div>
    </Section>
  );
};

function Header({ text, isBlack, isMobile, isDesktop }) {
  return (
    <h1
      className={`text-center text-4xl font-bold uppercase underline sm:text-5xl md:text-left lg:text-6xl ${isBlack ? "text-black" : "text-white"} ${isMobile && "lg:hidden"} ${isDesktop && "hidden lg:block"}`}
    >
      {text}
    </h1>
  );
}

function Images({ image1, image2, title }) {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-4">
      <div>
        <img
          src={image1}
          alt={`${title} primary image`}
          className="project mx-auto block rounded-lg lg:inline lg:text-left"
        />
      </div>
      <div className="hidden lg:block">
        <img
          src={image2}
          alt={`${title} secondary image`}
          className="project rounded-lg"
        />
      </div>
    </div>
  );
}

function About({ isBlack, text }) {
  return (
    <p
      className={`font-small text-2xl font-bold md:text-left lg:text-left lg:text-3xl ${isBlack ? "text-black" : "text-white"}`}
    >
      {text}
    </p>
  );
}

function Description({ isBlack, text }) {
  return (
    <p
      className={`font-small text-2xl ${isBlack ? "text-black" : "text-white"} hidden md:flex`}
    >
      {text}
    </p>
  );
}

function Technologies({ isBlack, text }) {
  return (
    <div>
      <p
        className={`font-small text-2xl font-bold ${isBlack ? "text-black" : "text-white"}`}
      >
        Built With:
      </p>
      <p
        className={`font-small text-2xl ${isBlack ? "text-black" : "text-white"}`}
      >
        {text}
      </p>
    </div>
  );
}

function ExternalLinks({ github, liveDemo }) {
  return (
    <div className="flex gap-2 md:flex-row">
      {github && liveDemo ? (
        <>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="font-small rounded-lg border-2 border-black bg-red-700 px-2 py-1 text-xl uppercase text-white transition-all hover:bg-black hover:text-white md:px-4"
          >
            View Code
          </a>
        </>
      ) : (
        <>
          <p className="font-small cursor-not-allowed rounded-lg border-2 border-black bg-red-700 px-2 py-1 text-xl uppercase text-white hover:text-white md:px-4">
            Private Repo
          </p>
        </>
      )}
      {liveDemo && (
        <a
          href={liveDemo}
          target="_blank"
          rel="noreferrer"
          className="font-small rounded-lg border-2 border-black bg-white px-2 py-1 text-xl uppercase transition-all hover:bg-black hover:text-white md:px-4"
        >
          Live Preview
        </a>
      )}
    </div>
  );
}
