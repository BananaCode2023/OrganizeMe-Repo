import { useState, useEffect } from "react";
import "../css/sidebar.css";
import TaskModal from "./TaskModal";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ProfileModal from "./ProfileModal";

function Sidebar(props) {
  const [showBar, hideBar] = useState(false);

  const toggleSideBar = () => {
    hideBar(!showBar);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const openProfileModal = () => {
    setIsProfileModalOpen(true);
  };
  const closeProfileModal = () => {
    setIsProfileModalOpen(false);
  };

  const getId = () => {};

  return (
    <>
      <aside className={`sidebar ${showBar ? "" : "close"}`}>
        <div className="sidebar-row1">
          <div>
            <button className="profile-btn" onClick={openProfileModal}>
              <img
                src={props.userimg}
                alt="user-img"
                className="dummy-profIcon"
              />
              {props.username}
              <i class="fa-solid fa-caret-down"></i>
            </button>
          </div>

          <a href="/notifications" className="bell-btn">
            <i
              class={`
          fa-regular 
          fa-bell ${showBar ? "close" : ""}`}
            ></i>
          </a>
          <button onClick={toggleSideBar} id="sidebar-toggle">
            <i class="fa-regular fa-window-maximize fa-rotate-90"></i>
          </button>
        </div>
        {isProfileModalOpen && (
          <ProfileModal closeProfileModal={closeProfileModal} />
        )}

        <button
          className={`btn btn-success 
          add-task-btn 
          ${showBar ? "close" : ""}`}
          onClick={openModal}
        >
          <i class="fa-solid fa-plus" id="moveSidebarButton"></i>Add Task
        </button>
        {isModalOpen && <TaskModal closeModal={closeModal} />}

        <div className="sidebar-btns search-bar">
          <i class="fa-solid fa-magnifying-glass"></i>
          <h6>SEARCH</h6>
        </div>

        <a href="/inbox">
          <div className="sidebar-btns inbox-bar">
            <i class="fa-solid fa-inbox"></i>
            <h6>INBOX</h6>
          </div>
        </a>

        <a href="/upcoming">
          <div className="sidebar-btns upcoming-bar">
            <i class="fa-solid fa-star"></i>
            <h6>PRIORITIES</h6>
          </div>
        </a>

        <a href="/today">
          <div className="sidebar-btns today-bar">
            <i class="fa-solid fa-calendar-day"></i>
            <h6>TODAY</h6>
          </div>
        </a>

        <a href="/filters_labels">
          <div className="sidebar-btns filter-bar">
            <i class="fa-solid fa-tags"></i>
            <h6>Filters & Labels</h6>
          </div>
        </a>

        <hr className={`sidebar-hr ${showBar ? "close" : ""}`} />

        {/* <div className={`sidebar-row2 ${showBar ? 'close' : ''}`}>
          <h5>Projects</h5><i class="fa-solid fa-plus"></i>
        </div> */}
      </aside>
    </>
  );
}

export default Sidebar;
