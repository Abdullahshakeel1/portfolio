import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "./Contact.css";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import contactImg from "../../assets/download.png"
const Contact = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const backend = "https://portfolio-sigma-lyart-48.vercel.app";
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please provide all fields");
        return;
      }
  
      const res = await axios.post(`${backend}/api/v1/portfolio/sendEmail`, {
        name,
        email,
        msg,
      });
  
      if (res.data.success) {
        toast.success(res.data.message);
        setname("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };
  

  return (
    <>
      <div className=" contact" id="contact">
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
         contact us
        </h2>
        <hr/>
        <div className="card  border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed>
                    <img
                      src={contactImg}
                      alt="ocontact"
                      className="image"
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 bgk pt-5 rounded">
              <Rotate>
                <div className="card2 d-flex card border-0 px-4 py-5  bgk">
                  <div className="row">
                    <div className="row">
                      <h6 className="d-flex justify-content-center align-items-center">
                       
                        <BsLinkedin color="white" size={30} className="ms-2" />
                        <BsGithub color="cyan" size={30} className="ms-2" />
                        <BsFacebook color="white" size={30} className="ms-2" />
                      </h6>
                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center text-white">OR</small>
                      <div className="line" />
                    </div>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        className="mb-3 rounded"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        placeholder="Enter Your Email Address"
                        className="mb-3 rounded"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        placeholder="Write your message"
                        className="mb-3 rounded"
                        name="msg"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <button className="button rounded" onClick={handleSubmit}>
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
