import React from "react";
import "../css/taskModal.css";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";

function TaskModal({ closeModal }) {
  const [isTodayButtonPressed, setTodayButtonPressed] = useState(false);
  const [isPriorityButtonPressed, setPriorityButtonPressed] = useState(false);
  const [isCategoryButtonPressed, setCategoryButtonPressed] = useState(false);

  const [addTask, setAddTask] = useState({
    task_title: "",
    task_description: "",
    userId: window.localStorage.getItem("id"),
  });
  const [addToday, setAddToday] = useState({ today: "" });
  const [addPriority, setAddPriority] = useState({ priority: "" });
  const [addCategory, setAddCategory] = useState({ category: "" });

  const handleAddTask = (e) => {
    const { name, value } = e.target;
    setAddTask({ ...addTask, [name]: value });
    setAddToday({ ...addToday, [name]: value });
    setAddPriority({ ...addPriority, [name]: value });
    setAddCategory({ ...addCategory, [name]: value });
  };

  const handleAddTask1 = (e) => {
    const { name, value } = e.target;
    setAddTask({ ...addTask, [name]: value });
    setTodayButtonPressed(!isTodayButtonPressed);
    setAddToday({ ...addToday, [name]: value });
    setAddPriority({ ...addPriority, [name]: value });
    setAddCategory({ ...addCategory, [name]: value });
  };

  const handleAddTask2 = (e) => {
    const { name, value } = e.target;
    setAddTask({ ...addTask, [name]: value });
    setAddToday({ ...addToday, [name]: value });
    setPriorityButtonPressed(!isPriorityButtonPressed);
    setAddPriority({ ...addPriority, [name]: value });
    setAddCategory({ ...addCategory, [name]: value });
  };

  const handleAddTask3 = (e) => {
    const { name, value } = e.target;
    setAddTask({ ...addTask, [name]: value });
    setAddToday({ ...addToday, [name]: value });
    setAddPriority({ ...addPriority, [name]: value });
    setCategoryButtonPressed(!isCategoryButtonPressed);
    setAddCategory({ ...addCategory, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3333/tasklist/create-task", addTask)
      .then((result) => {
        toast.success("Added Task");
        setTimeout(() => {
          location.reload();
        }, 1000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <div className="task-modal-content">
          <div className="task-input">
            <input
              type="text"
              name="task_title"
              id="task-title"
              placeholder="TASK TITLE"
              onChange={handleAddTask}
            />

            <input
              type="text"
              name="task_description"
              id="task-input"
              placeholder="Task Description"
              onChange={handleAddTask}
            />
          </div>

          <div className="modal-btns">
            <input
              type="button"
              className={`task-modal-btn org-when ${
                isTodayButtonPressed ? "pressed1" : ""
              }`}
              name="today"
              value="📆today"
              onClick={handleAddTask1}
            />

            <input
              type="button"
              className={`task-modal-btn priority-btn ${
                isPriorityButtonPressed ? "pressed2" : ""
              }`}
              name="priority"
              value="⭐priority"
              onClick={handleAddTask2}
            />

            <select
              name="category"
              onChange={handleAddTask3}
              className={`task-modal-btn category-btn ${
                isCategoryButtonPressed ? "pressed3" : ""
              }`}
            >
              <option>💭 Categories</option>
              <option name="category" value="🧘🏻‍♀ Personal Care">
                🧘🏻‍♀ Personal Care
              </option>

              <option name="category" value="⚕️ Health">
                ⚕️ Health
              </option>

              <option name="category" value="👫🏼 Relationship">
                👫🏼 Relationship
              </option>

              <option name="category" value="👨🏻‍👩🏻‍👧🏻 Family">
                👨🏻‍👩🏻‍👧🏻 Family
              </option>

              <option name="category" value="🎓 Education">
                🎓 Education
              </option>

              <option name="category" value="🏋🏻‍♂️ Fitness">
                🏋🏻‍♂️ Fitness
              </option>

              <option name="category" value="💼 Work">
                💼 Work
              </option>

              <option name="category" value="🤔 Others">
                🤔 Others
              </option>
            </select>
          </div>

          <hr className="task-modal-hr" />

          <div className="modal-add-cancel-btns">
            <button
              className="close-modal modal-cancel-btn"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button className="btn btn-success modal-add-btn" type="submit">
              Add Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TaskModal;
