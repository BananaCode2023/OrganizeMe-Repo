// import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/index.css";
import "../css/features-about.css";
import Accordion from "react-bootstrap/Accordion";
import RoadMap from "../assets/personal goals checklist.gif";
// icons for iconify
import { Icon } from "@iconify-icon/react";
// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Features = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  console.log("Component rendered");

  return (
    <>
      <Header />
      {/* This section is originally from Landing page and the team decided to placed it here in Features page, Thanks*/}

      <section className="features-page">
        <div className="row mb-5 pb-5 pt-5 Feature_header text-center gap-4">
          <h1>
            Elevate Your Productivity: Explore Our Feature-Packed Experience
          </h1>
          <p>
            At OrganizeMe, we are dedicated to providing you with a seamless and
            efficient experience. Here`s how you can make the most out of our
            website features:
          </p>
        </div>
        <div className="row mb-5 pb-5 landingpage_sec2">
          <div className="col" data-aos="fade-up" data-aos-delay="">
            <p className="medium">
              <Icon icon="foundation:checkbox" />
              Easy Task Management:
            </p>
            <p className="main_subtitle">Stay Organized, Anytime, Anywhere</p>
            <p className="main_content">
              You can create, edit, and organize tasks seamlessly from any
              device. Your to-do list stays updated wherever you go, thanks to
              seamless syncing.
            </p>
          </div>
          <div className="col side-image" data-aos="fade-up" data-aos-delay="">
            <img
              src="/Images/Flat illustrations/Work time.gif"
              className="responsive-image"
              alt="Side-image"
            />
          </div>
        </div>
        <div className="row mb-5 pb-5 mt-5 landingpage_sec2">
          <div className="col" data-aos="fade-up" data-aos-delay="">
            <p className="medium">
              <Icon icon="foundation:checkbox" />
              Smart Reminders:
            </p>
            <p className="main_subtitle"> Set customizable reminders anytime</p>
            <p className="main_content">
              You can create, edit, and organize tasks seamlessly from any
              device. Your to-do list stays updated wherever you go, thanks to
              seamless syncing.
            </p>
          </div>
          <div className="col side-image" data-aos="fade-up" data-aos-delay="">
            <img
              src="/Images/Flat illustrations/Reminders.gif"
              className="responsive-image"
              alt="Side-image"
            />
          </div>
        </div>
        <div className="row mb-5 mt-5 landingpage_sec2">
          <div className="col" data-aos="fade-up" data-aos-delay="">
            <p className="medium">
              <Icon icon="foundation:checkbox" />
              Prioritize your Tasks
            </p>
            <p className="main_subtitle">Focused Task Management Made Easy</p>
            <p className="main_content">
              Prioritize What Matters Most. Our Simple and Intuitive Priority
              Features Help You Focus on the Essential, Making Task Management
              Effortless
            </p>
          </div>
          <div className="col side-image" data-aos="fade-up" data-aos-delay="">
            <img
              src="/Images/Flat illustrations/Prioritise.gif"
              className="responsive-image"
              alt="Side-image"
            />
          </div>
        </div>
        <div
          className="row mb5 pb-5 pt-5 text-center landingpage_sec3"
          data-aos="fade-up"
          data-aos-delay=""
        >
          <q className=" mb-3 qoutes">
            Your path to productivity begins here. With our ToDoList app, follow
            a simple roadmap: Plan, Do, Achieve. Stay organized effortlessly.{" "}
          </q>
          <p className="author">- OrganizeMe</p>
        </div>
        <div className="row mb-5">
          <div className="row" data-aos="fade-up" data-aos-delay="">
            <div className="col RoadMap">
              <img src={RoadMap} className="responsive-image" alt="RoadMap" />
            </div>
            <div className="col">
              <Accordion defaultActiveKey={["0"]} alwaysOpen>
                <Accordion.Item eventKey="0" className="road_item">
                  <Accordion.Header className="road_header">
                    1. Capture Tasks:
                  </Accordion.Header>
                  <Accordion.Body className="road_body">
                    <ul>
                      <li>
                        <b> Jot Down Ideas: </b> <br />
                        Write down tasks as they come to mind, ensuring nothing
                        is forgotten.
                      </li>
                      <li>
                        <b>Be Specific:</b> <br /> Clearly define tasks to avoid
                        confusion later.
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="road_item">
                  <Accordion.Header className="road_header">
                    2. Prioritize Tasks:
                  </Accordion.Header>
                  <Accordion.Body className="road_body">
                    <ul>
                      <li>
                        <b>Identify Importance:</b> <br /> Determine which tasks
                        are most crucial and need immediate attention.
                      </li>
                      <li>
                        <b>Use Categories: </b> <br />
                        Group tasks into categories (e.g., work, personal,
                        errands) for easy organization.
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="road_item">
                  <Accordion.Header className="road_header">
                    3. Set Achievable Goals:
                  </Accordion.Header>
                  <Accordion.Body className="road_body">
                    <ul>
                      <li>
                        <b>Break Down Tasks:</b> <br />
                        Divide large tasks into smaller, manageable sub-tasks.
                      </li>
                      <li>
                        <b>Set Realistic Deadlines: </b> <br />
                        Assign deadlines that are achievable and allow some
                        flexibility.
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="road_item">
                  <Accordion.Header className="road_header">
                    4. Regularly Review and Update:
                  </Accordion.Header>
                  <Accordion.Body className="road_body">
                    <ul>
                      <li>
                        <b>Daily Check-ins:</b> <br />
                        Review your to-do list daily, mark completed tasks, and
                        add new ones.
                      </li>
                      <li>
                        <b>Weekly Reflection:</b> <br />
                        Reflect on your progress weekly. Celebrate achievements
                        and adjust priorities as needed.
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className="road_item">
                  <Accordion.Header className="road_header">
                    Finally!
                  </Accordion.Header>
                  <Accordion.Body className="road_body">
                    <b>
                      You can create and maintain an organized to-do list,
                      helping youself to stay focused, productive, and on top of
                      your tasks.
                    </b>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Features;
