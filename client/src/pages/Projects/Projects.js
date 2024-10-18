import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
import img1 from "../../assets/xx.PNG"
import img2 from "../../assets/img2.PNG"

const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia a
          odit ab, eligendi cupiditate, minima quasi excepturi modi et quo
          delectus, iusto dolor atque aliquam aspernatur eveniet! Ipsam eum
          nobis omnis id voluptatibus quas eos maxime ipsum facere numquam,
          voluptate qui et animi doloribus nulla eius molestiae unde tempore ad
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-6">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Mern stack</span>
                  <img
                    src={img1}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      E-Shopping Website
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://e-com-full-stack-client.vercel.app"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Mern stack</span>
                  <img
                    src={img2}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">socket io</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                     Chat-Application
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://chat-app-vp7f.vercel.app"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">mern stack</span>
                  <img
                    src={img1}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      E-Shopping Website
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://e-com-full-stack-client.vercel.app"
                  >
                    View
                  </a>
                </div>
              </div>
            </div> */}
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
