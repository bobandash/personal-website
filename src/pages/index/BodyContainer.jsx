import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useBackgroundColor } from "../../context/BackgroundColorContext";

const BodyContainer = ({ children }) => {
  const containerRef = useRef(null);
  const { backgroundColor } = useBackgroundColor();

  useGSAP(() => {
    gsap.to(containerRef.current, {
      backgroundColor: backgroundColor,
      duration: 1.25,
    });
  }, [backgroundColor]);

  return (
    <div className="bg-primary" ref={containerRef}>
      {children}
    </div>
  );
};

export default BodyContainer;
