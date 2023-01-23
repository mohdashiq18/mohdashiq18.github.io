import React from "react";
import { Link } from "react-scroll";
import Typical from "react-typical";
import "./Profile.css";
export default function Profile() {
  return (
    <div className="profile-container" id="profile">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://github.com/mohdashiq18" target="_blank">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://www.instagram.com/_ashiq._ali__/" target="_blank">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/mohd-ashique-91a00b233/" target="_blank">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Mohd Ashique</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Mohd Ashique",
                    2000,
                    "Full Stack Developer",
                    2000,
                    "MERN Stack Developer",
                    2000,
                    "React Developer",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of buliding application with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-option">
            {/* <button className="btn primary-btn"> Hire Me </button> */}
            <Link to="about" smooth={true} duration={1000} offset={-100} spy={true} exact>
              <button className="btn highlighted-btn">About me</button>
              </Link>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
