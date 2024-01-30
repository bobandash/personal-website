export function Header({ text, isMobile, isDesktop }) {
  return (
    <h1
      className={`heading white-heading z-10 mb-1 border-white text-center text-5xl uppercase text-white lg:text-6xl ${isMobile && "md:hidden"} ${isDesktop && "hidden md:block"}`}
    >
      {text}
    </h1>
  );
}
