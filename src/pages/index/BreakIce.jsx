import { Header } from "./components/Header";

// TO-DO: learn canvas to do this in a less hacky way
/* eslint-disable react/no-unescaped-entities */
const GetInTouch = () => {
  return (
    <section className="py-4 md:py-6">
      <div className="mx-auto flex w-10/12 flex-col gap-2 sm:gap-4 lg:gap-6">
        <Header text={"Connect"} />
        <div className="flex flex-row justify-center gap-5">
          <a
            href="mailto:brucehsu1126@gmail.com"
            className="project flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-white p-3 text-2xl text-white sm:h-16 sm:w-16 sm:text-4xl"
          >
            <i className="ri-mail-line block text-black"></i>
          </a>
          <a
            href="https://www.github.com/bobandash"
            target="_blank"
            className="project flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-white p-3 text-2xl text-white sm:h-16 sm:w-16 sm:text-4xl"
            rel="noreferrer"
          >
            <i className="ri-github-fill block text-black"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/brucehsu1126"
            target="_blank"
            className="project flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-white p-3 text-2xl text-black sm:h-16 sm:w-16 sm:text-4xl"
            rel="noreferrer"
          >
            <i className="ri-linkedin-box-fill block"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
