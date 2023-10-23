import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/features-about.css";
import section1Img from "../assets/Team-amico.png";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
// import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";

const About = () => {
  return (
    <>
      <Header />

      <div className="about-container">
        <div className="holder">
          {/* Tag line */}
          <div className="tag-line">
            <h1 id="about-heading">
              Get to Know Us
              <br />
              Discover Our Story and Mission
            </h1>
            <p>
              Meet our team, the people behind our success. Simplifying lives
              through our vision for a better future.
            </p>
          </div>
          {/* Section 1 */}
          <div className="section1">
            <div className="row">
              <div className="col section-desc">
                <p className="medium">MEET THE HEART OF OUR ORGANIZATION</p>
                <p className="bold">Our Dedicated Team</p>
                <p className="regular">
                  OrganizeMe was founded by three students of KodeGo University
                  Of The Philippines
                </p>
              </div>
              {/* <div className="col section-img-container"> */}
              <img
                className="section-img"
                src={section1Img}
                alt="Celebration"
              />
              {/* </div> */}
            </div>
          </div>
          {/* Section 2 */}
          <div className="section2">
            <div className="col-md-12">
              <q className="regular">
                Our task manager app is designed to simplify your life by
                helping you organize your tasks, set priorities, and stay on top
                of your to-do lists with ease. With user-friendly features and a
                clean interface, we`re here to make task management a breeze,
                ensuring you can focus on what matters most in your life.
              </q>
              <p className="pt-3 Author">- OrganizeMe</p>
            </div>
          </div>
          {/* About card */}
          <div className="output">
            <div className="card bg">
              <div className="card-body-about">
                <img src={partner1} alt="B1 IMG" />
                <p>Peter John Reyes</p>
              </div>
            </div>
            <div className="card bg">
              <div className="card-body-about">
                <img src={partner3} alt="JP IMG" />
                <p>Roben Matimtim</p>
              </div>
            </div>
            <div className="card bg">
              <div className="card-body-about">
                <img src={partner2} alt="BEN IMG" />
                <p>John Patrick DeClaro</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
