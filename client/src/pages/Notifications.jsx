import React from "react";
import "../css/notifications.css";
import notify from "../assets/Notify-amico.png";
import notifBell from "../assets/notif-bell.png";
import sortBy from "../assets/Sort-by.png";

const Notifications = () => {
  return (
    <>
      <div className="notifications-container">
        <div className="row">
          <div className="col notifications">
            <img src={notifBell} alt="Notification Bell" />
            Notifications
          </div>
          <div class="row justify-content-end">
            <div class="col-1">
              <img src={sortBy} alt="sort by" />
            </div>
          </div>
        </div>
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
