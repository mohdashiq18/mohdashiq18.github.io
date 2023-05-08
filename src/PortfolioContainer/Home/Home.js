import React from "react"
import Profile from "./Profile"
import Footer from "./Footer/Footer"
import "./Home.css"

import Skill from "../Skill/Skill"
import About from "../AboutMe/About"


 export default function Home(){
    return (
        <div className="home-container" id="home">
         
          <Profile/>
          <Footer/>
          
        
        </div>
    )
 }