import React from 'react'

import '../css/footer.css';


const Footer = () => {
  return (
    <>
      <footer>
          <div className="row mb-5 pt-5 footer-top">
            <q>Optimize your day with OrganizeMe! Seamlessly integrate our best productivity app. Your tasks, our technology – organizing made  effortless!</q>
            <div className='text-center'>
              <button type="button" className="btn btn-success mx-auto free-btn"><a href="">Get started for free</a></button>
            </div>
          </div>
          {/* footer-bottom */}
          <div className="row mb-5">
            <div className="col">
              <ul>
                <li><h5>Contact</h5></li>
                <li>+63 921 453 9876</li>
                <li>(043) 321 7654</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li><h5>Quick Links</h5></li>
                <li><a href="/features">Features</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/auth/register">Sign Up</a></li>
              </ul>
            </div>
            <div className="col mb-3 social-media">
                <h5>Social Media</h5>
                <ul className="social-icons">
                    <li><a href="https://www.facebook.com/"><img src="/Images/Icons/facebook.svg" alt="Facebook" /></a></li>
                    <li><a href="https://twitter.com/"><img src="/Images/Icons/twitter.svg" alt="XTwitter" /></a></li>
                    <li><a href="https://www.instagram.com/"><img src="/Images/Icons/instagram.svg" alt="Instagram" /></a></li>
                </ul>
            </div>
            <div className="col">
                <ul>
                  <li><h5>Get in touch</h5></li>
                  <li>Received latest updates and</li>
                  <li>notifications from OrganizeMe Team</li>
                  <li>
                    <form action="">
                      <div className="submit-btn btn-group pt-2" role="group" >
                        <input type="email" className="form-control" id="inputEmail" placeholder='&#9993; Email' />
                        <button type="submit" className="btn btn-success">Submit</button>
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
  )
}

export default Footer