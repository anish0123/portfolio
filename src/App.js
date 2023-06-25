import About from "./components/About";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import Contact from "./components/Contact";
import ProjectsArray from "./components/ProjectsArray";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <About />
      <ProjectsArray />
      <Contact />
    </div>
  );
};

export default App;
