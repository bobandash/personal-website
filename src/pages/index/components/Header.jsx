export function Header({ text, isBlack }) {
  return (
    <h1
      className={`heading mb-1 text-center text-5xl uppercase text-black lg:text-6xl ${isBlack ? "black-heading border-black text-black" : "white-heading z-10 border-white text-white"}`}
    >
      {text}
    </h1>
  );
}
