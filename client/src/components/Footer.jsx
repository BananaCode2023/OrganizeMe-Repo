// import React from 'react'
import { useState } from "react";
import "../css/footer.css";
import SubscribeModal from "./SubscribeModal";
import {Link} from 'react-router-dom'

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  // Validation process
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.match(emailRegex)) {
      console.log("Email is valid:", email);
      handleClose();
    } else {
      setIsValid(false);
    }
  };

  return (
    <>
      <footer>
        {/* This part will not be displayed as suggested by Team Organizers */}
        {/* <div className="row mb-5 pt-5 footer-top">
            <div className='text-center'>
              <q>Optimize your day with OrganizeMe! Seamlessly integrate our best productivity app. Your tasks, our technology – organizing made  effortless!</q>
              <button type="button" className="btn btn-success mx-auto free-btn"><Link to="">Get started for free</Link></button>
            </div>
          </div> */}
        {/* footer-bottom */}
        <div className="row mb-5 pt-5">
          <div className="col">
            <ul>
              <li>
                <h5>Contact</h5>
              </li>
              <li>+63 921 453 9876</li>
              <li>(043) 321 7654</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>
                <h5>Quick Links</h5>
              </li>
              <li>
                <Link to="/features">Features</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/auth/register">Sign Up</Link>
              </li>
            </ul>
          </div>
          <div className="col mb-3 social-media">
            <h5>Social Media</h5>
            <ul className="social-icons">
              <li>
                <Link to="https://www.facebook.com/">
                  <img src="/Images/Icons/facebook.svg" alt="Facebook" />
                </Link>
              </li>
              <li>
                <Link to="https://twitter.com/">
                  <img src="/Images/Icons/twitter.svg" alt="XTwitter" />
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/">
                  <img src="/Images/Icons/instagram.svg" alt="Instagram" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>
                <h5>Get in touch</h5>
              </li>
              <li>Received latest updates and</li>
              <li>notifications from OrganizeMe Team</li>
              <li>
                <form onSubmit={handleSubmit}>
                  <div className="submit-btn btn-group pt-2" role="group">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail"
                      placeholder="&#9993; Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <SubscribeModal />
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </div>

        <div className="row pb-3 text-center">
          <p>© 2023 OrganizeMe All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
