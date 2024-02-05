import "./App.css";
import LandingScreen from "./pages/index/LandingScreen";
import ToolKit from "./pages/index/Toolkit";
import Projects from "./pages/index/Projects";
import Connect from "./pages/index/Connect";
import BodyContainer from "./pages/index/BodyContainer";
import Separator from "./pages/index/components/Separator";
import AboutMe from "./pages/index/AboutMe";

function App() {
  return (
    <BodyContainer>
      <LandingScreen />
      <AboutMe />
      <Separator text={"Projects"} />
      <Projects />
      <Separator text={"Technologies"} />
      <ToolKit />
      <Separator text={"Connect"} />
      <Connect />
    </BodyContainer>
  );
}

export default App;
