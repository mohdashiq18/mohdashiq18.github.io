import React from 'react'
import "./Project.css"
import project1 from "./Screenshot 2022-12-09 174935.png"
import project2 from "./prject2.png"
import project3 from "./project3.png"
export default function Project() {
  return (
    <div className='project_main' id="Project">
        <div className='project_heading'>
        <h1 style={{fontFamily: "Poppins Bold",textAlign:"center",color:"white"}}>
           <span style={{fontFamily: "Poppins Bold",color: "#e74d06"}}>P</span>roject
        </h1>
        <p style={{textAlign:"center",fontSize:"16px",fontFamily: "Poppins SemiBold",color:"white"}}>My Work</p>
      
        </div>

        <div className='project'>
            <div className='project_div'>
                <a href='https://enchanting-profiterole-23dc48.netlify.app/' target="_blank"><img className='img' src={project1} alt="Project1"/></a>
                <h4 className='img_heading'>Calendy-Clone</h4>
                <h4 style={{fontSize:"16px",fontFamily: "Poppins SemiBold",marginTop:"8px"}}>Teach-Stack</h4>
                <p >HTML | CSS | JavaScript</p>
                <h4 style={{fontSize:"15px",fontFamily: "Poppins SemiBold"}}>Description</h4>
                <p >It is develops a business communication platform
used for teams to schedule, prepare and follow up
on external meetings
 </p>
                <div className='bt'>
                    <a href='https://github.com/Rohit-world/greedy-roof-9177'target="_blank"><button>Source Code</button></a>
                    <a href='https://enchanting-profiterole-23dc48.netlify.app/' target="_blank"><button>Web View</button></a>
                </div>
            </div>
            <div className='project_div' >
            <a href='https://mellow-taiyaki-a38052.netlify.app/' target="_blank"><img className='img' src={project2} alt="Project2" /></a>
            <h4 className='img_heading' >Anthropologie -Clone</h4>
            <h4 style={{fontSize:"16px",fontFamily: "Poppins SemiBold",marginTop:"8px"}}>Teach-Stack</h4>
                <p >React | Chakra-ui </p>
                <h4 style={{fontSize:"15px",fontFamily: "Poppins SemiBold"}}>Description</h4>
                <p >Anthropologi is an e-commerce website for
clothing, jewelry, home furniture, decoration,
beauty products, and gifts.</p>
                <div className='bt'>
                    <a href='https://github.com/mohdashiq18/horrible-twist-9890/tree/main/horrible-twist-9890' target="_blank"><button>Source Code</button></a>
                    <a href='https://mellow-taiyaki-a38052.netlify.app/' target="_blank"><button>Web View</button></a>
                </div>
            </div>
            <div  className='project_div'>
            <a href='https://animated-vacherin-157856.netlify.app/'><img className='img' src={project3} alt="Project3"/></a>
            <h4 className='img_heading' >Milaap-Clone</h4>
            <h4 style={{fontSize:"16px",fontFamily: "Poppins SemiBold",marginTop:"8px"}}>Teach-Stack</h4>
                <p >React | Chakra-ui</p>
                <h4 style={{fontSize:"15px",fontFamily: "Poppins SemiBold"}}>Description</h4>
                <p >Milaap app - fundraise and donate seamlessly! Set up and manage your fundraiser or donate to different causes from your mobile at anytime and from anywhere.</p>
                <div className='bt'>
                    <a href='https://github.com/mohdashiq18/human-bee-8845/tree/main/milaap' target="_blank"><button>Source Code</button></a>
                    <a href='https://animated-vacherin-157856.netlify.app/' target="_blank"><button>Web View</button></a>
                </div>
            </div>
        </div>

    </div>
  )
}
