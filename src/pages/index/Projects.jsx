import { v4 as uuid } from "uuid";
import blog1 from "../../assets/projects/blog1.png";
import blog2 from "../../assets/projects/blog2.png";
import linkout1 from "../../assets/projects/linkout1.png";
import linkout2 from "../../assets/projects/linkout2.png";
import blankmod1 from "../../assets/projects/blankmod1.png";
import blankmod2 from "../../assets/projects/blankmod2.png";
import kirby1 from "../../assets/projects/kirby1.png";
import kirby2 from "../../assets/projects/kirby2.png";
import blankmodDesktop from "../../assets/projects_desktop/blankmod.png";
import blogDesktop from "../../assets/projects_desktop/blog.png";
import linkoutDesktop from "../../assets/projects_desktop/linkout.png";
import kirbyDesktop from "../../assets/projects_desktop/kirby_shopping_cart.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SectionHeader } from "./components/Header";
import Section from "./components/Section";

const projectData = [
  {
    key: uuid(),
    title: "Kirby Store",
    about: "Full-Stack eCommerce Site",
    desktopImage: kirbyDesktop,
    image1: kirby1,
    image2: kirby2,
    description:
      "Users can view product pages and add products to their cart. Store administrators can perform CRUD operations on products on the admin site.",
    technologies: "ReactJs, MongoDB, ExpressJs, NodeJs, Pug, CSS",
    createdAt: "November 2023",
    github: "https://github.com/bobandash/kirby-shopping-cart",
    liveDemo: "https://shopkirby.netlify.app/",
  },
  {
    key: uuid(),
    title: "Friend's Blog",
    image1: blog1,
    image2: blog2,
    desktopImage: blogDesktop,
    about: "Full-Stack Blog",
    description:
      "Consists of an admin site (where the admin can perform CRUD operations with posts and comments) and a user site for users to read and comment on posts.",
    technologies:
      "ReactJs, MongoDB, ExpressJs, NodeJs, Typescript, AWS S3, CSS",
    createdAt: "December 2023",
    github: "https://github.com/bobandash/joonhee-blog",
    liveDemo: "https://www.joonhee.xyz",
  },

  {
    key: uuid(),
    title: "Linkout",
    about: "Real-Time Chat App",
    image1: linkout1,
    image2: linkout2,
    desktopImage: linkoutDesktop,
    description:
      "Users are able to customize their profile, join, create, and message in communities, become friends with and direct message other users, and more.",
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
    desktopImage: blankmodDesktop,
    about: "Hydrogen eCommerce Site",
    description:
      "Using Hydrogen, Shopify's Headless Framework, BlankMod queries data through GraphQL to be able to set up campaigns with deadlines and funding goals.",
    technologies: "Remix, GraphQL, TailwindCSS, GSAP",
    createdAt: "January 2023",
    liveDemo: "https://blankmod.com/",
  },
];

export default function Projects() {
  const reversed = [...projectData].reverse();

  return (
    <Section isPrimary={true}>
      <SectionHeader text={"Projects"} isBlack={false} />
      {reversed.map((project, index) => {
        {
          if (index !== reversed.length - 1) {
            return (
              <div key={project.key}>
                <ProjectSection project={project} isPrimary={true} />
                <Separator />
              </div>
            );
          }
          return (
            <ProjectSection
              project={project}
              key={project.key}
              isPrimary={true}
            />
          );
        }
      })}
    </Section>
  );
}

const Separator = () => {
  return (
    <div className="bg-primary overflow-hidden">
      <hr className="border-t-2 border-white" />
    </div>
  );
};

const ProjectSection = ({ project, isPrimary }) => {
  const {
    title,
    about,
    description,
    technologies,
    github,
    liveDemo,
    desktopImage,
  } = project;

  const textIsBlack = !isPrimary;
  const projectRef = useRef(null);
  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: projectRef.current,
        start: "center bottom",
      },
    });
    t1.fromTo(
      projectRef.current,
      {
        translateX: "-5%",
        opacity: 0,
      },
      {
        translateX: "0%",
        opacity: 1,
        duration: 1,
      },
    );
  }, []);

  return (
    <div className="pb-6 pt-2 lg:pb-8 lg:pt-4" ref={projectRef}>
      <div className="mb-4">
        <Header text={title} isBlack={textIsBlack} />
        <About isBlack={textIsBlack} text={about} />
      </div>
      <div className="flex flex-col gap-4 md:gap-5 lg:grid lg:grid-cols-2 lg:gap-8 2xl:gap-12">
        <Images desktopImage={desktopImage} title={title} />
        <div className="flex flex-col gap-4 md:justify-center md:gap-3 lg:gap-5 xl:justify-start">
          <Description isBlack={textIsBlack} text={description} />
          <Technologies isBlack={textIsBlack} text={technologies} />
          <ExternalLinks
            github={github}
            liveDemo={liveDemo}
            isBlack={textIsBlack}
          />
        </div>
      </div>
    </div>
  );
};

function Header({ text, isBlack, isMobile, isDesktop }) {
  return (
    <h1
      className={`text-center text-4xl font-bold uppercase sm:text-5xl md:text-left md:text-7xl ${isBlack ? "text-black" : "text-white"} ${isMobile && "lg:hidden"} ${isDesktop && "hidden lg:block"}`}
    >
      {text}
    </h1>
  );
}

function Images({ title, desktopImage }) {
  return (
    <div className="flex items-center">
      <img
        src={desktopImage}
        alt={`${title} desktop image`}
        className="project rounded-xl"
      />
    </div>
  );
}

function About({ isBlack, text }) {
  return (
    <p
      className={`font-small text-center text-xl font-bold sm:text-2xl md:text-left md:text-3xl lg:text-left 2xl:text-4xl ${isBlack ? "text-black opacity-75" : "text-white opacity-75"}`}
    >
      {text}
    </p>
  );
}

function Description({ isBlack, text }) {
  return (
    <div>
      <p
        className={`font-big text-2xl font-bold uppercase md:text-left md:text-2xl lg:text-left 2xl:text-4xl ${isBlack ? "text-black" : "text-white"}`}
      >
        Description:
      </p>
      <p
        className={`font-small text-lg sm:text-xl md:text-left md:text-2xl lg:text-left ${isBlack ? "text-black" : "text-white"}`}
      >
        {text}
      </p>
    </div>
  );
}

function Technologies({ isBlack, text }) {
  return (
    <div>
      <p
        className={`font-big text-2xl font-bold uppercase md:text-left md:text-2xl lg:text-left 2xl:text-4xl ${isBlack ? "text-black" : "text-white"}`}
      >
        Built With:
      </p>
      <p
        className={`font-small text-lg sm:text-xl md:text-left md:text-2xl lg:text-left 2xl:text-2xl ${isBlack ? "text-black" : "text-white"}`}
      >
        {text}
      </p>
    </div>
  );
}

function ExternalLinks({ github, liveDemo, isBlack }) {
  return (
    <div className="flex justify-center gap-5 sm:justify-normal md:flex-row">
      {github && liveDemo ? (
        <>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className={`flex-1 rounded-lg border-2 border-white bg-red-700 px-4 py-2 text-center text-lg font-bold uppercase text-white transition-all hover:bg-white hover:text-black sm:flex-none sm:px-6  md:text-2xl`}
          >
            View Code
          </a>
        </>
      ) : (
        <>
          <a
            className={`flex-1 cursor-not-allowed rounded-lg border-2 border-white bg-red-700 px-4 py-2 text-center text-lg font-bold uppercase text-white sm:flex-none sm:px-6 md:text-2xl`}
          >
            Private
          </a>
        </>
      )}
      {liveDemo && (
        <a
          href={liveDemo}
          target="_blank"
          rel="noreferrer"
          className={`rounded-lg border-2 px-4 py-2 text-center text-lg font-bold uppercase sm:flex-none sm:px-6 md:text-2xl ${isBlack ? "border-black text-black" : "border-white text-white"} flex-1 transition-all hover:bg-white hover:text-black`}
        >
          See it Live
        </a>
      )}
    </div>
  );
}
