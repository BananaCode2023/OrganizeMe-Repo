import { useState, useEffect } from "react";
import "../css/sidebar.css";
import TaskModal from "./TaskModal";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ProfileModal from "./ProfileModal";
import Stack from "react-bootstrap/esm/Stack";

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

  // const searchProduct = (event) => {
  //   let new_filtered_product = []

  //   product_data.map(
  //     (product) => {
  //       if (product.title.toLowerCase().includes(event.target.value.toLowerCase())) { 
  //         new_filtered_product.push(product)
  //       }
  //     }
  //   )
  //   console.log(new_filtered_product)
  //   setFilteredProduct(new_filtered_product)
  // }

  

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
          <div className="sidebar-btns search-bar">
          <i className="fa-solid fa-magnifying-glass"></i>
          <h5>Search</h5>
        </div>

        <a href="/inbox">
          <div className="sidebar-btns inbox-bar">
            <i className="fa-solid fa-inbox"></i>
            <h5>Inbox</h5>
          </div>
        </a>

        <a href="/priorities">
          <div className="sidebar-btns upcoming-bar">
            <i className="fa-solid fa-star"></i>
            <h5>Priorities</h5>
          </div>
        </a>

        <a href="/today2">
          <div className="sidebar-btns today-bar">
            <i className="fa-solid fa-calendar-day"></i>
            <h5>Today</h5>
          </div>
        </a>

        <a href="/categories">
          <div className='sidebar-btns filter-bar'>
          <i className="fa-solid fa-layer-group"></i>
            <h5>Categories</h5>
          </div>
        </a>

        <hr className={`sidebar-hr ${showBar ? "close" : ""}`} />

        </Stack>

        {/* <div className={`sidebar-row2 ${showBar ? 'close' : ''}`}>
          <h5>Projects</h5><i class="fa-solid fa-plus"></i>
        </div> */}
      </aside>
    </>
  );
}

export default Sidebar;
