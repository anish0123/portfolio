import About from "./components/About";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import Project from "./components/Project";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <About />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
