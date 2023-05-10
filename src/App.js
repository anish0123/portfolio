import About from "./components/About";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <About />
    </div>
  );
};

export default App;
