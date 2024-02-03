import { useRef } from "react";

const BodyContainer = ({ children }) => {
  const containerRef = useRef(null);
  return (
    <div
      className="flex flex-col sm:flex-row sm:overflow-x-auto"
      ref={containerRef}
    >
      {children}
    </div>
  );
};

export default BodyContainer;
