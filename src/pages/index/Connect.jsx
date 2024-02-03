// TO-DO: learn canvas to do this in a less hacky way
/* eslint-disable react/no-unescaped-entities */
const GetInTouch = () => {
  return (
    <section className="flex h-screen items-center py-4 sm:w-screen md:py-6">
      <div className="mx-auto flex w-10/12 max-w-[800px] flex-col items-center justify-center gap-5 sm:gap-10">
        <h1 className="font-big text-center text-4xl font-bold uppercase sm:text-6xl lg:text-7xl">
          Let's Build The Future Together.
        </h1>
        <Icons />
      </div>
    </section>
  );
};

const Icons = () => {
  return (
    <>
      <div className="flex flex-row justify-center gap-5 md:gap-10">
        <a
          href="mailto:brucehsu1126@ucla.edu"
          className="pushable"
          target="_blank"
          rel="noreferrer"
        >
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front">
            <i className="ri-mail-line block text-2xl text-black sm:text-3xl md:text-5xl"></i>
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
            <i className="ri-github-fill block text-2xl text-black sm:text-3xl md:text-5xl"></i>
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
            <i className="ri-linkedin-box-fill block text-2xl text-black sm:text-3xl md:text-5xl"></i>
          </span>
        </a>
        <a
          href="https://www.youtube.com/@brucecreates"
          className="pushable hidden sm:inline"
          target="_blank"
          rel="noreferrer"
        >
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front">
            <i className="ri-youtube-fill block text-2xl text-black sm:text-3xl md:text-5xl"></i>
          </span>
        </a>
      </div>
    </>
  );
};

export default GetInTouch;
