
import './App.css';
import Home from "./PortfolioContainer/Home/Home"
import About from './PortfolioContainer/AboutMe/About';

import Navbar from './Navbar/Navbar';

import Homep from './PortfolioContainer/Project/Homep';
import Contact from './PortfolioContainer/ContactMe/Contect';
import GithubStats from './PortfolioContainer/Github/Github';
import TechSkills from './PortfolioContainer/Skill/Skill';
import Footer from './PortfolioContainer/Footer/Footer';



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
