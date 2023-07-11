import React, { useEffect } from 'react'
import "./Project.css"
import project1 from "./Screenshot 2022-12-09 174935.png"
import project2 from "./prject2.png"
import project3 from "./project3.png"
import project4 from "./Project4.png"
import ReactGA from 'react-ga';
export default function Project() {
    useEffect(()=>{
        ReactGA.pageview(window.location.pathname)
     },[])
  return (
    <div className='project_main'  id="projects">
        <div className='project_heading'>
        <h1 style={{fontFamily: "Poppins Bold",textAlign:"center",color:"white"}}>
           <span style={{fontFamily: "Poppins Bold",color: "#e74d06"}}>P</span>roject
        </h1>
        <p style={{textAlign:"center",fontSize:"16px",fontFamily: "Poppins SemiBold",color:"white"}}>My Work</p>
      
        </div>

        <div className='project'>

          <div  className='project_div project-card' >
            <div className='pro_imag'>
            <a  href='https://beautyqueen0.netlify.app/' target="_blank"><img className='img' src={project3} alt="Project3"/></a>
            
            </div>
            <h4 className='img_heading project-title' >BeautyBebo-Clone</h4>
            <h4 style={{fontSize:"20px",fontFamily: "Poppins SemiBold",marginTop:"20px"}}>Teach-Stack</h4>
                <p style={{fontSize:"18px"}} class="project-tech-stack">React | Redux |Chakra-UI |NodeJs | ExpressJs | MongoDb-Atlas</p>
                <h4 style={{fontSize:"20px",fontFamily: "Poppins SemiBold"}}>Description</h4>
                <p style={{fontSize:"18px"}} class="project-description"
>Beautyqueen is an e-commerce website for Makeup, Skin care, Hair care, Personal care, Mom and Baby care products.</p>
                <div className='bt'>
                    <a href='https://github.com/sujeetcoder/friendly-stage-2043' target="_blank" className='bt_h project-github-link'><button>Source Code</button></a>
                    <a href='https://beautyqueen0.netlify.app/' target="_blank" className='project-deployed-link'><button className='bt_h'>Web View</button></a>
                </div>
            </div>



            <div className='project_div project-card'>
            <div className='pro_imag'>
            <a href='https://enchanting-profiterole-23dc48.netlify.app/' target="_blank"><img className='img' src={project1} alt="Project1"/></a>
                
            </div>
                <h4 className='img_heading project-title'>Calendy-Clone</h4>
                <h4 style={{fontSize:"20px",fontFamily: "Poppins SemiBold",marginTop:"20px"}}>Teach-Stack</h4>
                <p style={{fontSize:"18px"}} class="project-tech-stack">HTML | CSS | JavaScript</p>
                <h4 style={{fontSize:"20px",fontFamily: "Poppins SemiBold"}}>Description</h4>
                <p style={{fontSize:"18px"}} class="project-description">It is communication platform
                Calendly is your scheduling automation platform for eliminating the back-and-forth emails for finding the perfect time — and so much more.
 </p>
                <div className='bt'>
                    <a href='https://github.com/Rohit-world/greedy-roof-9177'target="_blank"><button className='bt_h project-github-link'>Source Code</button></a>
                    <a href='https://enchanting-profiterole-23dc48.netlify.app/' target="_blank" className='project-deployed-link'><button className='bt_h'>Web View</button></a>
                </div>
            </div>
            <div className='project_div project-card' >
            <div className='pro_imag'>
            <a href='https://mellow-taiyaki-a38052.netlify.app/' target="_blank"><img className='img' src={project2} alt="Project2" /></a>
            
            </div>
            <h4 className='img_heading project-title' >Anthropologie -Clone</h4>
            <h4 style={{fontSize:"20px",fontFamily: "Poppins SemiBold",marginTop:"20px"}}>Teach-Stack</h4>
                <p style={{fontSize:"18px"}} class="project-tech-stack">React | Chakra-ui | JavaScript | HTML | CSS </p>
                <h4 style={{fontSize:"20px",fontFamily: "Poppins SemiBold"}}>Description</h4>
                <p style={{fontSize:"18px"}} class="project-description" >Anthropologi is an e-commerce website for
clothing, jewelry, home furniture, decoration,
beauty products, and gifts.</p><br></br>
                <div className='bt'>
                    <a href='https://github.com/mohdashiq18/horrible-twist-9890/tree/main/horrible-twist-9890' target="_blank"><button className='bt_h project-github-link'>Source Code</button></a>
                    <a href='https://mellow-taiyaki-a38052.netlify.app/' target="_blank" className='project-deployed-link'><button className='bt_h'>Web View</button></a>
                </div>
            </div>
            

            <div  className='project_div project-card'>
            <div className='pro_imag'>
            <a href='https://shubhyatra.netlify.app/' target="_blank"><img className='img' src={project4} alt="Project3"/></a>
            
            </div>
                
           <h4 className='img_heading project-title' >Makemytrip-Clone</h4>
            <h4 style={{fontSize:"20px",fontFamily: "Poppins SemiBold",marginTop:"20px"}}>Teach-Stack</h4>
                <p style={{fontSize:"18px"}} class="project-tech-stack" >React | Chakra-ui | MongoDB Atlas 
                 | Express | NodeJs | Nodemon | Bcrypt</p>
                <h4 style={{fontSize:"20px",fontFamily: "Poppins SemiBold"}}>Description</h4>
                <p style={{fontSize:"18px"}} class="project-description">SubhYatra is an online travel company .It provides online travel services including airline tickets, hotel reservations, train, and bus tickets.</p>
                <div className='bt'>
                    <a href='https://github.com/vaibhav-mougha/vacuous-quartz-2667' target="_blank"><button className='bt_h project-github-link'>Source Code</button></a>
                    <a href='https://shubhyatra.netlify.app/' target="_blank" className='project-deployed-link'><button className='bt_h'>Web View</button></a>
                </div>
            </div>
        </div>

    </div>
  )
}
