import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import "./App.css"

function App(){
    return(
      <>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Contact/>
      </>
    );
}

export default App;

