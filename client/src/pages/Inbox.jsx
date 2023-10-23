import Sidebar from '../components/Sidebar'
import '../css/inbox.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import profIcon from '../assets/profile-icon.png'
import {toast} from 'react-hot-toast'
import EditModal from "../components/EditModal";

//Maglagay ng websocket para autoupdate

const Inbox = () => {
  const userId = window.localStorage.getItem("id");
  const [tasklist, setTasklist] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3333/tasklist/user-tasks/" + userId)
      .then((userTasks) => {
        setTasklist(userTasks.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [username, setUsername] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/auth/username/" + userId)
      .then((user) => {
        setUsername(user.data);
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
      .catch(err => console.log(err))
  }

    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const openEditModal = (taskId) => {
    setIsEditModalOpen(true)
      window.localStorage.setItem('taskId', taskId)
  }
  const closeEditModal = () => {
    setIsEditModalOpen(false)
  }


  return (
    <div className="inbox-page-container">
      <Sidebar userimg={profIcon} username={username.username} />

    <main className="inbox-page">
      <div className="inbox-heading">
        <i class="fa-solid fa-inbox inbox-heading-icon"></i>
        <h1>Inbox</h1>
      </div>

      {isEditModalOpen && <EditModal closeEditModal={closeEditModal} />}
      {tasklist.map(task => (
        <div>
        <ul 
        className="inbox-list" 
        style={{display: 'flex', gap: '20px'}}
        id="myList"
        >
          <li 
          onClick={() => taskDone(task._id)}
          style={{cursor: 'pointer'}}
          >
            <i class="fa-regular fa-circle"></i>
          </li>

          <div>
          <li><strong>{task.task_title}</strong></li>
          <li>{task.task_description}</li>
          <div style={{display: 'flex', gap: '5px'}}>
            <li>{task.today}</li>
            <li>{task.priority}</li>
            <li>{task.category}</li>
          </div>
          
          </div>

              {/*         
                        <li onClick={() => openEditModal(task._id)}>
                          <i class="fa-regular fa-pen-to-square"></i>
                        </li> */}
              {/* 
                              <div>
                                <li>
                                  <strong>{task.task_title}</strong>
                                </li>
                                <li>{task.task_description}</li>
                                <div style={{ display: "flex", gap: "5px" }}>
                                  <li>{task.today}</li>
                                  <li>{task.priority}</li>
                                </div>
                              </div>
                            </div> */}

              <div className="inbox-col2">
                <li onClick={() => openEditModal(task._id)}>
                  <i class="fa-regular fa-pen-to-square"></i>
                </li>

                <li onClick={() => deleteTask(task._id)}>
                  <i class="fa-regular fa-trash-can"></i>
                </li>
              </div>

        </ul>
        <hr />
          </div>
        ))}
    </main>
  </div>
  );
};

export default Inbox;
