import { useState, useEffect } from "react";
import "../css/sidebar.css";
import TaskModal from "./TaskModal";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ProfileModal from "./ProfileModal";
import Stack from "react-bootstrap/esm/Stack";
import SearchModal from "./SearchModal";

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
  }
  
  const [isSearchModalOpen, setIsSearchModalOpen] =useState(false)
  const openSearchModal = () => {
    setIsSearchModalOpen(true)
  }
  const closeSearchModal = () => {
    setIsSearchModalOpen(false)
  }

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
              <i className="fa-solid fa-caret-down"></i>
            </button>
          </div>

          <a href="/notifications" className="bell-btn">
            <i
              className={`
          fa-regular 
          fa-bell ${showBar ? "close" : ""}`}
            ></i>
          </a>
          <button onClick={toggleSideBar} id="sidebar-toggle">
            <i className="fa-regular fa-window-maximize fa-rotate-90 toggle-btn"></i>
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
          <i className="fa-solid fa-plus" id="moveSidebarButton"></i>Add Task
        </button>
        {isModalOpen && <TaskModal closeModal={closeModal} />}
        
        <Stack gap={2} className="pt-2">
        {isSearchModalOpen && (
          <SearchModal closeSearchModal={closeSearchModal} />
        )}

        <div className="sidebar-btns search-bar" onClick={openSearchModal}>
          <i class="fa-solid fa-magnifying-glass"></i>
          <h5>Search</h5>
        </div>

        <a href="/inbox">
          <div className="sidebar-btns inbox-bar">
            <i className="fa-solid fa-inbox"></i>
            <h5>Inbox</h5>
          </div>
        </a>

        <a href="/today2">
          <div className="sidebar-btns today-bar">
            <i className="fa-solid fa-calendar-day"></i>
            <h5>Today</h5>
          </div>
        </a>

        <a href="/priorities">
          <div className="sidebar-btns upcoming-bar">
            <i class="fa-solid fa-star"></i>
            <h5>Priorities</h5>
          </div>
        </a>

        <a href="/categories">
          <div className="sidebar-btns category-bar">
            <i className="fa-solid fa-layer-group"></i>
            <h5>Categories</h5>
          </div>
        </a>

        <hr className={`sidebar-hr ${showBar ? "close" : ""}`} />

        </Stack>
        
        <div className={`premium-container ${showBar ? "close" : ""}`}>
          <h5>Satisfied? Get More Awesome Features</h5>
          <button 
          className="get-premium-btn"
          >
            <i class="fa-solid fa-medal"></i>
            Get Premium!
          </button>
        </div>
        
      </aside>
    </>
  );
}

export default Sidebar;
