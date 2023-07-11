
import './App.css';
import Home from "./PortfolioContainer/Home/Home"
import About from './PortfolioContainer/AboutMe/About';

import Navbar from './Navbar/Navbar';
import ReactGA from 'react-ga';
import Homep from './PortfolioContainer/Project/Homep';
import Contact from './PortfolioContainer/ContactMe/Contect';
import GithubStats from './PortfolioContainer/Github/Github';
import TechSkills from './PortfolioContainer/Skill/Skill';
import Footer from './PortfolioContainer/Footer/Footer';
const TRACKING_ID="G-B993DZLZ15"
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Home/>
     <About/>
    <TechSkills/>
    <Homep/>
    <GithubStats/>
    <Contact/>
    <Footer/>

    
    </div>
  );
}

export default App;
