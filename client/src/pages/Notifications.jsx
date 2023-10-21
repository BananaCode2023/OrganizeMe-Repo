import React from "react";
import "../css/notifications.css";
import notify from "../assets/Notify-amico.png";
import notifBell from "../assets/notif-bell.png";

const Notifications = () => {
  return (
    <>
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
