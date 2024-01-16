import { createContext, useContext, useState, useCallback } from "react";

// Create a context with an initial value
const BackgroundColorContext = createContext({
  backgroundColor: "#292929",
  setSecondaryBackground: () => {},
  setPrimaryBackground: () => {},
});

const BackgroundColorProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState("#000000");

  const setSecondaryBackground = useCallback(() => {
    setBackgroundColor("#C5C6D0");
  }, []);

  const setPrimaryBackground = useCallback(() => {
    setBackgroundColor("#292929");
  }, []);

  return (
    <BackgroundColorContext.Provider
      value={{
        backgroundColor,
        setSecondaryBackground,
        setPrimaryBackground,
      }}
    >
      {children}
    </BackgroundColorContext.Provider>
  );
};

const useBackgroundColor = () => {
  return useContext(BackgroundColorContext);
};

export { BackgroundColorProvider, useBackgroundColor };
