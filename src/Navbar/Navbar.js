import React, { useEffect } from "react";
import "./Navbar.css";
import { AiFillHome } from "react-icons/ai";
import $ from "jquery";
import { FaUserAlt, FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";

import { RiProjectorFill } from "react-icons/ri";
import { GoThreeBars, GoBriefcase } from "react-icons/go";
import { ImMail, ImPencil } from "react-icons/im";
const Navbar = () => {
  function animation() {
    var tabsNewAnim = $("#navbarSupportedContent");
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $("#navbarSupportedContent ul li").removeClass("active");
      $(this).addClass("active");
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
    });
  }

  useEffect(() => {
    animation();
    $(window).on("resize", function () {
      setTimeout(function () {
        animation();
      }, 500);
    });
  }, []);
  const handleResume = () => {
    window.open(
      "https://drive.google.com/file/d/1jfsGnW8jMGHd_L5HIvraUDcKsTAIemJD/view?usp=sharing",
      "_blank",
      "noopener",
      "noreferrer"
    );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg" id="nav-menu">
      <div className=".monitor-wrapper.center"></div>
      <div className=".monitor.center"></div>
      <p className="p" >
        Mohd Ashique Full Stack Devlover
      </p>

      <button
        className="navbar-toggler"
        onClick={function () {
          setTimeout(function () {
            animation();
          });
        }}
        id="hambg"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        {<GoThreeBars style={{ color: "white", fontSize: "35px" }} />}
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <li className="nav-item active">
            <Link
              class="nav-link home"
              to="profile"
              smooth={true}
              duration={1000}
              offset={-100}
              spy={true}
              exact
            >
              {
                <AiFillHome
                  style={{
                    marginRight: "2px",
                    marginTop: "-5px",
                    fontSize: "18px",
                  }}
                />
              }
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              class="nav-link about"
              to="about"
              smooth={true}     
              duration={1000}
              offset={-100}
              spy={true}
              exact
            >
              {<FaUserAlt style={{ marginRight: "3px", marginTop: "-5px" }} />}
              About
            </Link>
          </li>
      
          <li className="nav-item">
            <Link
              class="nav-link skills"
              to="skills"
              smooth={true}
              duration={1000}
              offset={-100}
              spy={true}
              exact
            >
              {<ImPencil style={{ marginRight: "3px", marginTop: "-5px" }} />}
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              class="nav-link projects"
              to="projects"
              smooth={true}
              duration={1000}
              offset={-100}
              spy={true}
              exact
            >
              {
                <GoBriefcase
                  style={{
                    marginRight: "3px",
                    marginTop: "-5px",
                    fontSize: "18px",
                  }}
                />
              }
              Project
            </Link>
          </li>
          <li className="nav-item">
            <Link
              class="nav-link contact"
              to="contact"
              smooth={true}
              duration={1000}
              offset={-100}
              spy={true}
              exact
            >
              {
                <ImMail
                  style={{
                    marginRight: "3px",
                    marginTop: "-5px",
                    fontSize: "18px",
                  }}
                />
              }
              Contact
            </Link>
          </li>
          <li onClick={handleResume}>
            <a
              href="Resume.pdf"
              class="nav-link resume"
              onClick={handleResume}
              download="Mohd-Ashique-Resume.pdf"
              target="_blank"
              id="resume-link-1"
            >
              {<FaDownload style={{ marginRight: "3px", marginTop: "-5px" }} />}
              Get Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
