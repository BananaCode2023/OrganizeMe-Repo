// import React from 'react'
// import Header from '../components/Header'

// function Home() {
//   return (
//     <div>
//       <Header />
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <center><h1>HOME PAGE ITO</h1></center>
//     </div>
//   )
// }

// export default Home


import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../css/index.css'
// icons for fontawosome
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
                <div className="row mb-5 landingpage_sec1">
                    <div className="row" >
                        <p>Simplifying Life One Task at a Time</p>
                    </div>
                    <div className="row landingpage_main" >
                        <img src="/Images/Flat illustrations/landingpage_sec1.png" alt="landingpage-image" />
                    </div>
                    <div className="row mb-3 text-center">
                        <span>Start your journey on having a simple, easy, and organized life.<br></br>
                            Organize, prioritize, and achieve more every day.</span>
                    </div>
                    <div className="row text-center">
                        <div className="col">
                            <button type="button" className="btn btn-success mx-auto started-btn"><a href="">Get Started <FontAwesomeIcon icon={faArrowRight} style={{color: "#f4f7fa",}} /></a></button>
                            <i className='whitespace'>__</i>
                            <button type="button" className="btn btn-bs-light-border-subtle mx-auto explore-btn"><a href="">Explore</a></button>
                        </div>
                    </div>
                </div>
            </main>
            <section>
                <div className="row mb-5 mt-5 landingpage_sec2">
                        <div className="col" data-aos="fade-up" data-aos-delay='1000' >
                            <p className='main_subtitle'><Icon icon="foundation:checkbox" color="#232323" />  Stay Organized, Anytime, Anywhere</p>
                            <p className='main_content'>You can create, edit, and organize tasks seamlessly from any device. Your to-do list stays updated wherever you go, thanks to seamless syncing.</p>
                        </div>
                        <div className="col side-image" data-aos="fade-up" data-aos-delay='1000'>
                            <img src="/Images/Flat illustrations/Work time.gif" className='responsive-image' alt="Side-image" />
                        </div>
                </div>
                <div className="row mb-5 mt-5 landingpage_sec2">
                <div className="col" data-aos="fade-up"  data-aos-delay='1500'>
                        <p className='main_subtitle'><Icon icon="foundation:checkbox" color="#232323" /> Smart Reminders</p>
                        <p className='main_content'>You can create, edit, and organize tasks seamlessly from any device. Your to-do list stays updated wherever you go, thanks to seamless syncing.</p>
                    </div>
                    <div className="col side-image" data-aos="fade-up"  data-aos-delay='1500'>
                        <img src="/Images/Flat illustrations/Reminders.gif" className='responsive-image' alt="Side-image" />
                    </div>
                </div>
                <div className="row mb-5 mt-5 landingpage_sec2">
                    <div className="col" data-aos="fade-up"  data-aos-delay='2000' >
                        <p className='main_subtitle'><Icon icon="foundation:checkbox" color="#232323"  /> Prioritize your Tasks</p>
                        <p className='main_content'>Effortlessly prioritize tasks by urgency and importance using our intuitive drag-and-drop interface. Rearrange tasks instantly and focus on what truly matters.</p>
                    </div>
                    <div className="col side-image" data-aos="fade-up"  data-aos-delay='2000' >
                        <img src="/Images/Flat illustrations/Prioritise.gif" className='responsive-image' alt="Side-image" />
                    </div>
                </div>
                <div className="row mb5 pt-5 text-center landingpage_sec3" data-aos="fade-up"  data-aos-delay='1500'>
                    <q className='qoutes'>In the symphony of life, let your<br/> tasks find harmony.</q>
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
