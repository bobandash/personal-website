import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Separator = ({ text }) => {
  const container = useRef(null);
  useGSAP(() => {
    const timeline = gsap.timeline({
      /* repeat: -1 */
    });
    timeline.to(container.current, {
      left: "-900px",
      duration: 2,
    });
  }, []);

  return (
    <section className="overflow-hidden bg-[#1f4277]">
      <div
        ref={container}
        className="relative flex flex-row items-center gap-5 py-4"
      >
        <SeparatorPair text={text} />
        <SeparatorText text={text} />
        <SeparatorPair text={text} />
        <SeparatorText text={text} />
        <SeparatorPair text={text} />
        <SeparatorText text={text} />
        <SeparatorPair text={text} />
        {/*         <SeparatorPair text={text} />
        <SeparatorText text={text} />
        <SeparatorPair text={text} />
        <SeparatorText text={text} />
        <SeparatorText text={text} /> */}
        {/* Add more SeparatorPair components as needed */}
      </div>
    </section>
  );
};

function SeparatorPair({ text }) {
  return (
    <div className="flex flex-row items-center gap-5">
      <HorizontalLine />
      <SeparatorText text={text} />
      <HorizontalLine />
    </div>
  );
}

function SeparatorText({ text }) {
  return (
    <h1 className="font-big text-center text-4xl font-bold uppercase text-white sm:text-6xl lg:text-5xl">
      {text}
    </h1>
  );
}

function HorizontalLine() {
  return <div className="my-0 w-12 border-0 border-t-2 border-white sm:w-32" />;
}

export default Separator;
