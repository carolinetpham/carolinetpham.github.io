import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';

function App() {
  return (
    <div id="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
    </div>
  );
}

export default App;
