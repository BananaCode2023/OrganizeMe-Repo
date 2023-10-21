import React from "react";
import "../css/profileModal.css";

import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function ProfileModal({ closeProfileModal }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.clear();
    axios
      .get("http://localhost:3333/auth/logout")
      .then(navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div onMouseLeave={closeProfileModal}>
      <div className="profile-modal pt-3">
        <button>Change profile picture</button>
      </div>

      <div className="profile-modal pb-3">
        <hr />
        {window.localStorage.length ? (
          <button onClick={handleLogout}>
            logout
          </button>
        ) : (
          <Link to="/auth/register">login/register</Link>
        )}
      </div>
    </div>
  );
}

export default ProfileModal;
