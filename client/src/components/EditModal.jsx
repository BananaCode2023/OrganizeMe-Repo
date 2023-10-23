import React from "react";
import "../css/editmodal.css";
import orgIcon from "../assets/orgicon.png";
import starIcon from "../assets/staricon.png";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const EditModal = ({ closeEditModal }) => {
  const taskId = window.localStorage.getItem("taskId");

  const [task, setTask] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/tasklist/get-task/" + taskId)
      .then((res) => {
        setTask(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [task_title, setTaskTitle] = useState("");
  const [task_description, setTaskDescription] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3333/tasklist/" + taskId)
      .then((response) => {
        setTaskTitle(response.data.task_title);
        setTaskDescription(response.data.task_description);
      })
      .catch((error) => {
        alert("An error happened, please check console");
        console.log(error);
      });
  }, []);

  const handleEditTask = () => {
    toast.success("Edited Successfully");
    const data = {
      task_title,
      task_description,
    };
    axios.put("http://localhost:3333/tasklist/edit-task/" + taskId, data);
  };

  return (
    <div className="editModal-container">
      <form onSubmit={handleEditTask} className="editModal-form">
        {task.map((taskInput) => (
          <div className="editModal-form-container">
            <h5>Edit Task</h5>
            <div>
              <label htmlFor="task_title">Title:</label>
              <input
                className="edit-input-form"
                type="text"
                name="task_title"
                placeholder={taskInput.task_title}
                onChange={(e) => setTaskTitle(e.target.value)}
              />
              <br />

              <label htmlFor="task_description">Description:</label>
              <input
                className="edit-input-form"
                type="text"
                name="task_description"
                placeholder={taskInput.task_description}
                onChange={(e) => setTaskDescription(e.target.value)}
              />
            </div>
          </div>
        ))}
        <hr className="edit-modal-hr" />
        <div className="edit-modal-btn-container">
          <button type="submit" className="editModal-btn btn btn-success">
            Edit
          </button>
          <button
            onClick={closeEditModal}
            className="editModal-btn edit-cancel-btn"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditModal;
