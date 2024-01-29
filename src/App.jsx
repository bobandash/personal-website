import "./App.css";
import LandingScreen from "./pages/index/LandingScreen";
import ToolKit from "./pages/index/Toolkit";
import Projects from "./pages/index/Projects";
import BreakIce from "./pages/index/BreakIce";
import BodyContainer from "./pages/index/BodyContainer";
import Copyright from "./pages/index/Copyright";

function App() {
  return (
    <BodyContainer>
      <LandingScreen />
      <Projects />
      <ToolKit />
      <BreakIce />
      <Copyright />
    </BodyContainer>
  );
}

export default App;
