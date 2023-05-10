import About from "./components/About";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import Project from "./components/Project";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <About />
      <Project />
    </div>
  );
};

export default App;
