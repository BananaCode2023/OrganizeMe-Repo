import React from "react";
import "../css/notifications.css";
import notify from "../assets/Notify-amico.png";
import notifBell from "../assets/notif-bell.png";
import Sidebar from "../components/Sidebar";
import profIcon from "../assets/profile-icon.png";
import { useEffect, useState } from "react";
import axios from "axios";

const Notifications = () => {
  const userId = window.localStorage.getItem("id");
  const [username, setUsername] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/auth/username/" + userId)
      .then((user) => {
        setUsername(user.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="notifications-page-container">
      <Sidebar userimg={profIcon} username={username.username} />

      <main className="notifications-page">
        <div className="col notifications-heading">
          <i class="fa-regular fa-bell notif-bell-icon"></i>
          <h1>Notifications</h1>
        </div>

        <div className="notif-image">
          <img src={notify} className="rounded mx-auto d-block notif-img" />
          <p className="noif-bold">Your notification feed is empty</p>
          <p className="notif-reg">
            Your notification feed is empty at the moment. Stay tuned for <br />{" "}
            new updates, or review your notification settings.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Notifications;
