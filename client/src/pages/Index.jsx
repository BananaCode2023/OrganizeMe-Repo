
import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../css/index.css'
// icons for fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; 
// icons for iconify
import {Icon} from '@iconify-icon/react'
// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import  { useEffect } from 'react';


export default function Index () {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

      console.log('Component rendered');

    return(
        <>
            <Header />
            <main>
                <div className="row pb-5 landingpage_sec1">
                    <div className="row" >
                        <p>Simplifying Life One Task at a Time</p>
                    </div>
                    <div className="row mb-3 landingpage_main" >
                        <img src="Images/Flat illustrations/landingpage_sec1.png" alt="landingpage-image" />
                    </div>
                    <div className="row mb-3 text-center">
                        <span>Start your journey on having a simple, easy, and organized life.<br></br>
                            Organize, prioritize, and achieve more every day.</span>
                    </div> 
                    <div className="row text-center">
                        <div className="col">
                            <button type="button" className="btn btn-success mx-auto started-btn"><a href="">Get Started <FontAwesomeIcon icon={faArrowRight} style={{color: "#f4f7fa",}} /></a></button>
                            <i className='whitespace'>__</i>
                            <button type="button" className="btn btn-bs-light-border-subtle mx-auto explore-btn">Explore</button>
                        </div>
                    </div>
                </div>
            </main>
            <div className="carousel_testimonial">
                <div className="row mb-5">
                    <p className='testimonial_header'>Loved by thousands of users <br />All over the World</p>
                </div>
                <div id="carousel_flashcards" className="carousel carousel-dark slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval='4000'>
                            <div className=" testimonial-box">                            
                            <div className="review" >
                                <span className="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                                <p className="comment">Excellent service and fast delivery.</p>
                                <p className="customer">- Name</p>
                            </div>
                            <div className="review">
                                <span className="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                                <p className="comment">Excellent service and fast delivery.</p>
                                <p className="customer">- Name</p>
                            </div>
                            <div className="review">
                                <span className="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                                <p className="comment">Excellent service and fast delivery.</p>
                                <p className="customer">- Name</p>
                            </div>
                            <div className="review">
                                <span className="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                                <p className="comment">Excellent service and fast delivery.</p>
                                <p className="customer">- Name</p>
                            </div>
                            <div className="review">
                                <span className="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                                <p className="comment">Excellent service and fast delivery.</p>
                                <p className="customer">- Name</p>
                            </div>
                            </div>
                            
                        </div>
                        <div className="carousel-item" data-bs-interval='3000'>    
                        <div className=" testimonial-box" >                            
                            <div className="review">
                                <span className="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                                <p className="comment">Excellent service and fast delivery.</p>
                                <p className="customer">- Name</p>
                            </div>
                            <div className="review">
                                <span className="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                                <p className="comment">Excellent service and fast delivery.</p>
                                <p className="customer">- Name</p>
                            </div>
                            <div className="review">
                                <span className="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                                <p className="comment">Excellent service and fast delivery.</p>
                                <p className="customer">- Name</p>
                            </div>
                            <div className="review">
                                <span className="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                                <p className="comment">Excellent service and fast delivery.</p>
                                <p className="customer">- Name</p>
                            </div>
                            <div className="review">
                                <span className="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                                <p className="comment">Excellent service and fast delivery.</p>
                                <p className="customer">- Name</p>
                            </div>
                            </div>
                            
                        </div>
                </div>
                <div className="row pb-5 pt-5 Featured">
                    <p>Featured in:</p>
                    <img src="../assets/Featured.png" alt="" />
                </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carousel_flashcards" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carousel_flashcards" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>       
            <section>

                <div className="row mb-5 pt-5 landingpage_sec2">
                        <div className="col" data-aos="fade-up" data-aos-delay='' >
                            <p className='main_subtitle'><Icon icon="foundation:checkbox" color="#232323" />  Stay Organized, Anytime, Anywhere</p>
                            <p className='main_content'>You can create, edit, and organize tasks seamlessly from any device. Your to-do list stays updated wherever you go, thanks to seamless syncing.</p>
                        </div>
                        <div className="col side-image" data-aos="fade-up" data-aos-delay=''>
                            <img src="/Images/Flat illustrations/Work time.gif" className='responsive-image' alt="Side-image" />
                        </div>
                </div>
                <div className="row mb-5 mt-5 landingpage_sec2">
                <div className="col" data-aos="fade-up"  data-aos-delay=''>
                        <p className='main_subtitle'><Icon icon="foundation:checkbox" color="#232323" /> Smart Reminders</p>
                        <p className='main_content'>You can create, edit, and organize tasks seamlessly from any device. Your to-do list stays updated wherever you go, thanks to seamless syncing.</p>
                    </div>
                    <div className="col side-image" data-aos="fade-up"  data-aos-delay=''>
                        <img src="/Images/Flat illustrations/Reminders.gif" className='responsive-image' alt="Side-image" />
                    </div>
                </div>
                <div className="row mb-5 mt-5 landingpage_sec2">
                    <div className="col" data-aos="fade-up"  data-aos-delay='' >
                        <p className='main_subtitle'><Icon icon="foundation:checkbox" color="#232323"  /> Prioritize your Tasks</p>
                        <p className='main_content'>Effortlessly prioritize tasks by urgency and importance using our intuitive drag-and-drop interface. Rearrange tasks instantly and focus on what truly matters.</p>
                    </div>
                    <div className="col side-image" data-aos="fade-up"  data-aos-delay='' >
                        <img src="/Images/Flat illustrations/Prioritise.gif" className='responsive-image' alt="Side-image" />
                    </div>
                </div>
                <div className="row mb5 pt-5 text-center landingpage_sec3" data-aos="fade-up"  data-aos-delay=''>
                    <q className='qoutes'>In the symphony of life, let your tasks find harmony.</q>
                    <p className='author'>-The Ben</p>
                </div>
                <div className="row mb-5">
                    <h1 style={{color: 'red'}}>Road Map on progress</h1>
                </div>
            </section>
            <Footer />
        </>
    )

}
