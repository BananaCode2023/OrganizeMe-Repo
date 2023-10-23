import Sidebar from "../components/Sidebar";
import "../css/categories.css";
import axios from "axios";
import { useEffect, useState } from "react";
import profIcon from "../assets/profile-icon.png";
import { toast } from "react-hot-toast";
import EditModal from "../components/EditModal";

//Maglagay ng websocket para autoupdate

const Categories = () => {
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

  //For getting the personal tasklist of the logged in user
  const [personalTasklist, setPersonalTasklist] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3333/tasklist/category/personal/" + userId)
      .then((result) => {
        setPersonalTasklist(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //For getting the health tasklist of the logged in user
  const [healthTasklist, setHealthTasklist] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3333/tasklist/category/health/" + userId)
      .then((result) => {
        setHealthTasklist(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //For getting the relationship tasklist of the logged in user
  const [relationshipTasklist, setRelationshipTasklist] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3333/tasklist/category/relationship/" + userId)
      .then((result) => {
        setRelationshipTasklist(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //For getting the family tasklist of the logged in user
  const [familyTasklist, setFamilyTasklist] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3333/tasklist/category/family/" + userId)
      .then((result) => {
        setFamilyTasklist(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //For getting the education tasklist of the logged in user
  const [educationTasklist, setEducationTasklist] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3333/tasklist/category/education/" + userId)
      .then((result) => {
        setEducationTasklist(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //For getting the fitness tasklist of the logged in user
  const [fitnessTasklist, setFitnessTasklist] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3333/tasklist/category/fitness/" + userId)
      .then((result) => {
        setFitnessTasklist(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //For getting the work tasklist of the logged in user
  const [workTasklist, setWorkTasklist] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3333/tasklist/category/work/" + userId)
      .then((result) => {
        setWorkTasklist(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //For getting the others tasklist of the logged in user
  const [otherTasklist, setOtherTasklist] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3333/tasklist/category/others/" + userId)
      .then((result) => {
        setOtherTasklist(result.data);
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

  const [showPersonal, setShowPersonal] = useState(false);
  const [showHealth, setShowHealth] = useState(false);
  const [showRelationship, setShowRelationship] = useState(false);
  const [showFamily, setShowFamily] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showFitness, setShowFitness] = useState(false);
  const [showWork, setShowWork] = useState(false);
  const [showOthers, setShowOthers] = useState(false);

  return (
    <div className="categories-page-container">
      <Sidebar userimg={profIcon} username={username.username} />

      <main className="categories-page">
        <div className="categories-heading">
          <i className="fa-solid fa-layer-group categories-heading-icon"></i>
          <h1>Categories</h1>
        </div>
        
        <div className="toggle-btns-container container-fluid">
          <button onClick={() => setShowPersonal(!showPersonal)}
          className={`categ-btn ${showPersonal ? 'toggled' : ''}`}
          >
            Personal Care
            <div className='task-count'>{personalTasklist.length}</div>
          </button>
          <button onClick={() => setShowHealth(!showHealth)}
           className={`categ-btn ${showHealth ? 'toggled' : ''}`}
          >
            Health
            <div className='task-count'>{healthTasklist.length}</div>
          </button>
          <button onClick={() => setShowRelationship(!showRelationship)}
          className={`categ-btn ${showRelationship ? 'toggled' : ''}`}
          >
            Relationship
            <div className='task-count'>{relationshipTasklist.length}</div>
          </button>
          <button onClick={() => setShowFamily(!showFamily)}
          className={`categ-btn ${showFamily ? 'toggled' : ''}`}
          >
            Family
            <div className='task-count'>{familyTasklist.length}</div>
          </button>
          <button onClick={() => setShowEducation(!showEducation)}
          className={`categ-btn ${showEducation ? 'toggled' : ''}`}
          >
            Education
            <div className='task-count'>{educationTasklist.length}</div>
          </button>
          <button onClick={() => setShowFitness(!showFitness)}
          className={`categ-btn ${showFitness ? 'toggled' : ''}`}
          >
            Fitness
            <div className='task-count'>{fitnessTasklist.length}</div>
          </button>
          <button onClick={() => setShowWork(!showWork)}
          className={`categ-btn ${showWork ? 'toggled' : ''}`}
          >
            Work
            <div className='task-count'>{workTasklist.length}</div>
          </button>
          <button onClick={() => setShowOthers(!showOthers)}
          className={`categ-btn ${showOthers ? 'toggled' : ''}`}
          >
            Others
            <div className='task-count'>{otherTasklist.length}</div>
          </button>
        </div>
        
        {isEditModalOpen && <EditModal closeEditModal={closeEditModal} />}
        {showPersonal && (
          <div>
            <h6 className="category-title">Personal Care</h6>
            <hr />
            {personalTasklist.map((task) => (
              <div>
              <div
                className="row priorities-list"
                style={{ display: "flex", gap: "20px" }}
                id="myList"
              >
                <div className="col-10 Today_header">
                  <span onClick={() => taskDone(task._id)}>
                    <input
                      className="form-check-input"
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
                          <small>{task.category}</small>
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
          </div>
        )}

        {showHealth && (
          <div>
            <h6 className="category-title">Health</h6>
            <hr />
            {healthTasklist.map((task) => (
              <div>
              <div
                className="row priorities-list"
                style={{ display: "flex", gap: "20px" }}
                id="myList"
              >
                <div className="col-10 Today_header">
                  <span onClick={() => taskDone(task._id)}>
                    <input
                      className="form-check-input"
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
                          <small>{task.category}</small>
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
          </div>
        )}
        
        {showRelationship && (
          <div>
            <h6 className="category-title">Relationship</h6>
            <hr />
            {relationshipTasklist.map((task) => (
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
                          <small>{task.category}</small>
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
          </div>
        )}      
        
        {showFamily && (
          <div>
            <h6 className="category-title">Family</h6>
            <hr />
            {familyTasklist.map((task) => (
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
                          <small>{task.category}</small>
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
          </div>
        )}

        {showEducation && (
          <div>
            <h6 className="category-title">Education</h6>
            <hr />
            {educationTasklist.map((task) => (
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
                          <small>{task.category}</small>
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
          </div>
        )}

        {showFitness && (
          <div>
            <h6 className="category-title">Fitness</h6>
            <hr />
            {fitnessTasklist.map((task) => (
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
                          <small>{task.category}</small>
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
          </div>
        )}

        {showWork && (
          <div>
            <h6 className="category-title">Work</h6>
            <hr />
            {workTasklist.map((task) => (
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
                          <small>{task.category}</small>
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
          </div>
        )}

        {showOthers && (
          <div>
            <h6 className="category-title">Others</h6>
            <hr />
            {otherTasklist.map((task) => (
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
                          <small>{task.category}</small>
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
          </div>
        )}
        
      </main>
    </div>
  );
};

export default Categories;

