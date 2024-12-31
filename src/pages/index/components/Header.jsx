import { useCallback, useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToElement = useCallback((event, id, padding = 0) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const targetPosition =
        element.getBoundingClientRect().top + window.scrollY - padding;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  }, []);

  return (
    <header
      className={`${isScrolled ? `bg-black py-5` : `bg-primary py-6`} fixed top-0 z-10 hidden w-full items-center font-bold text-white transition-all duration-300 ease-in-out lg:flex`}
    >
      <div className="mx-auto flex w-10/12 max-w-[1600px] justify-between text-5xl">
        <div>
          <a
            href="#home"
            onClick={(e) => {
              scrollToElement(e, "home", 80);
            }}
          >
            BH
          </a>
        </div>
        <ul className="flex list-none items-center gap-7 text-xl">
          <li>
            <a
              href="#about"
              onClick={(e) => {
                scrollToElement(e, "about", 80);
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => {
                scrollToElement(e, "projects", 80);
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#toolkit"
              onClick={(e) => {
                scrollToElement(e, "toolkit", 80);
              }}
            >
              ToolKit
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                scrollToElement(e, "contact", 0);
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
