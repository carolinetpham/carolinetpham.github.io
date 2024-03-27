import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';

function App() {
  return (
    <div id="App">
      <NavigationBar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
