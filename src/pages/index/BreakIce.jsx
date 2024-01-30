import { Header } from "./components/Header";

// TO-DO: learn canvas to do this in a less hacky way
/* eslint-disable react/no-unescaped-entities */
const GetInTouch = () => {
  return (
    <section className="py-4 md:py-6">
      <div className="mx-auto flex w-10/12 flex-col gap-2 sm:gap-4 lg:gap-6">
        <Header text={"Let's Connect"} isDesktop={true} />
        <Header text={"Connect"} isMobile={true} />
        <Icons />
      </div>
    </section>
  );
};

const Icons = () => {
  return (
    <>
      <div className="flex flex-row justify-center gap-5">
        <a
          href="mailto:brucehsu1126@ucla.edu"
          className="pushable"
          target="_blank"
          rel="noreferrer"
        >
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front">
            <i className="ri-mail-line block text-3xl text-black"></i>
          </span>
        </a>
        <a
          href="https://www.github.com/bobandash"
          className="pushable"
          target="_blank"
          rel="noreferrer"
        >
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front">
            <i className="ri-github-fill block text-3xl text-black"></i>
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/brucehsu1126"
          className="pushable"
          target="_blank"
          rel="noreferrer"
        >
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front">
            <i className="ri-linkedin-box-fill block text-3xl text-black"></i>
          </span>
        </a>
      </div>
    </>
  );
};

export default GetInTouch;
