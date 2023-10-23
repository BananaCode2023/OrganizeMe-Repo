
import Sidebar from "../components/Sidebar";
import "../css/priorities.css";
import axios from "axios";
import { useEffect, useState } from "react";
import profIcon from "../assets/profile-icon.png";
import { toast } from "react-hot-toast";
import "../css/today2.css";
import EditModal from "../components/EditModal";

const Today2 = () => {
  const userId = window.localStorage.getItem("id");

  //For getting the username of the currently logged in user
  const [username, setUsername] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3333/auth/username/" + userId)
      .then((user) => {
        setUsername(user.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //For getting the tasklist of the logged in user
  const [tasklist, setTasklist] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3333/tasklist/today/" + userId)
      .then((userTasks) => {
        setTasklist(userTasks.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteTask = (id) => {
    toast("Deleted Task", {
      icon: "🗑️",
    });
    axios
      .delete("http://localhost:3333/tasklist/delete/" + id)
      .then((result) => {
        setTimeout(() => {
          location.reload();
        }, 1000);
      })
      .catch((err) => console.log(err));
  };

  const taskDone = (id) => {
    toast("Congratulations on finishing this task", {
      icon: "🥳",
    });
    axios
      .delete("http://localhost:3333/tasklist/delete/" + id)
      .then((result) => {
        setTimeout(() => {
          location.reload();
        }, 1000);
      })
      .catch((err) => console.log(err));
  };

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const openEditModal = (taskId) => {
    setIsEditModalOpen(true);
    window.localStorage.setItem("taskId", taskId);
  };
  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <div className="priorities-page-container">
      <Sidebar userimg={profIcon} username={username.username} />

      <main className="priorities-page">
        <div className="priorities-heading mb-4">
          <i className="fa-solid fa-calendar-day priorities-heading-icon"></i>
          <h1 className="Today">Today</h1>
        </div>

        {isEditModalOpen && <EditModal closeEditModal={closeEditModal} />}
        {tasklist.map((task) => (
          <div>
            <div
              className="row priorities-list"
              style={{ display: "flex", gap: "20px" }}
              id="myList"
            >
              <div className="col-10 Today_header">
                <span onClick={() => taskDone(task._id)}>
                  <input
                    class="form-check-input"
                    type="radio"
                    name="radioNoLabel"
                    id="radioNoLabel1"
                    value=""
                    aria-label="..."
                    style={{ cursor: "pointer" }}
                  ></input>
                </span>
                <div>
                  <div>
                    <li>{task.task_title}</li>
                    <li className="task-desc">
                      <small>{task.task_description}</small>
                    </li>
                    <div style={{ display: "flex", gap: "5px" }}>
                      <li className="task-categ">
                        <small>{task.today}</small>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col Today_icons">
                <span
                  onClick={() => openEditModal(task._id)}
                  style={{ cursor: "pointer" }}
                >
                  <i className="fa-regular fa-pen-to-square edit-btn"></i>
                </span>
                <span
                  onClick={() => deleteTask(task._id)}
                  style={{ cursor: "pointer" }}
                >
                  <i className="fa-regular fa-trash-can delete-btn"></i>
                </span>
              </div>
              <hr />
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Today2;
