import React from "react";
import "../css/notifications.css";
import notify from "../assets/Notify-amico.png";
import notifBell from "../assets/notif-bell.png";
import Sidebar from "../components/Sidebar"
import profIcon from '../assets/profile-icon.png'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Notifications = () => {
  const userId = window.localStorage.getItem("id")
  const [username, setUsername] = useState([])

  useEffect(() => {
      axios
        .get('http://localhost:3333/auth/username/'+userId)
        .then(user => {
          setUsername(user.data)
        })
        .catch(err => console.log(err))
  }, [])


  return (
    <>
    <Sidebar 
    userimg = {profIcon}
    username = {username.username}
    />
      <div className="notifications-container">
        <div className="notif-bell">
          <i class="fa-regular fa-bell notif-bell-icon"></i>
          <h1>Notification</h1>
        </div>
        <div className="sort-by justify-content-end">
          <i class="fa-solid fa-sliders sort-by-icon"></i>
          <h5>Sort By</h5>
        </div>
        {/* <div className="row justify-content-end">
            <div className="col-2 sort-by">
              <i className="fa-solid fa-sliders"> Sort By</i>
            </div>
          </div>
        </div> */}
        <div className="notif-image">
          <img src={notify} className="rounded mx-auto d-block" />
          <p className="noif-bold">Your notification feed is empty</p>
          <p className="notif-reg">
            Your notification feed is empty at the moment. Stay tuned for <br />{" "}
            new updates, or review your notification settings.
          </p>
        </div>
      </div>
    </>
  );
};

export default Notifications;
