// import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/index.css";

import Stack from "react-bootstrap/esm/Stack";
import KodeGo from "../assets/KodeGo.png";
import Figma from "../assets/figma logo.png";
import Github from "../assets/Github.png";
import Google from "../assets/Google.png";
import Youtube from "../assets/Youtube.png";
import Explore1 from "../assets/Around the world-pana 1.png";
import Explore2 from "../assets/Around the world-pana (1) 1.png";

// icons for fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Index() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="row pb-5 landingpage_sec1">
          <div className="">
            <p>Simplifying Life One Task at a Time</p>
          </div>
          <div className="row mb-3 landingpage_main">
            <img
              src="Images/Flat illustrations/landingpage_sec1.png"
              alt="landingpage-image"
            />
          </div>
          <div className="row mb-3 text-center">
            <span className="landing-page-subheading">
              Start your journey on having a simple, easy, and organized life.
              <br></br>
              Organize, prioritize, and achieve more every day.
            </span>
          </div>
          <div className="row text-center">
            <div className="col">
              <button
                type="button"
                className="btn btn-success mx-auto started-btn"
              >
                <a href="/auth/Register">
                  Get Started{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{ color: "#f4f7fa" }}
                  />
                </a>
              </button>
              <i className="whitespace">__</i>
              <a href="/features">
              <button
                type="button"
                className="btn btn-bs-light-border-subtle mx-auto explore-btn"
              >
                Explore
              </button>
              </a>
            </div>
          </div>
        </div>
      </main>
      {/* Testimonial section */}
      <div className="scroll_testimonial">
        <div className="row mb-5">
          <p className="testimonial_header">
            Loved by thousands of users <br />
            All over the World
          </p>
        </div>
        <div className="scroll-container container">
          <div className="scroll-wrapper">
            <div className="review">
              <span className="rating">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
              <p className="comment">
                A genuine game-changer! This ap`s intuitive layout and seamless
                syncing keep my tasks organized, making productivity effortless
                and stress-free.
              </p>
              <p className="customer">- Elon Musk</p>
            </div>
            <div className="review">
              <span className="rating">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
              <p className="comment">
                OrganizeMe transformed my chaotic schedule into a streamlined
                success story. Its simplicity and effectiveness make every task
                a breeze, an essential tool for anyone with a busy life!
              </p>
              <p className="customer">- Mark Zuckerberg</p>
            </div>
            <div className="review">
              <span className="rating">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
              <p className="comment">
                Efficiency at its best! Task management became a breeze with
                this app. Its user-friendly interface and timely reminders are
                invaluable for busy professionals.
              </p>
              <p className="customer">- Bill Gates</p>
            </div>
            <div className="review">
              <span className="rating">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
              <p className="comment">
                Simplicity meets productivity. I adore how this app transformed
                my chaos into order. Managing tasks has never been more
                straightforward and satisfying.
              </p>
              <p className="customer">- Jeff Bezos</p>
            </div>
          </div>
          <div className="scroll-wrapper">
            <div className="review">
              <span className="rating">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
              <p className="comment">
                Task management made elegant. This app`s design and
                functionality are a perfect match. It`s my go-to for staying
                organized and on top of my responsibilities.
              </p>
              <p className="customer">- Steve Jobs</p>
            </div>
            <div className="review">
              <span className="rating">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
              <p className="comment">
                This app embodies productivity. Its intuitive features
                effortlessly enhance my daily routine. I`m more organized and
                focused, thanks to its smart task management.
              </p>
              <p className="customer">- Jack Ma</p>
            </div>
            <div className="review">
              <span className="rating">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
              <p className="comment">
                I`m in awe of this app`s effectiveness. Managing tasks is now
                second nature, thanks to its intuitive design. It`s the secret
                to my enhanced productivity and peace of mind.
              </p>
              <p className="customer">- Oprah Winfrey</p>
            </div>
            <div className="review">
              <span className="rating">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
              <p className="comment">
                With OrganizeMe, every day is a productive day. Its no-nonsense
                approach to task management keeps me on top of my game. Say
                hello to stress-free organization and goodbye to missed
                deadlines!
              </p>
              <p className="customer">- Henry Sy</p>
            </div>
          </div>
        </div>
        <div className="row pb-5 pt-5 Featured">
          <div className="col">
            <p>Featured in:</p>
          </div>
          <div className="col">
            <img src={KodeGo} className="responsive-image1" alt="kodego" />
          </div>
          <div className="col">
            <img src={Figma} className="responsive-image1" alt="figma" />
          </div>
          <div className="col">
            <img src={Github} className="responsive-image1" alt="github" />
          </div>
          <div className="col">
            <img src={Google} className="responsive-image1" alt="google" />
          </div>
          <div className="col">
            <img src={Youtube} className="responsive-image1" alt="youtube" />
          </div>
        </div>
      </div>

      <section className="row mb-5 pt-5 text-center explore-more">
        <Stack>
          <div>
            <img src={Explore1} className="explore-image" alt="ExploreMore" />
          </div>
          <div className="explore-text">
            <p>
              Unlock more possibilities! Dive into our features now. Click here
              to explore: <a href="/features">Explore Features</a>.
            </p>
          </div>
          <div>
            <img src={Explore2} className="explore-image" alt="ExloreMore" />
          </div>
        </Stack>
      </section>
      <Footer />
    </>
  );
}
