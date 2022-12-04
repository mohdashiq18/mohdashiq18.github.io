import logo from './logo.svg';
import './App.css';
import Home from "./PortfolioContainer/Home/Home"
import About from './PortfolioContainer/AboutMe/About';
import Skill from './PortfolioContainer/Skill/Skill';
function App() {
  return (
    <div className="App">
     <Home/>
     <About/>
    <Skill/>
    </div>
  );
}

export default App;
