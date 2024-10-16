import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import img from "../../assets/profile.jpeg"
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src={img}
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              I possess a robust mastery of web development fundamentals, including HTML, CSS, and JavaScript, enabling me to craft dynamic and responsive web applications with ease. My expertise extends to modern development tools and frameworks, which I skillfully utilize to create scalable and high-performance applications that stand out in today's digital landscape.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
