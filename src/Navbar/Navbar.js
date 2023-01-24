import React , {useEffect} from 'react'
import './Navbar.css';

import $ from 'jquery';
import { Link } from 'react-scroll';
import Ashiq from "./Ashiq.png"
const Navbar = () => {

  function animation(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {
    
    animation();
    $(window).on('resize', function(){
      setTimeout(function(){ animation(); }, 500);
    });
    
  }, []);
  const handleResume=()=>{
    window.open("https://drive.google.com/file/d/1ixjVZIB4taCtiB-EitAwQvr1hhwBWUW0/view?usp=sharing","_blank","noopener","noreferrer")
  }

  return (
  <nav className="navbar navbar-expand-lg navbar-mainbg">
    
      <Link className="navbar-brand navbar-logo" to="/" exact>
      <img src={Ashiq} style={{width:'150px',height:"60px",marginLeft:"10px"}}/>
      </Link>
    
    
      <button 
        className="navbar-toggler"
        onClick={ function(){
          setTimeout(function(){ animation(); });
        }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>
 
      <div 
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            
            <li className="nav-item active">
              <Link className="nav-link" to="profile" smooth={true} duration={1000} offset={-100} spy={true} exact>
                <i 
                className="fas fa-tachometer-alt">
                </i>Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="about" smooth={true} duration={1000} offset={-100} spy={true} exact>
                <i 
                className="far fa-address-book">
                </i>About
              </Link> 
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="skill" smooth={true} duration={1000} offset={-100} spy={true} exact>
                <i 
                className="far fa-clone">
                </i>Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Project" smooth={true} duration={1000} offset={-100} spy={true} exact>
                <i 
                className="far fa-chart-bar">
                </i>Project
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact" smooth={true} duration={1000} offset={-100} spy={true} exact>
                <i 
                className="far fa-copy">
                </i>Contact
              </Link>
            </li>
            <li onClick={handleResume}>
            <a href="Resume.pdf" onClick={handleResume}  download="Mohd-Ashique-Resume.pdf" target="_blank">
              Get Resume
            </a>
            </li>
        </ul>
      </div>
  </nav>
  )
}
export default Navbar;