
import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../css/index.css'
import Accordion from 'react-bootstrap/Accordion';
import Stack from 'react-bootstrap/esm/Stack';
import KodeGo from '../assets/KodeGo.png'
import Figma from '../assets/figma logo.png'
import Github from '../assets/Github.png'
import Google from '../assets/Google.png'
import Youtube from '../assets/Youtube.png'
import RoadMap from '../assets/personal goals checklist.gif'
import Explore1 from '../assets/Around the world-pana 1.png'
import Explore2 from '../assets/Around the world-pana (1) 1.png'

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
            <main className='main'>
                <div className="row pb-5 landingpage_sec1">
                    <div className="">
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
                            <button type="button" className="btn btn-success mx-auto started-btn"><a href="/auth/Register">Get Started <FontAwesomeIcon icon={faArrowRight} style={{color: "#f4f7fa",}} /></a></button>
                            <i className='whitespace'>__</i>
                            <button type="button" className="btn btn-bs-light-border-subtle mx-auto explore-btn"><a href="/features">Explore</a></button>
                        </div>
                    </div>
                </div>
            </main>
            <div className="scroll_testimonial">
                <div className="row mb-5">
                    <p className='testimonial_header'>Loved by thousands of users <br />All over the World</p>
                </div>
                <div className="scroll-container container">
                    <div className="scroll-wrapper">
                    <div className="review">
                        <span className="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                        <p className="comment">A genuine game-changer! This ap`s intuitive layout and seamless syncing keep my tasks organized, making productivity effortless and stress-free.</p>
                        <p className="customer">- Elon Musk</p>
                    </div>
                    <div className="review">
                        <span className="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                        <p className="comment">OrganizeMe transformed my chaotic schedule into a streamlined success story. Its simplicity and effectiveness make every task a breeze, an essential tool for anyone with a busy life!</p>
                        <p className="customer">- Mark Zuckerberg</p>
                    </div>
                    <div className="review">
                        <span className="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                        <p className="comment">Efficiency at its best! Task management became a breeze with this app. Its user-friendly interface and timely reminders are invaluable for busy professionals.</p>
                        <p className="customer">- Bill Gates</p>
                    </div>
                    <div className="review">
                        <span className="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                        <p className="comment">Simplicity meets productivity. I adore how this app transformed my chaos into order. Managing tasks has never been more straightforward and satisfying.</p>
                        <p className="customer">- Jeff Bezos</p>
                    </div>

                    </div>
                    <div className="scroll-wrapper">
                    <div className="review">
                        <span className="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                        <p className="comment">Task management made elegant. This app`s design and functionality are a perfect match. It`s my go-to for staying organized and on top of my responsibilities.</p>
                        <p className="customer">- Steve Jobs</p>
                    </div>
                    <div className="review">
                        <span className="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                        <p className="comment">This app embodies productivity. Its intuitive features effortlessly enhance my daily routine. I`m more organized and focused, thanks to its smart task management.</p>
                        <p className="customer">- Jack Ma</p>
                    </div>
                    <div className="review">
                        <span className="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                        <p className="comment">I`m in awe of this app`s effectiveness. Managing tasks is now second nature, thanks to its intuitive design. It`s the secret to my enhanced productivity and peace of mind.</p>
                        <p className="customer">- Oprah Winfrey</p>
                    </div>
                    <div className="review">
                        <span className="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                        <p className="comment">With OrganizeMe, every day is a productive day. Its no-nonsense approach to task management keeps me on top of my game. Say hello to stress-free organization and goodbye to missed deadlines!</p>
                        <p className="customer">- Henry Sy</p>
                    </div>
                    </div>
                </div>

                <div className="row pb-5 pt-5 Featured">
                    <div className="col">
                    <p>Featured in:</p>
                    </div>
                    <div className="col">
                        <img src={KodeGo} className='responsive-image1' alt="kodego" />
                    </div>
                    <div className="col">
                        <img src={Figma} className='responsive-image1' alt="figma" />
                    </div>
                    <div className="col">
                        <img src={Github} className='responsive-image1' alt="github" />
                    </div>
                    <div className="col">
                        <img src={Google} className='responsive-image1' alt="google" />
                    </div>
                    <div className="col">
                        <img src={Youtube} className='responsive-image1' alt="youtube" />
                    </div>
                </div>
                    
            </div>       
            <section>

                <div className="row mb-5 landingpage_sec2">
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
                <div className="row mb5 pb-5 pt-5 text-center landingpage_sec3" data-aos="fade-up"  data-aos-delay=''>
                    <q className=' mb-3 qoutes'>
                        Your path to productivity begins here. With our ToDoList app, follow a simple roadmap: Plan, Do, Achieve. Stay organized effortlessly. </q>
                    <p className='author'>- OrganizeMe</p>
                </div>
                <div className="row mb-5">
                    <div className="row">
                        <div className="col RoadMap">
                            <img src={RoadMap} className='responsive-image' alt="RoadMap" />
                        </div>
                        <div className="col">
                        <Accordion defaultActiveKey={['0']} alwaysOpen

                        >
                        <Accordion.Item eventKey="0" className='road_item'>
                            <Accordion.Header className='road_header'>1. Capture Tasks:</Accordion.Header>
                            <Accordion.Body className='road_body'>
                                    <ul>
                                        <li>
                                        <b> Jot Down Ideas:  </b> <br />Write down tasks as they come to mind, ensuring nothing is forgotten.
                                        </li>
                                        <li>
                                        <b>Be Specific:</b> <br /> Clearly define tasks to avoid confusion later.
                                        </li>
                                    </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className='road_item'>
                            <Accordion.Header className='road_header'>2. Prioritize Tasks:</Accordion.Header>
                            <Accordion.Body className='road_body'>
                                    <ul>
                                        <li>
                                            <b>Identify Importance:</b> <br /> Determine which tasks are most crucial and need immediate attention.
                                        </li>
                                        <li>
                                            <b>Use Categories: </b> <br />Group tasks into categories (e.g., work, personal, errands) for easy organization.
                                        </li>
                                    </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className='road_item'>
                            <Accordion.Header className='road_header'>3. Set Achievable Goals:</Accordion.Header>
                            <Accordion.Body className='road_body'>
                                    <ul>
                                        <li>
                                            <b>Break Down Tasks:</b> <br />Divide large tasks into smaller, manageable sub-tasks.
                                        </li>
                                        <li>
                                            <b>Set Realistic Deadlines: </b> <br />Assign deadlines that are achievable and allow some flexibility.
                                        </li>
                                    </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className='road_item'>
                            <Accordion.Header className='road_header'>4. Regularly Review and Update:</Accordion.Header>
                            <Accordion.Body className='road_body'>
                                    <ul>
                                        <li>
                                            <b>Daily Check-ins:</b> <br />Review your to-do list daily, mark completed tasks, and add new ones.
                                        </li>
                                        <li>
                                            <b>Weekly Reflection:</b> <br />Reflect on your progress weekly. Celebrate achievements and adjust priorities as needed.
                                        </li>
                                    </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className='road_item'>
                            <Accordion.Header className='road_header'>Finally!</Accordion.Header>
                            <Accordion.Body className='road_body'>
                                        <b>You can create and maintain an organized to-do list, helping youself to stay focused, productive, and on top of your tasks.</b>
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                        </div>
                    </div>
                </div>
                <div className="row mb-5 pt-5 text-center explore-more">
                    <Stack>
                        <div>
                            <img src={Explore1} className='explore-image' alt="ExploreMore" />
                        </div>
                        <div  className='explore-text'>
                            <p>Unlock more possibilities! Dive into our features now. Click here to explore: <a href='/features'>Explore Features</a>.</p>  
                        </div>
                        <div>
                            <img src={Explore2} className='explore-image' alt="ExloreMore" />
                        </div>
                    </Stack>
                </div>
            </section>

            <Footer />
        </>
    )

}
