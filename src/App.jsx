import "./App.css";
import LandingScreen from "./pages/index/LandingScreen";
import ToolKit from "./pages/index/Toolkit";
import Projects from "./pages/index/Projects";
import Connect from "./pages/index/Connect";
import AboutMe from "./pages/index/AboutMe";
import Header from "./pages/index/components/Header";

function App() {
  return (
    <>
      <Header />
      <LandingScreen />
      <AboutMe />
      <Projects />
      <ToolKit />
      <Connect />
    </>
  );
}

export default App;
