import React from 'react'
import "./About.css"
export default function About() {
  return (
    <div className="about-container" id="about">
        <div className='text'  >
        <h1 style={{textAlign:"center",fontFamily: "Poppins Bold"}}>About <span style={{color:"#e74d06",fontFamily: "Poppins Bold"}}>Me</span></h1>
        <h4 style={{textAlign:"center",fontSize:"16px",fontFamily: "Poppins SemiBold"}}>Who I am?</h4>
        </div>
       <div className='perent-about'>
       <div className='about-profile'>
          <div className='profile'>
            <img src='https://avatars.githubusercontent.com/u/107461657?v=4' />
          </div>
          <div style={{padding:"20px"}} className="about-summy">
            <div className='summry' style={{fontFamily:"Poppins ",color:"white"}}>
            Strong in design and integration with intuitive problem-solving skills. Proficient
in HTML, CSS, JavaScript, React, and Redux. Passionate about implementing and
launching new projects. Ability to translate business requirements into technical
solutions. Looking to start a career as a web developer with a reputed firm
driven by technology.

            </div>

            <div className='skill-about'>
              <h5 style={{fontFamily: "Poppins Bold" ,marginTop:"30px",color:"white"}}>Here are a Few Highlights</h5>
              <div style={{display:"flex",gap:"10px",marginTop:"20px"}}><div style={{width:"19px",height:"19px",borderRadius:"50%",backgroundColor:"#ff5823"}}> </div>
              <p style={{fontFamily: "Poppins SemiBold",color:"white"}}>Full Stack Web Developer</p>
              </div>

              <div style={{display:"flex",gap:"10px"}}><div style={{width:"19px",height:"19px",borderRadius:"50%",backgroundColor:"#ff5823"}}> </div>
              <p style={{fontFamily: "Poppins SemiBold",color:"white"}}>Interactive Front End as per the design</p>
              </div>


              <div style={{display:"flex",gap:"10px"}}><div style={{width:"19px",height:"19px",borderRadius:"50%",backgroundColor:"#ff5823"}}> </div>
              <p style={{fontFamily: "Poppins SemiBold",color:"white"}}>HTML, CSS and JavaScript</p>
              </div>


              <div style={{display:"flex",gap:"10px"}}><div style={{width:"19px",height:"19px",borderRadius:"50%",backgroundColor:"#ff5823"}}> </div>
              <p style={{fontFamily: "Poppins SemiBold",color:"white"}}>React and Recat Native</p>
              </div>


              <div style={{display:"flex",gap:"10px"}}><div style={{width:"19px",height:"19px",borderRadius:"50%",backgroundColor:"#ff5823"}}> </div>
              <p style={{fontFamily: "Poppins SemiBold",color:"white"}}>Redux for State Management </p>
              </div>

              <div style={{display:"flex",gap:"10px"}}><div style={{width:"19px",height:"19px",borderRadius:"50%",backgroundColor:"#ff5823"}}> </div>
              <p style={{fontFamily: "Poppins SemiBold",color:"white"}}>Managing database</p>
              </div>
               
            </div>
            <div className="profile-option" style={{marginTop:"20px",justifyContent:"center",display:"flex"}}>
            {/* <button className="btn primary-btn"> Hire Me </button> */}
            <a href="Resume.pdf" download="Mohd-Ashique-Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
          </div>
        </div>
       </div>

    </div>
  )
}
