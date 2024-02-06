import "./App.css";
import LandingScreen from "./pages/index/LandingScreen";
import ToolKit from "./pages/index/Toolkit";
import Projects from "./pages/index/Projects";
import Connect from "./pages/index/Connect";
import BodyContainer from "./pages/index/BodyContainer";
import AboutMe from "./pages/index/AboutMe";

function App() {
  return (
    <BodyContainer>
      <LandingScreen />
      <AboutMe />
      <Projects />
      <ToolKit />
      <Connect />
    </BodyContainer>
  );
}

export default App;
