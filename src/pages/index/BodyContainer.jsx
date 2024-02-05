import { useRef } from "react";

const BodyContainer = ({ children }) => {
  const containerRef = useRef(null);
  return <div ref={containerRef}>{children}</div>;
};

export default BodyContainer;
